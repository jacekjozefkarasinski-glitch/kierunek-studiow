import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">

        {/* Lewa część nagłówka */}
        <div className="flex items-center gap-5">
          {/* Nazwa kierunku */}
          <Link href="/" className="group flex flex-col">
            <span className="text-base font-bold tracking-tight text-[#08265c] sm:text-lg">
              Inwestycje i analiza danych
            </span>

            <span className="hidden text-xs font-medium text-slate-500 sm:block">
              Wydział Zarządzania UW
            </span>
          </Link>

          {/* Logotypy */}
          <div className="hidden items-center gap-4 border-l border-slate-200 pl-5 md:flex">
            {/* Logo kierunku */}
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/kierunek-studiow/images/logo-kierunku.png"
                alt="Logo kierunku Inwestycje i analiza danych"
                fill
                className="scale-[1.03] object-cover"
              />
            </div>

            {/* Logo Wydziału */}
            <div className="relative h-10 w-48">
              <Image
                src="/kierunek-studiow/images/logo-wydzialu.png"
                alt="Wydział Zarządzania Uniwersytetu Warszawskiego"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>

        {/* Nawigacja */}
        <nav
          className="flex items-center gap-3 sm:gap-4"
          aria-label="Główna nawigacja"
        >
          {/* Dołącz do nas */}
          <Link
            href="/dolacz-do-nas"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#e9c93e] px-4 py-2.5 text-sm font-semibold text-[#08265c] transition hover:bg-[#f1d75d] hover:shadow-md"
          >
            Dołącz do nas
          </Link>

          {/* Program */}
<Link
  href="/program"
  className="hidden text-sm font-medium text-slate-600 transition hover:text-[#2f97d1] md:block"
>
  Program
</Link>

          {/* Aktualności */}
          <Link
            href="/aktualnosci"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-[#2f97d1] md:block"
          >
            Aktualności
          </Link>

          {/* Autorzy */}
          <Link
  href="/autorzy"
  className="text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
>
  Autorzy
</Link>

          {/* Kontakt */}
          <Link
            href="/kontakt"
            className="text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
          >
            Kontakt
          </Link>

          {/* Facebook */}
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