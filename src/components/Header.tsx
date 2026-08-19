export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          NAZWA KIERUNKU
        </a>

        <nav className="flex items-center gap-7 text-sm font-medium">
          <a
            href="/o-nas"
            className="text-zinc-600 transition hover:text-zinc-950"
          >
            O nas
          </a>

          <a
            href="/kontakt"
            className="text-zinc-600 transition hover:text-zinc-950"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}