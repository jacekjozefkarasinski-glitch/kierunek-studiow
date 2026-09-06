"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center gap-2 px-3 py-3 sm:gap-3 sm:px-6 lg:px-8 lg:py-4">
        {/* LEWA CZĘŚĆ */}
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4 lg:gap-5">
          {/* Nazwa kierunku */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex min-w-0 flex-col"
          >
            <span className="max-w-[165px] text-sm font-bold leading-tight tracking-tight text-[#08265c] sm:max-w-none sm:text-lg">
              Inwestycje i analiza danych
            </span>

            <span className="hidden text-xs font-medium text-slate-500 sm:block">
              Wydział Zarządzania UW
            </span>
          </Link>

          {/* LOGOTYPY — DESKTOP */}
          <div className="hidden items-center gap-4 border-l border-slate-200 pl-5 lg:flex">
            {/* Logo kierunku */}
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/kierunek-studiow/images/logo-kierunku-transparent.png"
                alt="Logo kierunku Inwestycje i analiza danych"
                fill
                className="scale-[1.03] object-cover"
                priority
              />
            </div>

            {/* Logo Wydziału */}
            <div className="relative h-12 w-48 shrink-0 xl:w-52">
              <Image
                src="/kierunek-studiow/images/logo-wydzialu-transparent.png"
                alt="Wydział Zarządzania Uniwersytetu Warszawskiego"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>
        </div>

        {/* PRAWA CZĘŚĆ */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          {/* DOŁĄCZ DO NAS — ZAWSZE WIDOCZNE */}
          <Link
            href="/dolacz-do-nas"
            onClick={closeMenu}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#e9c93e] px-2.5 py-2 text-xs font-semibold text-[#08265c] transition hover:bg-[#f1d75d] hover:shadow-md sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Dołącz do nas
          </Link>

          {/* MENU DESKTOPOWE */}
          <nav
            className="hidden items-center gap-3 lg:flex xl:gap-4"
            aria-label="Główna nawigacja"
          >
            <Link
              href="/program"
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
            >
              Program
            </Link>

            <Link
              href="/aktualnosci"
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
            >
              Aktualności
            </Link>

            {/* RCFM */}
            <Link
              href="/autorzy"
              className="group flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
            >
              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md">
                <Image
                  src="/kierunek-studiow/images/CBRF.jpg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </span>

              <span>RCFM</span>
            </Link>

            <Link
              href="/kontakt"
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
            >
              Kontakt
            </Link>
          </nav>

          {/* FACEBOOK — TYLKO DESKTOP */}
          <a
            href="https://www.facebook.com/profile.php?id=61576578910562"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź naszą stronę na Facebooku"
            className="hidden items-center justify-center rounded-full bg-[#1877F2] px-3 py-2.5 text-white transition hover:bg-[#1468d4] hover:shadow-md lg:inline-flex 2xl:gap-2 2xl:px-4"
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#1877F2]"
              aria-hidden="true"
            >
              f
            </span>

            <span className="hidden 2xl:inline">Facebook</span>
          </a>

          {/* INSTAGRAM — TYLKO DESKTOP */}
          <a
            href="https://www.instagram.com/inwestycje_analiza_danych/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź nasz profil na Instagramie"
            className="hidden items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] px-3 py-2.5 text-white transition hover:brightness-110 hover:shadow-md lg:inline-flex 2xl:gap-2 2xl:px-4"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>

            <span className="hidden 2xl:inline">Instagram</span>
          </a>

          {/* HAMBURGER — MOBILE / TABLET */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#08265c] transition hover:bg-slate-50 sm:h-10 sm:w-10 lg:hidden"
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0.5 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-2.5 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2.5 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-[18px] h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-2.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* MENU MOBILNE */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto max-w-6xl px-4 py-4 sm:px-6"
          aria-label="Mobilna nawigacja"
        >
          <div className="flex flex-col">
            {/* PROGRAM */}
            <Link
              href="/program"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-slate-100 px-2 py-4 font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
            >
              <span>Program</span>

              <span className="text-slate-400" aria-hidden="true">
                →
              </span>
            </Link>

            {/* AKTUALNOŚCI */}
            <Link
              href="/aktualnosci"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-slate-100 px-2 py-4 font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
            >
              <span>Aktualności</span>

              <span className="text-slate-400" aria-hidden="true">
                →
              </span>
            </Link>

            {/* RCFM */}
            <Link
              href="/autorzy"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-slate-100 px-2 py-4 font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
            >
              <span className="flex items-center gap-3">
                <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src="/kierunek-studiow/images/CBRF.jpg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>

                <span>RCFM</span>
              </span>

              <span className="text-slate-400" aria-hidden="true">
                →
              </span>
            </Link>

            {/* KONTAKT */}
            <Link
              href="/kontakt"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-slate-100 px-2 py-4 font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
            >
              <span>Kontakt</span>

              <span className="text-slate-400" aria-hidden="true">
                →
              </span>
            </Link>

            {/* SOCIAL MEDIA */}
            <div className="flex flex-wrap gap-3 px-2 pt-5">
              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/profile.php?id=61576578910562"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white"
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#1877F2]"
                  aria-hidden="true"
                >
                  f
                </span>

                Facebook
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/inwestycje_analiza_danych/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] px-5 py-3 text-sm font-semibold text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>

                Instagram
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}