"use client";

import { useEffect, useState } from "react";

const images = [
  "/kierunek-studiow/images/wydzial-1.jpg",
  "/kierunek-studiow/images/wydzial-2.jpg",
  "/kierunek-studiow/images/wydzial-3.jpg",
  "/kierunek-studiow/images/wydzial-4.jpg",
  "/kierunek-studiow/images/wydzial-5.jpg",
  "/kierunek-studiow/images/wydzial-6.jpg",
  "/kierunek-studiow/images/wydzial-7.jpg",
];

type BackgroundSlideshowProps = {
  initialIndex?: number;
};

export default function BackgroundSlideshow({
  initialIndex = 0,
}: BackgroundSlideshowProps) {
  const safeInitialIndex =
    ((initialIndex % images.length) + images.length) % images.length;

  const [current, setCurrent] = useState(safeInitialIndex);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % images.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover object-center brightness-75 saturate-75 transition-opacity duration-[2000ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Jasna warstwa poprawiająca czytelność */}
      <div className="absolute inset-0 bg-white/65" />
    </div>
  );
}