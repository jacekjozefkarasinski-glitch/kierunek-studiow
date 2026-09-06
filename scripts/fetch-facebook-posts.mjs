import fs from "node:fs";
import path from "node:path";

const PAGE_ID = "620140001190559";
const ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const API_VERSION = "v26.0";

// Pobieramy tylko najnowsze posty.
// Na stronie głównej nadal możemy wyświetlać tylko 3.
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


/*
 * Odczyt istniejącego archiwum.
 *
 * Jeżeli plik istnieje, nigdy nie zaczynamy od pustej tablicy.
 * Dotychczasowe posty pozostają podstawą archiwum.
 */
function loadExistingPosts() {
  if (!fs.existsSync(outputFile)) {
    console.log(
      "Brak istniejącego archiwum. Zostanie utworzone nowe."
    );

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
     * Nie kontynuujemy, ponieważ utworzenie nowego pliku
     * mogłoby spowodować utratę historii.
     */
    process.exit(1);
  }
}


/*
 * Rozpoznawanie filmów w postach.
 */
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


/*
 * Pobieranie bezpośredniego źródła filmu.
 *
 * Niepowodzenie pobrania filmu nie powoduje
 * usunięcia całego posta.
 */
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

    console.warn(error);

    return null;
  }
}


/*
 * Główna funkcja.
 */
async function main() {
  console.log("========================================");
  console.log("Aktualizacja postów z Facebooka");
  console.log("========================================");

  /*
   * Najpierw wczytujemy dotychczasową historię.
   */
  const existingPosts = loadExistingPosts();

  console.log(
    `Postów w istniejącym archiwum: ${existingPosts.length}`
  );

  console.log(
    `Pobieranie ${FETCH_LIMIT} najnowszych postów z Facebooka...`
  );


  /*
   * Pobranie jednej strony najnowszych postów.
   *
   * Nie korzystamy już z paginacji.
   */
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.text();

    console.error("Facebook API error:");
    console.error(error);

    /*
     * Bardzo ważne:
     * w przypadku błędu NIE zapisujemy pliku.
     *
     * Dotychczasowe archiwum pozostaje nietknięte.
     */
    process.exit(1);
  }

  const data = await response.json();

  const facebookPosts = data.data ?? [];

  console.log(
    `Facebook zwrócił ${facebookPosts.length} postów.`
  );


  /*
   * Pusta odpowiedź nie może wyczyścić archiwum.
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


  /*
   * Przygotowanie najnowszych postów.
   */
  const newestPosts = [];

  for (const post of facebookPosts) {
    const videoId = getVideoId(post);

    let videoUrl = null;

    if (videoId) {
      videoUrl = await getVideoSource(videoId);

      if (videoUrl) {
        console.log(
          `Znaleziono wideo dla posta ${post.id}`
        );
      }
    }

    newestPosts.push({
      id: post.id,
      message: post.message,
      created_time: post.created_time,
      permalink_url: post.permalink_url,
      full_picture: post.full_picture,
      video_url: videoUrl,
    });
  }


  /*
   * Łączenie nowych postów z pełną historią.
   *
   * ID posta Facebooka jest kluczem,
   * dzięki czemu nie tworzymy duplikatów.
   */
  const postsById = new Map();

  /*
   * Najpierw pełne istniejące archiwum.
   */
  for (const post of existingPosts) {
    if (post?.id) {
      postsById.set(post.id, post);
    }
  }


  /*
   * Następnie dane pobrane z Facebooka.
   *
   * Jeśli post już istnieje, aktualizujemy jego dane.
   */
  for (const post of newestPosts) {
    if (post?.id) {
      const oldPost = postsById.get(post.id);

      /*
       * Jeżeli ponowne pobranie video_url się nie udało,
       * zachowujemy poprzedni URL filmu.
       */
      if (
        oldPost?.video_url &&
        !post.video_url
      ) {
        post.video_url = oldPost.video_url;
      }

      postsById.set(post.id, post);
    }
  }


  /*
   * Pełne archiwum.
   */
  const mergedPosts = Array.from(
    postsById.values()
  );


  /*
   * Sortowanie od najnowszego do najstarszego.
   */
  mergedPosts.sort((a, b) => {
    return (
      new Date(b.created_time).getTime() -
      new Date(a.created_time).getTime()
    );
  });


  console.log(
    `Postów po połączeniu: ${mergedPosts.length}`
  );


  /*
   * Zabezpieczenie przed przypadkowym
   * zmniejszeniem archiwum.
   */
  if (
    existingPosts.length > 0 &&
    mergedPosts.length < existingPosts.length
  ) {
    throw new Error(
      "Nowe dane zmniejszyłyby istniejące archiwum. Zapis anulowany."
    );
  }


  /*
   * Obliczamy liczbę rzeczywiście nowych postów.
   */
  const existingIds = new Set(
    existingPosts.map((post) => post.id)
  );

  const newPostsCount = newestPosts.filter(
    (post) => !existingIds.has(post.id)
  ).length;

  console.log(
    `Nowych postów: ${newPostsCount}`
  );


  /*
   * Tworzymy katalog, jeżeli nie istnieje.
   */
  fs.mkdirSync(
    outputDirectory,
    {
      recursive: true,
    }
  );


  /*
   * Zapis atomowy.
   *
   * Najpierw tworzymy plik tymczasowy.
   * Dopiero później zastępujemy właściwe archiwum.
   */
  const temporaryFile =
    `${outputFile}.tmp`;

  fs.writeFileSync(
    temporaryFile,
    JSON.stringify(mergedPosts, null, 2),
    "utf8"
  );


  /*
   * Dodatkowa kontrola poprawności pliku
   * przed zastąpieniem archiwum.
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
      "Plik tymczasowy zawiera mniej postów niż archiwum."
    );
  }


  /*
   * Dopiero teraz zastępujemy właściwy plik.
   */
  fs.renameSync(
    temporaryFile,
    outputFile
  );


  console.log("========================================");
  console.log("Aktualizacja zakończona.");
  console.log(
    `Pełne archiwum: ${mergedPosts.length} postów`
  );
  console.log(
    `Dodano nowych: ${newPostsCount}`
  );
  console.log(
    `Zapisano do: ${outputFile}`
  );
  console.log("========================================");
}


main().catch((error) => {
  console.error("Błąd aktualizacji Facebooka:");
  console.error(error);

  /*
   * Kod błędu powoduje, że GitHub Actions
   * uruchomi nasze zabezpieczenie/backup.
   */
  process.exitCode = 1;
});