"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      {/* Główny pasek */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-8">

        {/* LEWA CZĘŚĆ */}
        <div className="flex min-w-0 items-center gap-5">
          {/* Nazwa kierunku */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex min-w-0 flex-col"
          >
            <span className="text-base font-bold leading-tight tracking-tight text-[#08265c] sm:text-lg">
              Inwestycje i analiza danych
            </span>

            <span className="hidden text-xs font-medium text-slate-500 sm:block">
              Wydział Zarządzania UW
            </span>
          </Link>

          {/* Logotypy — desktop */}
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
            <div className="relative h-14 w-60 shrink-0">
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

        {/* MENU DESKTOPOWE */}
        <nav
          className="hidden items-center gap-4 lg:flex"
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
            className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
          >
            Program
          </Link>

          {/* Aktualności */}
          <Link
            href="/aktualnosci"
            className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
          >
            Aktualności
          </Link>

          {/* Autorzy */}
          <Link
            href="/autorzy"
            className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
          >
            Autorzy
          </Link>

          {/* Kontakt */}
          <Link
            href="/kontakt"
            className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-[#2f97d1]"
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

            <span>Facebook</span>
          </a>
        </nav>

        {/* HAMBURGER — MOBILE / TABLET */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#08265c] transition hover:bg-slate-50 lg:hidden"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-5 w-6">
            {/* Górna kreska */}
            <span
              className={`absolute left-0 top-0.5 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "top-2.5 rotate-45" : ""
              }`}
            />

            {/* Środkowa kreska */}
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Dolna kreska */}
            <span
              className={`absolute left-0 top-[18px] h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "top-2.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* ROZWIJANE MENU MOBILNE */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto max-w-6xl px-6 py-5"
          aria-label="Mobilna nawigacja"
        >
          <div className="flex flex-col gap-1">

            {/* Dołącz do nas */}
            <Link
              href="/dolacz-do-nas"
              onClick={closeMenu}
              className="mb-3 flex items-center justify-between rounded-2xl bg-[#e9c93e] px-5 py-4 font-semibold text-[#08265c] transition hover:bg-[#f1d75d]"
            >
              <span>Dołącz do nas</span>
              <span aria-hidden="true">→</span>
            </Link>

            {/* Program */}
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

            {/* Aktualności */}
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

            {/* Autorzy */}
            <Link
              href="/autorzy"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-slate-100 px-2 py-4 font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
            >
              <span>Autorzy</span>
              <span className="text-slate-400" aria-hidden="true">
                →
              </span>
            </Link>

            {/* Kontakt */}
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

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61576578910562"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-3 rounded-full bg-[#1877F2] px-5 py-3.5 font-semibold text-white transition hover:bg-[#1468d4]"
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-bold text-[#1877F2]"
                aria-hidden="true"
              >
                f
              </span>

              <span>Facebook</span>

              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}