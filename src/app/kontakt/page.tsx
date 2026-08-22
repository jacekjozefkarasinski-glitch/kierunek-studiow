import BackgroundSlideshow from "@/components/BackgroundSlideshow";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-[#08265c] text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
            Inwestycje i analiza danych
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Kontakt
          </h1>

          <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-slate-200">
            Masz pytania dotyczące kierunku, programu lub rekrutacji?
            Skontaktuj się z nami.
          </p>
        </div>
      </section>

      {/* MESSENGER — slideshow od pierwszego zdjęcia */}
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
              className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-[#1877F2] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1468d4] hover:shadow-md lg:mt-0"
            >
              Napisz przez Messenger →
            </a>
          </div>
        </div>
      </section>

      {/* DANE KONTAKTOWE */}
      <section className="bg-[#f4f8fc]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="mb-9">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
              Wydział Zarządzania UW
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#08265c] sm:text-4xl">
              Adres i dane kontaktowe
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* Adres */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">
                Adres
              </p>

              <p className="mt-3 font-semibold leading-7 text-[#08265c]">
                Wydział Zarządzania
                <br />
                Uniwersytet Warszawski
                <br />
                ul. Szturmowa 1/3
                <br />
                02-678 Warszawa
              </p>
            </div>

            {/* E-mail */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">
                E-mail
              </p>

              <a
                href="mailto:wz@wz.uw.edu.pl"
                className="mt-3 block font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
              >
                wz@wz.uw.edu.pl
              </a>
            </div>

            {/* Sekretariat */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">
                Sekretariat Dziekana
              </p>

              <a
                href="tel:+48225534002"
                className="mt-3 block font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
              >
                +48 22 55 34 002
              </a>
            </div>

            {/* Rekrutacja */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">
                Sekcja Rekrutacji
              </p>

              <a
                href="tel:+48225534190"
                className="mt-3 block font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
              >
                +48 22 55 34 190
              </a>
            </div>
          </div>

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

      {/* MAPA — slideshow zaczyna od wydzial-5.jpg */}
      <section className="relative overflow-hidden">
        <BackgroundSlideshow initialIndex={4} />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:px-8">
          {/* Nagłówek */}
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