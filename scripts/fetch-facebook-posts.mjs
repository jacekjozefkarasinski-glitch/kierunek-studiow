import fs from "node:fs";
import path from "node:path";

const PAGE_ID = "620140001190559";
const ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const API_VERSION = "v26.0";

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

const posts = [];

function getVideoId(post) {
  const attachment = post.attachments?.data?.[0];

  if (!attachment) {
    return null;
  }

  const mediaType = String(attachment.media_type ?? "").toLowerCase();

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

async function getVideoSource(videoId) {
  const videoUrl =
    `https://graph.facebook.com/${API_VERSION}/${videoId}` +
    `?fields=source` +
    `&access_token=${encodeURIComponent(ACCESS_TOKEN)}`;

  const response = await fetch(videoUrl);

  if (!response.ok) {
    console.log(`Nie udało się pobrać video source dla ${videoId}`);
    return null;
  }

  const data = await response.json();

  return data.source ?? null;
}

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

  for (const post of data.data ?? []) {
    const videoId = getVideoId(post);

    let videoUrl = null;

    if (videoId) {
      videoUrl = await getVideoSource(videoId);

      if (videoUrl) {
        console.log(`Znaleziono wideo dla posta ${post.id}`);
      }
    }

    posts.push({
      id: post.id,
      message: post.message,
      created_time: post.created_time,
      permalink_url: post.permalink_url,
      full_picture: post.full_picture,
      video_url: videoUrl,
    });
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