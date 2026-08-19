export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Kontakt
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
          Skontaktuj się z nami.
        </h1>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Adres
            </h2>

            <p className="mt-3 text-lg leading-8 text-zinc-700">
              Nazwa uczelni
              <br />
              Wydział / Instytut
              <br />
              ul. Przykładowa 1
              <br />
              00-000 Miasto
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Kontakt
            </h2>

            <p className="mt-3 text-lg leading-8 text-zinc-700">
              <a
                href="mailto:kontakt@example.pl"
                className="hover:underline"
              >
                kontakt@example.pl
              </a>
              <br />
              +48 000 000 000
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}