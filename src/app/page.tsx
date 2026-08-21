import Link from "next/link";
import Image from "next/image";
import BackgroundSlideshow from "@/components/BackgroundSlideshow";
import posts from "@/data/facebook-posts.json";

type FacebookPost = {
  id: string;
  message?: string;
  created_time: string;
  permalink_url?: string;
  full_picture?: string;
  video_url?: string;
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

{/* Wprowadzenie ze zmieniającymi się zdjęciami Wydziału w tle */}
<section className="relative overflow-hidden">
  <BackgroundSlideshow />

  <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
    <div className="grid min-w-0 gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-10">
      {/* Tekst */}
      <div className="min-w-0">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
          Wydział Zarządzania Uniwersytetu Warszawskiego
        </p>

        <h1 className="break-words text-4xl font-semibold tracking-tight text-[#08265c] sm:text-5xl lg:text-6xl">
          Inwestycje i analiza danych
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-slate-700">
  3-semestralne studia magisterskie dla osób, które chcą łączyć
  wiedzę z zakresu inwestycji, finansów i analizy danych oraz
  podejmować decyzje oparte na rzetelnych informacjach.
</p>
      </div>

      {/* Duże logotypy */}
<div className="flex min-w-0 items-center justify-center gap-4 sm:gap-6 lg:flex-col lg:gap-5">

  {/* Logo kierunku */}
  <div className="relative h-32 w-32 shrink-0 sm:h-40 sm:w-40 lg:h-44 lg:w-44">
    <Image
      src="/kierunek-studiow/images/logo-kierunku-transparent.png"
      alt="Logo kierunku Inwestycje i analiza danych"
      fill
      unoptimized
      sizes="(max-width: 640px) 128px, 176px"
      className="object-contain"
    />
  </div>

  {/* Separator */}
  <div className="h-24 w-px shrink-0 bg-slate-300 sm:h-32 lg:h-px lg:w-72" />

  {/* Logo Wydziału */}
  <div className="relative h-16 min-w-0 flex-1 sm:h-20 lg:h-24 lg:w-80 lg:flex-none">
    <Image
      src="/kierunek-studiow/images/logo-wydzialu-transparent.png"
      alt="Wydział Zarządzania Uniwersytetu Warszawskiego"
      fill
      unoptimized
      sizes="(max-width: 640px) 45vw, 320px"
      className="object-contain object-center"
    />
  </div>

</div>
    </div>

    {/* Kafelki */}
    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-medium text-slate-500">
          Forma studiów
        </p>
        <p className="mt-2 text-xl font-semibold text-[#08265c]">
          Studia II stopnia
        </p>
      </div>

      <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-medium text-slate-500">
          Tryb
        </p>
        <p className="mt-2 text-xl font-semibold text-[#08265c]">
          Stacjonarne i zaoczne
        </p>
      </div>

      <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-medium text-slate-500">
          Czas trwania
        </p>
        <p className="mt-2 text-xl font-semibold text-[#08265c]">
          3 semestry
        </p>
      </div>

      <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-medium text-slate-500">
          Edycja
        </p>
        <p className="mt-2 text-xl font-semibold text-[#08265c]">
          II edycja
        </p>
      </div>

      <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-medium text-slate-500">
          Uczelnia
        </p>
        <p className="mt-2 text-xl font-semibold text-[#08265c]">
          Uniwersytet Warszawski
          <br />
          Wydział Zarządzania
        </p>
      </div>
    </div>
  </div>
</section>

{/* Rekrutacja CTA */}
<section className="bg-[#e9c93e]">
  <div className="mx-auto max-w-6xl px-6 py-6 lg:px-8">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      
      {/* Tekst */}
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
          Rekrutacja
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-[#08265c]">
          Zapoznaj się z zasadami rekrutacji i aplikuj na nasz kierunek
        </h2>
      </div>

      {/* Przyciski */}
      <div className="flex shrink-0 flex-wrap gap-3">
        <Link
          href="/dolacz-do-nas"
          className="inline-flex items-center justify-center rounded-full bg-[#08265c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#113b82]"
        >
          Dołącz do nas →
        </Link>

        <a
          href="https://irk.uw.edu.pl/pl/offer/PELNE2026/field/P_IAD/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#2f97d1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2584b9]"
        >
          IRK ↗
        </a>
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
                    {post.video_url ? (
                      <div className="aspect-video w-full bg-black">
                        <video
                          controls
                          preload="metadata"
                          poster={post.full_picture}
                          className="h-full w-full object-contain"
                        >
                          <source src={post.video_url} />

                          Twoja przeglądarka nie obsługuje odtwarzania wideo.
                        </video>
                      </div>
                    ) : post.full_picture ? (
                      <div className="relative aspect-[16/9] w-full bg-slate-100">
                        <Image
                          src={post.full_picture}
                          alt=""
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ) : null}

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
                            className="text-sm font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
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