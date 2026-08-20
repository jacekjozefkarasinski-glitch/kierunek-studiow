import Link from "next/link";

const posts = [
  {
    date: "18 sierpnia 2026",
    text: "Rozpoczęła się rekrutacja na nowy rok akademicki. Zapraszamy wszystkich zainteresowanych do zapoznania się z ofertą naszego kierunku.",
    type: "Rekrutacja",
  },
  {
    date: "12 sierpnia 2026",
    text: "Poznaj naszych wykładowców i dowiedz się więcej o tym, jak wygląda studiowanie na naszym kierunku.",
    type: "Aktualność",
  },
  {
    date: "5 sierpnia 2026",
    text: "Przypominamy o najważniejszych terminach związanych z rozpoczęciem nowego roku akademickiego.",
    type: "Informacja",
  },
  {
    date: "28 lipca 2026",
    text: "Zapraszamy do śledzenia naszych aktualności. Już wkrótce więcej informacji o wydarzeniach i życiu naszego kierunku.",
    type: "Wydarzenie",
  },
];

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
              <span className="text-zinc-400">
                otwiera możliwości.
              </span>
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

      {/* Aktualności z Facebooka */}
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

          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group rounded-2xl border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                    {post.type}
                  </span>

                  <span className="text-xs text-zinc-400">
                    {post.date}
                  </span>
                </div>

                <p className="text-base leading-7 text-zinc-700">
                  {post.text}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-zinc-100 pt-5">
                  <span className="text-xs font-medium text-zinc-400">
                    Facebook
                  </span>

                  <a
                    href="#"
                    className="text-sm font-medium text-zinc-900 transition group-hover:underline"
                  >
                    Czytaj więcej →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950 hover:underline"
            >
              Zobacz wszystkie aktualności na Facebooku →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}