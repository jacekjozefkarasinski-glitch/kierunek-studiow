import Link from "next/link";
import BackgroundSlideshow from "@/components/BackgroundSlideshow";

export default function DolaczDoNasPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-[#08265c] text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
            Rekrutacja
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Dołącz do nas
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Zapoznaj się z najważniejszymi informacjami dotyczącymi rekrutacji
            na kierunek Inwestycje i analiza danych i przejdź do systemu IRK,
            aby złożyć aplikację.
          </p>
        </div>
      </section>

      {/* NAJWAŻNIEJSZE INFORMACJE */}
      <section className="bg-[#f4f8fc]">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* Poziom */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">
                Poziom studiów
              </p>

              <p className="mt-2 text-xl font-semibold text-[#08265c]">
                Studia II stopnia
              </p>
            </div>

            {/* Czas */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">
                Czas trwania
              </p>

              <p className="mt-2 text-xl font-semibold text-[#08265c]">
                3 semestry
              </p>
            </div>

            {/* Tryb */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">
                Tryb
              </p>

              <p className="mt-2 text-xl font-semibold text-[#08265c]">
                Stacjonarne i zaoczne
              </p>
            </div>

            {/* Edycja */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">
                Edycja
              </p>

              <p className="mt-2 text-xl font-semibold text-[#08265c]">
                II edycja
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JAK APLIKOWAĆ — ZDJĘCIA WYDZIAŁU W TLE */}
      <section className="relative overflow-hidden">
        {/* Slideshow zaczynający od wydzial-3.jpg */}
        <BackgroundSlideshow initialIndex={2} />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-stretch lg:gap-10">
            {/* Rekrutacja krok po kroku */}
            <div className="rounded-3xl border border-white/80 bg-white/90 p-7 shadow-lg backdrop-blur-sm sm:p-9">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
                Jak aplikować
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#08265c]">
                Rekrutacja krok po kroku
              </h2>

              <div className="mt-8 space-y-7">
                {/* Krok 1 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#08265c] text-sm font-semibold text-white">
                    1
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#08265c]">
                      Sprawdź informacje o kierunku
                    </h3>

                    <p className="mt-1 leading-7 text-slate-700">
                      Zapoznaj się z programem studiów, trybem kształcenia
                      oraz najważniejszymi informacjami organizacyjnymi.
                    </p>
                  </div>
                </div>

                {/* Krok 2 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#08265c] text-sm font-semibold text-white">
                    2
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#08265c]">
                      Zarejestruj się w IRK
                    </h3>

                    <p className="mt-1 leading-7 text-slate-700">
                      Załóż konto lub zaloguj się w systemie Internetowej
                      Rekrutacji Kandydatów Uniwersytetu Warszawskiego.
                    </p>
                  </div>
                </div>

                {/* Krok 3 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#08265c] text-sm font-semibold text-white">
                    3
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#08265c]">
                      Wybierz kierunek i złóż aplikację
                    </h3>

                    <p className="mt-1 leading-7 text-slate-700">
                      W systemie IRK wybierz „Inwestycje i analiza danych”,
                      uzupełnij wymagane dane i postępuj zgodnie z instrukcjami.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA IRK */}
            <div className="flex flex-col justify-center rounded-3xl bg-[#e9c93e] p-8 text-[#08265c] shadow-lg sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                Aplikuj online
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Przejdź do systemu IRK
              </h2>

              <p className="mt-4 text-lg leading-8">
                Rekrutacja na studia odbywa się za pośrednictwem systemu
                Internetowej Rekrutacji Kandydatów Uniwersytetu Warszawskiego.
              </p>

              <div className="mt-7">
                <a
                  href="https://irk.uw.edu.pl/pl/offer/PELNE2026/field/P_IAD/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-[#08265c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#113b82] hover:shadow-md"
                >
                  Otwórz IRK ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT / POWRÓT */}
      <section className="border-t border-slate-200 bg-[#f4f8fc]">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#08265c]">
              Masz pytania?
            </h2>

            <p className="mt-2 text-slate-600">
              Skontaktuj się z nami lub wróć do strony głównej.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="rounded-full bg-[#08265c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#113b82]"
            >
              Kontakt
            </Link>

            <Link
              href="/"
              className="rounded-full border border-[#08265c] px-6 py-3 text-sm font-semibold text-[#08265c] transition hover:bg-[#08265c] hover:text-white"
            >
              Strona główna
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}