import Link from "next/link";
import Image from "next/image";
import BackgroundSlideshow from "@/components/BackgroundSlideshow";

export default function ProgramPage() {
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
          Program studiów
        </h1>

        <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-slate-200">
          Nowoczesny program łączący finanse, technologie IT, analizę danych
          i sztuczną inteligencję.
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

      {/* Cele programu – zdjęcia Wydziału w tle */}
      <section className="relative overflow-hidden">
        {/* Pokaz slajdów */}
        <div className="absolute inset-0">
          <BackgroundSlideshow />

          {/* Jasna warstwa zapewniająca czytelność */}
          <div className="absolute inset-0 bg-white/5" />
        </div>

        {/* Treść sekcji */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
              Program
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#08265c] sm:text-4xl">
              Cele programu studiów
            </h2>
          </div>

          <div className="mt-9 grid gap-5">
            {/* Punkt 1 */}
            <div className="flex gap-5 rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-7">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#08265c] font-semibold text-white">
                1
              </div>

              <p className="text-base font-medium leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Celem kierunku studiów jest przygotowanie nowoczesnych
                specjalistów, którzy łączą wiedzę z finansów, technologii IT
                i analizy danych.
              </p>
            </div>

            {/* Punkt 2 */}
            <div className="flex gap-5 rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-7">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#08265c] font-semibold text-white">
                2
              </div>

              <p className="text-base font-medium leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Studenci nauczą się od podstaw wykorzystywać narzędzia
                programistyczne, takie jak Python, R i SQL, w analizie danych,
                oraz poznają zastosowania sztucznej inteligencji w ocenie
                ryzyka i zarządzaniu portfelem inwestycyjnym.
              </p>
            </div>

            {/* Punkt 3 */}
            <div className="flex gap-5 rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-7">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#08265c] font-semibold text-white">
                3
              </div>

              <p className="text-base font-medium leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Zdobędą wiedzę pozwalającą na skuteczne reagowanie na zmiany
                w cyfrowej i zrobotyzowanej gospodarce oraz na tworzenie
                profesjonalnych raportów i rekomendacji inwestycyjnych
                opartych na rzeczywistych danych.
              </p>
            </div>

            {/* Punkt 4 */}
            <div className="flex gap-5 rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-7">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#08265c] font-semibold text-white">
                4
              </div>

              <p className="text-base font-medium leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Program pozwoli rozwinąć kompetencje z pogranicza finansów
                i data science oraz umiejętności analitycznego i strategicznego
                myślenia – cenione w pracy analityków, menedżerów i doradców
                inwestycyjnych.
              </p>
            </div>

            {/* Punkt 5 */}
            <div className="flex gap-5 rounded-2xl border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-7">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#08265c] font-semibold text-white">
                5
              </div>

              <p className="text-base font-medium leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Absolwenci będą przygotowani do swobodnej pracy z narzędziami
                AI, optymalizacji strategii inwestycyjnych i podejmowania
                decyzji w dynamicznym otoczeniu rynkowym. Dzięki zdobytym
                kwalifikacjom staną się cenionymi specjalistami zarówno na
                rynku krajowym, jak i międzynarodowym.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atuty kierunku */}
      <section className="bg-[#08265c] text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
                Dlaczego warto
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Atuty kierunku
              </h2>
            </div>

            <div>
              <p className="text-lg font-medium leading-8 text-slate-200">
                Atutem kierunku jest synergia wiedzy ekonomicznej z
                informatyczną, umożliwiająca trafną interpretację zjawisk
                finansowych i elastyczność na rynku pracy.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-200">
                Program oparty jest na nauce poprzez praktykę – projekty,
                case studies i analiza danych. Zajęcia prowadzone są przez
                wykładowców oraz praktyków rynku, którzy podzielą się aktualną
                wiedzą i doświadczeniem, łącząc teorię z realiami
                funkcjonowania sektora finansowego i niefinansowego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Szczegółowe informacje */}
      <section className="bg-[#f4f8fc]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
              Program i organizacja studiów
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#08265c] sm:text-4xl">
              Szczegółowe informacje
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Zapoznaj się ze szczegółowymi informacjami dotyczącymi programu
              i organizacji studiów w wybranym trybie.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Studia stacjonarne */}
            <a
              href="https://wz.uw.edu.pl/student/studia-magisterskie/inwestycje-i-analiza-danych/dzienne/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2f97d1]">
                Tryb studiów
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#08265c]">
                Studia stacjonarne
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Szczegółowe informacje dotyczące programu i organizacji
                studiów stacjonarnych.
              </p>

              <p className="mt-6 font-semibold text-[#08265c] transition group-hover:text-[#2f97d1]">
                Zobacz szczegóły →
              </p>
            </a>

            {/* Studia zaoczne */}
            <a
              href="https://wz.uw.edu.pl/student/studia-magisterskie/inwestycje-i-analiza-danych/zaoczne/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2f97d1]">
                Tryb studiów
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#08265c]">
                Studia zaoczne
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Szczegółowe informacje dotyczące programu i organizacji
                studiów zaocznych.
              </p>

              <p className="mt-6 font-semibold text-[#08265c] transition group-hover:text-[#2f97d1]">
                Zobacz szczegóły →
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Rekrutacja */}
      <section className="bg-[#e9c93e] text-[#08265c]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-9 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">
              Rekrutacja
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Chcesz studiować z nami?
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/dolacz-do-nas"
              className="rounded-full bg-[#08265c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#113b82]"
            >
              Dołącz do nas →
            </Link>

            <a
              href="https://irk.uw.edu.pl/pl/offer/PELNE2026/field/P_IAD/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#08265c] px-6 py-3 text-sm font-semibold transition hover:bg-[#08265c] hover:text-white"
            >
              IRK ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}