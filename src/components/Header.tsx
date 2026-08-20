import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        {/* Nazwa kierunku */}
        <Link href="/" className="group flex flex-col">
          <span className="text-base font-bold tracking-tight text-[#08265c] sm:text-lg">
            Inwestycje i analiza danych
          </span>

          <span className="hidden text-xs font-medium text-slate-500 sm:block">
            Wydział Zarządzania UW
          </span>
        </Link>

        {/* Nawigacja */}
        <nav
          className="flex items-center gap-4 sm:gap-6"
          aria-label="Główna nawigacja"
        >
          <Link
  href="/#aktualnosci"
  className="hidden text-sm font-medium text-slate-600 transition hover:text-[#2f97d1] md:block"
>
  Aktualności
</Link>

          <Link
            href="/o-nas"
            className="text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
          >
            O nas
          </Link>

          <Link
            href="/kontakt"
            className="text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
          >
            Kontakt
          </Link>

          <a
            href="https://www.facebook.com/profile.php?id=61576578910562"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź naszą stronę na Facebooku"
            className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1468d4]"
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#1877F2]"
              aria-hidden="true"
            >
              f
            </span>

            <span className="hidden lg:inline">Facebook</span>
          </a>
        </nav>
      </div>
    </header>
  );
}