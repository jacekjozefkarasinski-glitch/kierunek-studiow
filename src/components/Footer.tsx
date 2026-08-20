import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#08265c] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Kierunek */}
          <div>
            <p className="text-lg font-semibold">
              Inwestycje i analiza danych
            </p>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
              3-semestralne studia magisterskie na Wydziale Zarządzania
              Uniwersytetu Warszawskiego.
            </p>
          </div>

          {/* Nawigacja */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#55b5e8]">
              Strona
            </p>

            <nav className="mt-4 flex flex-col items-start gap-3 text-sm">
              <Link
                href="/"
                className="text-slate-300 transition hover:text-white"
              >
                Strona główna
              </Link>

              <Link
                href="/o-nas"
                className="text-slate-300 transition hover:text-white"
              >
                O nas
              </Link>

              <Link
                href="/kontakt"
                className="text-slate-300 transition hover:text-white"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Facebook */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#55b5e8]">
              Bądź na bieżąco
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Obserwuj nas na Facebooku, aby nie przegapić aktualności,
              wydarzeń i informacji o rekrutacji.
            </p>

            <a
              href="https://www.facebook.com/profile.php?id=61576578910562"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1468d4]"
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#1877F2]"
                aria-hidden="true"
              >
                f
              </span>

              Facebook
            </a>
          </div>
        </div>

        {/* Dolny pasek */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Inwestycje i analiza danych
          </p>

          <p>
            Wydział Zarządzania Uniwersytetu Warszawskiego
          </p>
        </div>
      </div>
    </footer>
  );
}