import fs from "node:fs";
import path from "node:path";

const PAGE_ID = "620140001190559";
const ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const API_VERSION = "v26.0";

const outputDirectory = path.join(
  process.cwd(),
  "src",
  "data"
);

const outputFile = path.join(
  outputDirectory,
  "facebook-posts.json"
);

if (!ACCESS_TOKEN) {
  console.error("Brak FACEBOOK_PAGE_ACCESS_TOKEN");
  process.exit(1);
}

const fields = [
  "id",
  "message",
  "created_time",
  "permalink_url",
  "full_picture",
  "attachments{media_type,target,url}",
].join(",");

let url =
  `https://graph.facebook.com/${API_VERSION}/${PAGE_ID}/posts` +
  `?fields=${encodeURIComponent(fields)}` +
  `&limit=100` +
  `&access_token=${encodeURIComponent(ACCESS_TOKEN)}`;


/* =========================================================
   WCZYTANIE ISTNIEJĄCEGO ARCHIWUM
   ========================================================= */

function loadExistingPosts() {
  if (!fs.existsSync(outputFile)) {
    console.log("Brak istniejącego archiwum.");
    return [];
  }

  try {
    const raw = fs.readFileSync(outputFile, "utf8");
    const data = JSON.parse(raw);

    if (!Array.isArray(data)) {
      throw new Error(
        "facebook-posts.json nie zawiera tablicy."
      );
    }

    return data;
  } catch (error) {
    console.error(
      "Nie udało się odczytać istniejącego archiwum."
    );

    console.error(error);

    process.exit(1);
  }
}


/* =========================================================
   ROZPOZNAWANIE FILMÓW
   ========================================================= */

function getVideoId(post) {
  const attachment = post.attachments?.data?.[0];

  if (!attachment) {
    return null;
  }

  const mediaType = String(
    attachment.media_type ?? ""
  ).toLowerCase();

  if (!mediaType.includes("video")) {
    return null;
  }

  if (attachment.target?.id) {
    return attachment.target.id;
  }

  const possibleUrl =
    attachment.target?.url ??
    attachment.url ??
    "";

  const match = possibleUrl.match(/\/videos\/(\d+)/);

  return match?.[1] ?? null;
}


/* =========================================================
   POBIERANIE ŹRÓDŁA WIDEO
   ========================================================= */

async function getVideoSource(videoId) {
  const videoUrl =
    `https://graph.facebook.com/${API_VERSION}/${videoId}` +
    `?fields=source` +
    `&access_token=${encodeURIComponent(ACCESS_TOKEN)}`;

  try {
    const response = await fetch(videoUrl);

    if (!response.ok) {
      console.warn(
        `Nie udało się pobrać źródła wideo dla ${videoId}.`
      );

      return null;
    }

    const data = await response.json();

    return data.source ?? null;
  } catch (error) {
    console.warn(
      `Błąd podczas pobierania wideo ${videoId}.`
    );

    return null;
  }
}


/* =========================================================
   GŁÓWNA FUNKCJA
   ========================================================= */

async function main() {
  console.log("========================================");
  console.log("PEŁNE POBIERANIE HISTORII FACEBOOKA");
  console.log("========================================");

  const existingPosts = loadExistingPosts();

  console.log(
    `Postów w istniejącym archiwum: ${existingPosts.length}`
  );

  /*
   * Tworzymy Mapę na podstawie istniejącego archiwum.
   * Dzięki temu niczego nie kasujemy i nie tworzymy
   * duplikatów.
   */
  const postsById = new Map();

  for (const post of existingPosts) {
    if (post?.id) {
      postsById.set(post.id, post);
    }
  }

  let downloadedCount = 0;
  let pageNumber = 0;


  /* =======================================================
     PAGINACJA — POBIERAMY WSZYSTKIE DOSTĘPNE STRONY
     ======================================================= */

  while (url) {
    pageNumber++;

    console.log("");
    console.log(
      `Pobieranie strony ${pageNumber}...`
    );

    const response = await fetch(url);

    if (!response.ok) {
      const error = await response.text();

      console.error("Facebook API error:");
      console.error(error);

      /*
       * Jeżeli Facebook przerwie pobieranie,
       * NIE zapisujemy częściowego archiwum.
       */
      throw new Error(
        "Facebook przerwał pobieranie historii. Archiwum pozostaje bez zmian."
      );
    }

    const data = await response.json();

    const facebookPosts = data.data ?? [];

    console.log(
      `Facebook zwrócił ${facebookPosts.length} postów.`
    );

    for (const post of facebookPosts) {
      const oldPost = postsById.get(post.id);

      let videoUrl =
        oldPost?.video_url ?? null;

      /*
       * Źródło filmu pobieramy tylko wtedy,
       * gdy jeszcze go nie mamy.
       */
      if (!videoUrl) {
        const videoId = getVideoId(post);

        if (videoId) {
          videoUrl = await getVideoSource(videoId);

          if (videoUrl) {
            console.log(
              `Znaleziono wideo dla posta ${post.id}`
            );
          }
        }
      }

      postsById.set(post.id, {
        id: post.id,
        message: post.message,
        created_time: post.created_time,
        permalink_url: post.permalink_url,
        full_picture: post.full_picture,
        video_url: videoUrl,
      });

      downloadedCount++;
    }

    console.log(
      `Pobrano z API: ${downloadedCount}`
    );

    console.log(
      `Unikalnych postów w archiwum: ${postsById.size}`
    );

    /*
     * Facebook podaje adres następnej strony.
     * Jeśli go nie ma, dotarliśmy do końca historii.
     */
    url = data.paging?.next ?? null;
  }


  /* =======================================================
     BUDOWANIE PEŁNEGO ARCHIWUM
     ======================================================= */

  const completeArchive = Array.from(
    postsById.values()
  );

  completeArchive.sort((a, b) => {
    return (
      new Date(b.created_time).getTime() -
      new Date(a.created_time).getTime()
    );
  });


  /* =======================================================
     ZABEZPIECZENIA
     ======================================================= */

  if (completeArchive.length === 0) {
    throw new Error(
      "Facebook zwrócił puste archiwum. Zapis anulowany."
    );
  }

  if (
    existingPosts.length > 0 &&
    completeArchive.length < existingPosts.length
  ) {
    throw new Error(
      "Nowe archiwum jest mniejsze od istniejącego. Zapis anulowany."
    );
  }


  /* =======================================================
     BEZPIECZNY ZAPIS
     ======================================================= */

  fs.mkdirSync(
    outputDirectory,
    {
      recursive: true,
    }
  );

  const temporaryFile =
    `${outputFile}.tmp`;

  fs.writeFileSync(
    temporaryFile,
    JSON.stringify(completeArchive, null, 2),
    "utf8"
  );


  /*
   * Kontrola pliku przed zastąpieniem archiwum.
   */
  const verification = JSON.parse(
    fs.readFileSync(
      temporaryFile,
      "utf8"
    )
  );

  if (!Array.isArray(verification)) {
    fs.unlinkSync(temporaryFile);

    throw new Error(
      "Kontrola pliku tymczasowego nie powiodła się."
    );
  }

  if (
    verification.length < existingPosts.length
  ) {
    fs.unlinkSync(temporaryFile);

    throw new Error(
      "Plik tymczasowy zawiera mniej postów niż istniejące archiwum."
    );
  }


  /*
   * Dopiero teraz zastępujemy właściwy JSON.
   */
  fs.renameSync(
    temporaryFile,
    outputFile
  );


  console.log("");
  console.log("========================================");
  console.log("PEŁNA HISTORIA POBRANA");
  console.log("========================================");

  console.log(
    `Postów przed pobieraniem: ${existingPosts.length}`
  );

  console.log(
    `Pobrano z Facebook API: ${downloadedCount}`
  );

  console.log(
    `Postów w archiwum: ${completeArchive.length}`
  );

  console.log(
    `Zapisano do: ${outputFile}`
  );

  console.log("========================================");
}


main().catch((error) => {
  console.error("");
  console.error("Błąd pobierania Facebooka:");
  console.error(error.message);

  process.exitCode = 1;
});