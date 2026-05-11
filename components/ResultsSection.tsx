"use client";

import { useEffect, useState } from "react";
import CTAButton from "@/components/CTAButton";
import { resultItems } from "@/lib/constants";
import { runAnime } from "@/lib/anime";

function ResultCard({ item }: { item: (typeof resultItems)[number] }) {
  const [split, setSplit] = useState(50);

  return (
    <article
      className="result-slider relative overflow-hidden rounded-[1.5rem] bg-charcoal shadow-[0_22px_70px_rgba(16,19,15,0.18)]"
      style={{ "--split": `${split}%` } as React.CSSProperties}
    >
      <div className="relative aspect-[4/3] image-fallback">
        {/* TODO: Replace result image files in public/images with real before/after photos. */}
        <img
          src={item.before}
          alt={`${item.service} before`}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <img
          src={item.after}
          alt={`${item.service} after`}
          className="after-layer absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 w-1 bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)]" style={{ left: `${split}%` }} />
        <input
          type="range"
          min="8"
          max="92"
          value={split}
          onChange={(event) => setSplit(Number(event.target.value))}
          className="absolute inset-0 h-full w-full"
          aria-label={`Compare before and after for ${item.service}`}
        />
        <span className="absolute left-4 top-4 rounded-full bg-charcoal/72 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-charcoal">
          After
        </span>
      </div>
      <div className="bg-white p-5">
        <h3 className="text-xl font-black text-charcoal">{item.service}</h3>
        <p className="mt-2 text-sm leading-6 text-charcoal/65">{item.caption}</p>
      </div>
    </article>
  );
}

export default function ResultsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnime(entry.target, {
              opacity: [0, 1],
              translateY: [28, 0],
              duration: 750,
              easing: "easeOutCubic"
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    document.querySelectorAll(".reveal-result").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" className="bg-mist py-20 md:py-28">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-deepGreen">Before & after</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-charcoal md:text-6xl">Results that make the property feel cared for.</h2>
          </div>
          <CTAButton variant="dark">Start Your Quote</CTAButton>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {resultItems.map((item) => (
            <div key={item.service} className="reveal-result">
              <ResultCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
