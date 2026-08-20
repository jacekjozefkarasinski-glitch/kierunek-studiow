"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import posts from "@/data/facebook-posts.json";

type FacebookPost = {
  id: string;
  message?: string;
  created_time: string;
  permalink_url?: string;
  full_picture?: string;
  video_url?: string;
};

const POSTS_PER_BATCH = 12;

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function AktualnosciPage() {
  const allPosts = useMemo(
    () =>
      (posts as FacebookPost[]).filter(
        (post) => post.message && post.message.trim().length > 0
      ),
    []
  );

  const [visibleCount, setVisibleCount] = useState(POSTS_PER_BATCH);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setVisibleCount((current) =>
            Math.min(current + POSTS_PER_BATCH, allPosts.length)
          );
        }
      },
      {
        rootMargin: "300px",
      }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [allPosts.length]);

  const visiblePosts = allPosts.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-[#f4f8fc] text-slate-900">
      {/* Nagłówek strony */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f97d1]">
            Facebook
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#08265c] sm:text-5xl">
            Wszystkie aktualności
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Pełne archiwum postów publikowanych na stronie kierunku.
            Przewijaj w dół, aby zobaczyć starsze wpisy.
          </p>
        </div>
      </section>

      {/* Lista postów */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          {visiblePosts.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
              Brak aktualności do wyświetlenia.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {visiblePosts.map((post) => (
                <article
                  key={post.id}
className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"                >
                  {post.video_url ? (
  <div className="aspect-video w-full bg-black">
    <video
      controls
      preload="metadata"
      poster={post.full_picture}
      className="h-full w-full object-contain"
    >
      <source src={post.video_url} />
      Twoja przeglądarka nie obsługuje odtwarzania wideo.
    </video>
  </div>
) : post.full_picture ? (
  <div className="relative aspect-[16/9] w-full bg-slate-100">
    <Image
      src={post.full_picture}
      alt=""
      fill
      unoptimized
      className="object-cover"
    />
  </div>
) : null}

                  <div className="flex flex-1 flex-col p-7">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="rounded-full bg-[#e8f4fb] px-3 py-1 text-xs font-semibold text-[#1679ad]">
                        Facebook
                      </span>

                      <span className="text-xs text-slate-400">
                        {formatDate(post.created_time)}
                      </span>
                    </div>

                    <p className="whitespace-pre-line text-base leading-7 text-slate-700">
                      {post.message}
                    </p>

                    {post.permalink_url && (
                      <div className="mt-auto border-t border-slate-100 pt-5">
                        <a
                          href={post.permalink_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[#08265c] transition hover:text-[#2f97d1]"
                        >
                          Zobacz post na Facebooku →
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          <div ref={loaderRef} className="h-12" />

          {visibleCount < allPosts.length ? (
            <p className="text-center text-sm text-slate-400">
              Wczytywanie starszych aktualności…
            </p>
          ) : allPosts.length > 0 ? (
            <p className="text-center text-sm text-slate-400">
              To wszystkie dostępne aktualności.
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}