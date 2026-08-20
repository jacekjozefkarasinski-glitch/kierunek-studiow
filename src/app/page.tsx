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

const facebookPosts = (posts as FacebookPost[])
  .filter((post) => post.message && post.message.trim().length > 0)
  .slice(0, 6);

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-[#08265c]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/kierunek-studiow/images/hero-mobile.png"
            />

            <img
              src="/kierunek-studiow/images/hero-desktop.png"
              alt="Inwestycje i analiza danych – II edycja studiów magisterskich"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </picture>
        </div>
      </section>

      {/* Wprowadzenie */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
              Wydział Zarządzania Uniwersytetu Warszawskiego
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-[#08265c] sm:text-5xl lg:text-6xl">
              Inwestycje i analiza danych
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              3-semestralne studia magisterskie dla osób, które chcą łączyć
              wiedzę z zakresu inwestycji, finansów i analizy danych oraz
              podejmować decyzje oparte na rzetelnych informacjach.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium text-slate-500">
                Forma studiów
              </p>
              <p className="mt-2 text-xl font-semibold text-[#08265c]">
                Studia II stopnia
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium text-slate-500">
                Czas trwania
              </p>
              <p className="mt-2 text-xl font-semibold text-[#08265c]">
                3 semestry
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium text-slate-500">
                Edycja
              </p>
              <p className="mt-2 text-xl font-semibold text-[#08265c]">
                II edycja
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium text-slate-500">
                Uczelnia
              </p>
              <p className="mt-2 text-xl font-semibold text-[#08265c]">
                Uniwersytet Warszawski
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook CTA */}
      <section className="bg-[#08265c] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-9 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
              Facebook
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Bądź na bieżąco z życiem kierunku
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-200">
              Aktualności, wydarzenia, informacje o rekrutacji i materiały
              związane z kierunkiem publikujemy również na naszej stronie
              Facebook.
            </p>
          </div>

          <a
            href="https://www.facebook.com/profile.php?id=61576578910562"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#2f97d1] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#2584b9]"
          >
            Odwiedź nas na Facebooku →
          </a>
        </div>
      </section>

      {/* Aktualności */}
      <section id="aktualnosci" className="bg-[#f4f8fc]">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-14">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
                Aktualności
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#08265c] sm:text-4xl">
                Najnowsze informacje
              </h2>
            </div>

            <span className="hidden text-sm text-slate-500 sm:block">
              Automatycznie pobierane z Facebooka
            </span>
          </div>

          {facebookPosts.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
              Brak aktualności do wyświetlenia.
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2">
                {facebookPosts.map((post) => (
                  <article
                    key={post.id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    {post.full_picture && (
                      <div className="relative aspect-[16/9] w-full bg-slate-100">
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
                        <span className="rounded-full bg-[#e8f4fb] px-3 py-1 text-xs font-semibold text-[#1679ad]">
                          Facebook
                        </span>

                        <span className="text-xs text-slate-400">
                          {formatDate(post.created_time)}
                        </span>
                      </div>

                      <p className="line-clamp-5 whitespace-pre-line text-base leading-7 text-slate-700">
  {post.message}
</p>

                      {post.permalink_url && (
                        <div className="mt-7 border-t border-slate-100 pt-5">
                          <a
                            href={post.permalink_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-[#08265c] hover:text-[#2f97d1]"
                          >
                            Zobacz post na Facebooku →
                          </a>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Link
                  href="/aktualnosci"
                  className="inline-flex items-center justify-center rounded-full bg-[#08265c] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#113b82]"
                >
                  Zobacz wszystkie aktualności →
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Dolne CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl bg-[#e9c93e] px-8 py-10 text-[#08265c] lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                II edycja
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                3-semestralne studia magisterskie
              </h2>
            </div>

            <div className="mt-6 lg:mt-0">
              <Link
                href="/o-nas"
                className="inline-flex rounded-full bg-[#08265c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#113b82]"
              >
                Dowiedz się więcej
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}