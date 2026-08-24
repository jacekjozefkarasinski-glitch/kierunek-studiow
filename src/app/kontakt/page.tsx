import BackgroundSlideshow from "@/components/BackgroundSlideshow";
import Image from "next/image";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-[#08265c] text-white">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            {/* Tekst */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
                Inwestycje i analiza danych
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Kontakt
              </h1>

              <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-slate-200">
                Masz pytania dotyczące kierunku, programu lub rekrutacji?
                Skontaktuj się z nami.
              </p>
            </div>

            {/* Logotypy */}
            <div className="flex items-center gap-7 sm:gap-10 lg:flex-col lg:items-center lg:gap-6">
              {/* Logo kierunku */}
              <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                <Image
                  src="/kierunek-studiow/images/logo-kierunku-transparent.png"
                  alt="Logo kierunku Inwestycje i analiza danych"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Logo Wydziału */}
              <div className="relative h-20 w-52 sm:w-64 lg:h-24 lg:w-72">
                <Image
                  src="/kierunek-studiow/images/logo-wydzialu-biale-transparentne.png"
                  alt="Wydział Zarządzania Uniwersytetu Warszawskiego"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MESSENGER */}
      <section className="relative overflow-hidden">
        <BackgroundSlideshow initialIndex={0} />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <div className="rounded-3xl border border-white/80 bg-white/90 p-7 shadow-lg backdrop-blur-sm sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
                Napisz do nas
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#08265c]">
                Skontaktuj się z nami przez Messengera
              </h2>

              <p className="mt-4 text-lg font-medium leading-8 text-slate-700">
                Najszybciej możesz skontaktować się z nami, wysyłając
                wiadomość przez stronę kierunku na Facebooku.
              </p>
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=61576578910562"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#1877F2] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1468d4] hover:shadow-md lg:mt-0"
            >
              {/* Logo Messenger */}
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-[#1877F2]"
                >
                  <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.453 5.51 3.723 7.207V22l3.402-1.868c.908.251 1.873.387 2.875.387 5.523 0 10-4.145 10-9.26C22 6.145 17.523 2 12 2zm.994 12.469-2.547-2.717-4.973 2.717 5.47-5.807 2.61 2.717 4.91-2.717-5.47 5.807z" />
                </svg>
              </span>

              <span>Napisz przez Messenger</span>

              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEKCJA REKRUTACJI */}
      <section className="bg-[#f4f8fc]">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-14">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
              Wydział Zarządzania UW
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#08265c] sm:text-4xl">
              Kontakt w sprawie rekrutacji
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              W sprawach związanych z rekrutacją na studia możesz
              skontaktować się bezpośrednio z Sekcją Rekrutacji
              Wydziału Zarządzania UW.
            </p>
          </div>

          {/* Karta Sekcji Rekrutacji */}
          <div className="max-w-2xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2f97d1]">
                  C206
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-[#08265c]">
                  Sekcja Rekrutacji
                </h3>

                <div className="mt-6 space-y-3">
                  {/* Telefon */}
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Telefon
                    </p>

                    <a
                      href="tel:+48225534190"
                      className="mt-1 inline-block text-lg font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
                    >
                      22 55 34 190
                    </a>
                  </div>

                  {/* E-mail */}
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      E-mail
                    </p>

                    <a
                      href="mailto:rekrutacja@wz.uw.edu.pl"
                      className="mt-1 inline-block text-lg font-semibold text-[#2f97d1] transition hover:text-[#08265c]"
                    >
                      rekrutacja@wz.uw.edu.pl
                    </a>
                  </div>
                </div>
              </div>

              {/* Numer pokoju */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#e8f4fb] text-sm font-bold text-[#08265c]">
                C206
              </div>
            </div>
          </div>

          {/* Pełne dane WZ UW */}
          <div className="mt-7">
            <a
              href="https://wz.uw.edu.pl/kontakt/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border-2 border-[#08265c] px-6 py-3 text-sm font-semibold text-[#08265c] transition hover:bg-[#08265c] hover:text-white"
            >
              Pełne dane kontaktowe WZ UW ↗
            </a>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="relative overflow-hidden">
        <BackgroundSlideshow initialIndex={4} />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:px-8">
          {/* Nagłówek mapy */}
          <div className="mb-8 max-w-3xl rounded-3xl border border-white/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
              Lokalizacja
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#08265c]">
              Jak do nas trafić?
            </h2>

            <p className="mt-4 text-lg font-medium text-slate-700">
              Wydział Zarządzania UW, ul. Szturmowa 1/3, Warszawa.
            </p>
          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-3xl border border-white/80 bg-white shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Wydział%20Zarządzania%20Uniwersytetu%20Warszawskiego%20Szturmowa%201%2F3%20Warszawa&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Wydziału Zarządzania Uniwersytetu Warszawskiego"
            />
          </div>

          {/* Google Maps */}
          <div className="mt-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Wydział+Zarządzania+Uniwersytetu+Warszawskiego+Szturmowa+1%2F3+Warszawa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#08265c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#113b82] hover:shadow-md"
            >
              Otwórz w Google Maps ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}