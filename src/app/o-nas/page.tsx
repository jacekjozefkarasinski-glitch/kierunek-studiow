export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          O nas
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
          Poznaj nasz kierunek.
        </h1>

        <div className="mt-10 max-w-2xl space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            Tutaj znajdzie się opis kierunku studiów, jego najważniejszych
            założeń oraz informacje o tym, czego mogą spodziewać się nasi
            studenci.
          </p>

          <p>
            W tym miejscu możemy również przedstawić sylwetkę kierunku,
            specjalności, możliwości rozwoju oraz najważniejsze informacje
            dla kandydatów.
          </p>

          <p>
            Treść tej strony możemy później zastąpić właściwymi informacjami
            dotyczącymi Twojego kierunku.
          </p>
        </div>
      </section>
    </main>
  );
}