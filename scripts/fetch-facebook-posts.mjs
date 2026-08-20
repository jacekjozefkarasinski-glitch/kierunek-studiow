import fs from "node:fs";
import path from "node:path";

const PAGE_ID = "620140001190559";
const ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

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
].join(",");

let url =
  `https://graph.facebook.com/v26.0/${PAGE_ID}/posts` +
  `?fields=${fields}` +
  `&limit=100` +
  `&access_token=${encodeURIComponent(ACCESS_TOKEN)}`;

const posts = [];

console.log("Pobieranie postów z Facebooka...");

while (url) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.text();
    console.error("Facebook API error:");
    console.error(error);
    process.exit(1);
  }

  const data = await response.json();

  if (Array.isArray(data.data)) {
    posts.push(...data.data);
  }

  url = data.paging?.next ?? null;

  console.log(`Pobrano dotychczas: ${posts.length}`);
}

const outputDirectory = path.join(process.cwd(), "src", "data");
const outputFile = path.join(outputDirectory, "facebook-posts.json");

fs.mkdirSync(outputDirectory, { recursive: true });

fs.writeFileSync(
  outputFile,
  JSON.stringify(posts, null, 2),
  "utf8"
);

console.log(`Gotowe. Pobrano ${posts.length} postów.`);
console.log(`Zapisano do: ${outputFile}`);