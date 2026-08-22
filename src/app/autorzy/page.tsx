import BackgroundSlideshow from "@/components/BackgroundSlideshow";
import Image from "next/image";

const team = [
  {
    name: "Dr hab. prof. ucz. Renata Karkowska",
    role: "Dyrektor Centrum",
    email: "rkarkowska@wz.uw.edu.pl",
    image:
      "https://wz.uw.edu.pl/wp-content/uploads/2025/12/Renata-karkowska-zdjecie-3-e1765375784289.jpg",
    linkedin: "https://www.linkedin.com/in/renata-karkowska-42baa280/",
    description:
      "Profesor Uniwersytetu Warszawskiego, doktor habilitowana nauk ekonomicznych w dyscyplinie ekonomii i finansów. Kieruje Zakładem Rynków Kapitałowych i Inwestycji. Jej zainteresowania badawcze i dydaktyczne koncentrują się wokół zagadnień niestabilności rynku finansowego, ryzyka systemowego oraz zarządzania portfelem inwestycyjnym. Autorka i współautorka książek oraz artykułów naukowych poświęconych bankowości i rynkowi kapitałowemu. Obecnie zaangażowana w projekty badawcze nt. mikrostruktury rynku giełdowego, transmisji ryzyka na rynku kapitałowym i towarowym, a także wpływu czynników ESG oraz uwarunkowań kulturowych na funkcjonowanie sektora finansowego. Od kilkudziesięciu lat praktyk na rynku finansowym.",
  },
  {
    name: "Dr Szczepan Urjasz",
    role: "Sekretarz Centrum",
    email: "surjasz@wz.uw.edu.pl",
    image:
      "https://wz.uw.edu.pl/wp-content/uploads/2025/05/zdjecie_Szczepan_Urjasz-e1753265984901.jpg",
    linkedin: "https://www.linkedin.com/in/urjasz/",
    description:
      "Jest adiunktem w Zakładzie Rynków Kapitałowych i Inwestycji na Wydziale Zarządzania Uniwersytetu Warszawskiego. Doświadczenie zawodowe zdobywał w sektorze energetycznym, leasingowym, ubezpieczeniowym i budowlanym. Od wielu lat zaangażowany w modelowanie i analizowanie danych ekonomicznych. Autor publikacji naukowych w zakresie analizy dynamiki powiązań i mechanizmów transmisji zmienności między rynkami akcji, obligacji i towarowymi.",
  },
  {
    name: "Dr Jacek Karasiński",
    role: "",
    email: "jkarasinski@wz.uw.edu.pl",
    image:
      "https://wz.uw.edu.pl/wp-content/uploads/2025/05/Jacek-Karasinski-e1753265951709.jpg",
    linkedin: "https://www.linkedin.com/in/jacek-karasinski/?locale=pl",
    description:
      "Doktor nauk społecznych w dyscyplinie ekonomia i finanse, adiunkt w Zakładzie Rynków Kapitałowych i Inwestycji Wydziału Zarządzania Uniwersytetu Warszawskiego. Autor opracowań naukowych w obszarze efektywności informacyjnej i inwestycyjnej rynków kapitałowych, funduszy ilościowych i handlu wysokiej częstotliwości. Zawodowo zajmuje się modelowaniem ryzyka rynkowego i kredytowego banku.",
  },
  {
    name: "Mgr Karolina Siwiec",
    role: "",
    email: "ksiwiec@wz.uw.edu.pl",
    image:
      "https://wz.uw.edu.pl/wp-content/uploads/2025/05/Karolina-Siwiec-rotated.jpg",
    linkedin: "https://www.linkedin.com/in/siwiec-karolina/",
    description:
      "Doktorantka w Szkole Doktorskiej Nauk Społecznych UW. Od początku studiów związana z Uniwersytetem Warszawskim. Jej zainteresowania naukowe dotyczą zagadnień związanych ze zrównoważonym rozwojem i ESG, ze szczególnym uwzględnieniem ryzyka ESG, a także analizy relacji między wynikami finansowymi spółek a ich oceną ESG oraz identyfikacji czynników wpływających na tę zależność. Na co dzień łączy zainteresowania badawcze z pracą zawodową, pracując w sektorze bankowym, gdzie zajmuje się ujawnieniami ryzyka ESG oraz raportowaniem taksonomicznym.",
  },
  {
    name: "Mgr Edyta Wojciechowska",
    role: "",
    email: "e.wojciechowska3@uw.edu.pl",
    image:
      "https://wz.uw.edu.pl/wp-content/uploads/2025/05/Edyta-Wojciechowska-e1753266037425.jpg",
    linkedin:
      "https://www.linkedin.com/in/edyta-wojciechowska-kurek-426b12314/",
    description:
      "Doktorantka w Szkole Doktorskiej Nauk Społecznych, absolwentka Wydziału Zarządzania UW. Jej zainteresowania naukowe dotyczą sektora bankowego oraz wpływu zjawiska ESG na funkcjonowanie rynków finansowych, w szczególności banków. Zawodowo związana od ponad 5 lat z bankowością. W swojej praktyce zawodowej zajmuje się zagadnieniami związanymi z ryzykiem kredytowym oraz ryzykiem ESG, zarówno w kontekście instytucji finansowych, jak i niefinansowych.",
  },
  {
    name: "Mgr Patryk Zduńczak",
    role: "",
    email: "pzdunczak@wz.uw.edu.pl",
    image:
      "https://wz.uw.edu.pl/wp-content/uploads/2025/11/Patryk-Zdunczak-Zdjecie.png",
    linkedin: "https://www.linkedin.com/in/pzdunczak/",
    description:
      "Absolwent Wydziału Zarządzania Uniwersytetu Warszawskiego i licencjonowany Makler Papierów Wartościowych. Zawodowo związany z biurami maklerskimi w zakresie biznesu, regulacji oraz analityki danych. Jego zainteresowania naukowe dotyczą badań nad efektywnością rynków finansowych oraz praktycznym wykorzystaniem algorytmów uczenia maszynowego na rynkach finansowych.",
  },
  {
    name: "Mgr Konrad Kochalski",
    role: "",
    email: "k.kochalski@uw.edu.pl",
    image:
      "https://wz.uw.edu.pl/wp-content/uploads/2026/01/Konrad-Kochalski.jpg",
    linkedin: "https://www.linkedin.com/in/konrad-kochalski-63206029b/",
    description:
      "Doktorant w Szkole Doktorskiej Nauk Społecznych, absolwent Szkoły Głównej Handlowej w Warszawie. Zawodowo związany z sektorem bankowym. Jego zainteresowania naukowe dotyczą społecznie odpowiedzialnego inwestowania, systemowej oceny przedsiębiorstw integrującej dane finansowe i niefinansowe oraz modelowania raportowania zrównoważonego rozwoju. Posiada licencję MPW. Laureat konkursów na najlepsze eseje i prace dyplomowe z zakresu zrównoważonych finansów.",
  },
];

export default function AboutPage() {
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
          O autorach
        </h1>

        <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-slate-200">
          Poznaj zespół stojący za kierunkiem Inwestycje i analiza danych.
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

      {/* AUTORZY PROGRAMU — ZDJĘCIA WYDZIAŁU W TLE */}
      <section className="relative overflow-hidden">
        <BackgroundSlideshow />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
              Autorzy programu
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#08265c] sm:text-4xl">
              Zakład Rynków Kapitałowych i Inwestycji
            </h2>

            <p className="mt-6 text-lg font-semibold leading-8 text-slate-700">
              Program studiów Inwestycje i analiza danych został stworzony
              przez samodzielny Zakład Rynków Kapitałowych i Inwestycji
              działający na Wydziale Zarządzania Uniwersytetu Warszawskiego.
              Członkowie Zakładu tworzą również Centrum Badań nad Rynkiem
              Finansowym.
            </p>
          </div>

          {/* KARTA CENTRUM */}
          <div className="mt-8 rounded-3xl border border-white/80 bg-white/95 p-6 shadow-lg backdrop-blur-sm sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Przyciski */}
              <div className="flex flex-col items-start gap-3">
                <a
                  href="https://wz.uw.edu.pl/wydzial/struktura/centra-naukowo-badawcze/centrum-badan-nad-rynkiem-finansowym/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#08265c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#113b82]"
                >
                  Odwiedź stronę Centrum Badań nad Rynkiem Finansowym ↗
                </a>

                <a
                  href="https://www.linkedin.com/company/research-centre-for-financial-market/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#084f96] hover:shadow-md"
                >
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-white text-xs font-bold text-[#0A66C2]"
                    aria-hidden="true"
                  >
                    in
                  </span>

                  Odwiedź LinkedIn Centrum Badań nad Rynkiem Finansowym ↗
                </a>
              </div>

              {/* Logo Centrum */}
              <div className="flex shrink-0 items-center justify-center lg:justify-end">
                <img
                  src="/kierunek-studiow/images/CBRF.jpg"
                  alt="Centrum Badań nad Rynkiem Finansowym"
                  className="h-auto max-h-40 w-auto max-w-full object-contain sm:max-h-44 lg:max-h-48 lg:max-w-[320px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZESPÓŁ */}
      <section className="bg-[#f4f8fc]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
              Nasz zespół
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#08265c] sm:text-4xl">
              Zakład Rynków Kapitałowych i Inwestycji
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Zespół tworzący Zakład Rynków Kapitałowych i Inwestycji oraz
              Centrum Badań nad Rynkiem Finansowym.
            </p>
          </div>

          {/* CZŁONKOWIE ZESPOŁU */}
          <div className="space-y-6">
            {team.map((person) => (
              <article
                key={person.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
                  {/* Zdjęcie */}
<div className="flex items-center justify-center bg-slate-50 p-5 sm:p-6">
  <img
    src={person.image}
    alt={person.name}
    className="h-auto max-h-[380px] w-auto max-w-full rounded-2xl object-contain shadow-sm"
  />
</div>

                  {/* Informacje */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <h3 className="text-2xl font-semibold tracking-tight text-[#08265c]">
                      {person.name}
                    </h3>

                    {person.role && (
                      <p className="mt-1 font-semibold text-[#2f97d1]">
                        {person.role}
                      </p>
                    )}

                    {/* E-mail */}
                    <p className="mt-3 text-sm text-slate-500">
                      E-mail:{" "}
                      <a
                        href={`mailto:${person.email}`}
                        className="font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
                      >
                        {person.email}
                      </a>
                    </p>

                    <p className="mt-5 text-base leading-7 text-slate-600">
                      {person.description}
                    </p>

                    {/* LinkedIn */}
                    <div className="mt-6">
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#084f96] hover:shadow-md"
                      >
                        <span
                          className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-xs font-bold text-[#0A66C2]"
                          aria-hidden="true"
                        >
                          in
                        </span>

                        LinkedIn ↗
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOLNE CTA */}
      <section className="bg-[#e9c93e] text-[#08265c]">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em]">
            Inwestycje i analiza danych
          </p>

          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight">
            Program tworzony przez naukowców i praktyków rynku finansowego
          </h2>
        </div>
      </section>
    </main>
  );
}