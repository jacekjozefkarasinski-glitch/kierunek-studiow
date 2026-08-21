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

export default function BackgroundSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${src}")`,
          }}
        />
      ))}

      {/* Jasna warstwa zapewniająca czytelność */}
      <div className="absolute inset-0 bg-white/80" />
    </div>
  );
}