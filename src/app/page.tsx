import Link from "next/link";
import Image from "next/image";
import posts from "@/data/facebook-posts.json";

type FacebookPost = {
  id: string;
  message?: string;
  created_time: string;
  permalink_url?: string;
  full_picture?: string;
};

const facebookPosts = posts as FacebookPost[];

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Sekcja główna */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Kierunek studiów
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              Wiedza, która
              <br />
              <span className="text-zinc-400">otwiera możliwości.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
              Poznaj nasz kierunek, dowiedz się więcej o studiach i bądź na
              bieżąco z najważniejszymi wydarzeniami.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/o-nas"
                className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Poznaj nas
              </Link>

              <a
                href="#aktualnosci"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-950"
              >
                Aktualności
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Aktualności */}
      <section id="aktualnosci" className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Facebook
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Aktualności
              </h2>
            </div>

            <span className="hidden text-sm text-zinc-500 sm:block">
              Najnowsze informacje z naszego kierunku
            </span>
          </div>

          {facebookPosts.length === 0 ? (
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-zinc-600">
              Brak aktualności do wyświetlenia.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {facebookPosts.map((post) => (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {post.full_picture && (
                    <div className="relative aspect-[16/9] w-full bg-zinc-100">
                      <Image
                        src={post.full_picture}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="p-7">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                        Facebook
                      </span>

                      <span className="text-xs text-zinc-400">
                        {formatDate(post.created_time)}
                      </span>
                    </div>

                    {post.message ? (
                      <p className="whitespace-pre-line text-base leading-7 text-zinc-700">
                        {post.message}
                      </p>
                    ) : (
                      <p className="text-base leading-7 text-zinc-500">
                        Post bez treści tekstowej.
                      </p>
                    )}

                    {post.permalink_url && (
                      <div className="mt-7 border-t border-zinc-100 pt-5">
                        <a
                          href={post.permalink_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-zinc-900 hover:underline"
                        >
                          Zobacz post na Facebooku →
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}