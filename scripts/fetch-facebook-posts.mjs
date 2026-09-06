import fs from "node:fs";
import path from "node:path";

const PAGE_ID = "620140001190559";
const ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const API_VERSION = "v26.0";

/*
 * Pobieramy tylko 10 najnowszych postów.
 * Pełna historia pozostaje w facebook-posts.json.
 */
const FETCH_LIMIT = 10;

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

const url =
  `https://graph.facebook.com/${API_VERSION}/${PAGE_ID}/posts` +
  `?fields=${encodeURIComponent(fields)}` +
  `&limit=${FETCH_LIMIT}` +
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

    /*
     * Nie kontynuujemy, ponieważ nie chcemy
     * przypadkowo nadpisać archiwum.
     */
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
  console.log("AKTUALIZACJA FACEBOOKA");
  console.log("========================================");

  /*
   * Najpierw wczytujemy pełne istniejące archiwum.
   */
  const existingPosts = loadExistingPosts();

  console.log(
    `Postów w istniejącym archiwum: ${existingPosts.length}`
  );

  console.log(
    `Pobieranie ${FETCH_LIMIT} najnowszych postów z Facebooka...`
  );


  /* =======================================================
     POBIERANIE 10 NAJNOWSZYCH POSTÓW
     ======================================================= */

  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.text();

    console.error("Facebook API error:");
    console.error(error);

    /*
     * Przy błędzie API nie zapisujemy niczego.
     * Istniejące 65+ postów pozostaje nietknięte.
     */
    throw new Error(
      "Nie udało się pobrać postów z Facebooka. Archiwum pozostaje bez zmian."
    );
  }

  const data = await response.json();

  const facebookPosts = data.data ?? [];

  console.log(
    `Facebook zwrócił ${facebookPosts.length} postów.`
  );


  /*
   * Jeżeli Facebook zwróci pustą odpowiedź,
   * nie wolno nadpisywać archiwum.
   */
  if (facebookPosts.length === 0) {
    console.log(
      "Facebook zwrócił 0 postów."
    );

    console.log(
      "Istniejące archiwum pozostaje bez zmian."
    );

    return;
  }


  /* =======================================================
     MAPA ISTNIEJĄCEGO ARCHIWUM
     ======================================================= */

  const postsById = new Map();

  for (const post of existingPosts) {
    if (post?.id) {
      postsById.set(post.id, post);
    }
  }

  const existingIds = new Set(
    existingPosts
      .filter((post) => post?.id)
      .map((post) => post.id)
  );

  let newPostsCount = 0;


  /* =======================================================
     ŁĄCZENIE NOWYCH POSTÓW Z ARCHIWUM
     ======================================================= */

  for (const post of facebookPosts) {
    const existingPost = postsById.get(post.id);

    let videoUrl =
      existingPost?.video_url ?? null;

    /*
     * Jeżeli nie mamy jeszcze źródła filmu,
     * próbujemy je pobrać.
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

    /*
     * Liczymy rzeczywiście nowe posty.
     */
    if (!existingIds.has(post.id)) {
      newPostsCount++;
    }

    /*
     * Aktualizujemy istniejący post albo
     * dodajemy nowy.
     */
    postsById.set(post.id, {
      id: post.id,
      message: post.message,
      created_time: post.created_time,
      permalink_url: post.permalink_url,
      full_picture: post.full_picture,
      video_url: videoUrl,
    });
  }


  /* =======================================================
     PEŁNE ARCHIWUM
     ======================================================= */

  const mergedPosts = Array.from(
    postsById.values()
  );

  /*
   * Sortujemy od najnowszego do najstarszego.
   */
  mergedPosts.sort((a, b) => {
    return (
      new Date(b.created_time).getTime() -
      new Date(a.created_time).getTime()
    );
  });


  console.log(
    `Nowych postów: ${newPostsCount}`
  );

  console.log(
    `Postów po połączeniu: ${mergedPosts.length}`
  );


  /* =======================================================
     ZABEZPIECZENIA ARCHIWUM
     ======================================================= */

  /*
   * Absolutnie nie pozwalamy, żeby aktualizacja
   * zmniejszyła istniejące archiwum.
   */
  if (
    existingPosts.length > 0 &&
    mergedPosts.length < existingPosts.length
  ) {
    throw new Error(
      "Nowe dane zmniejszyłyby istniejące archiwum. Zapis anulowany."
    );
  }

  if (mergedPosts.length === 0) {
    throw new Error(
      "Archiwum byłoby puste. Zapis anulowany."
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

  /*
   * Najpierw zapisujemy plik tymczasowy.
   */
  const temporaryFile =
    `${outputFile}.tmp`;

  fs.writeFileSync(
    temporaryFile,
    JSON.stringify(mergedPosts, null, 2),
    "utf8"
  );


  /*
   * Sprawdzamy zapisany JSON przed zastąpieniem
   * właściwego archiwum.
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
    existingPosts.length > 0 &&
    verification.length < existingPosts.length
  ) {
    fs.unlinkSync(temporaryFile);

    throw new Error(
      "Plik tymczasowy zawiera mniej postów niż istniejące archiwum."
    );
  }


  /*
   * Dopiero po wszystkich kontrolach
   * zastępujemy właściwy plik.
   */
  fs.renameSync(
    temporaryFile,
    outputFile
  );


  console.log("");
  console.log("========================================");
  console.log("AKTUALIZACJA ZAKOŃCZONA");
  console.log("========================================");

  console.log(
    `Postów przed aktualizacją: ${existingPosts.length}`
  );

  console.log(
    `Nowych postów: ${newPostsCount}`
  );

  console.log(
    `Postów w archiwum: ${mergedPosts.length}`
  );

  console.log(
    `Zapisano do: ${outputFile}`
  );

  console.log("========================================");
}


main().catch((error) => {
  console.error("");
  console.error("Błąd aktualizacji Facebooka:");
  console.error(error.message);

  /*
   * GitHub Actions otrzyma kod błędu.
   * Workflow przywróci backup archiwum.
   */
  process.exitCode = 1;
});