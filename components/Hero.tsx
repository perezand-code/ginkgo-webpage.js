"use client";

import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import { GinkgoMark } from "@/components/Icons";
import { quoteUrl } from "@/lib/constants";
import { runAnime } from "@/lib/anime";

export default function Hero() {
  useEffect(() => {
    runAnime(".hero-rise", {
      opacity: [0, 1],
      translateY: [24, 0],
      delay: (_el: Element, i: number) => i * 110,
      duration: 850,
      easing: "easeOutCubic"
    });
  }, []);

  return (
    <section id="home" className="relative isolate overflow-hidden bg-charcoal pb-16 pt-28 text-white md:pb-24 lg:min-h-screen lg:pt-32">
      <div className="absolute inset-0 -z-20 image-fallback" />
      <picture className="absolute inset-0 -z-10 opacity-72 mix-blend-screen">
        {/* TODO: Replace hero art files in public/images if names change. */}
        <source media="(max-width: 767px)" srcSet="/images/heroboardmobile.png" />
        <img
          src="/images/heroboardfinal.png"
          alt=""
          className="h-full w-full object-cover object-center"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,19,15,0.94)_0%,rgba(16,19,15,0.76)_42%,rgba(16,19,15,0.36)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-44 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="max-w-3xl">
          <div className="hero-rise inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/9 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold backdrop-blur-xl">
            <GinkgoMark className="h-5 w-5 text-gold" />
            Fort Wayne • Bloomington
          </div>
          <h1 className="hero-rise mt-7 text-balance text-5xl font-black leading-[0.96] md:text-7xl lg:text-8xl">
            From Campus to Cleanups. We Don&apos;t Miss a Spot.
          </h1>
          <p className="hero-rise mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Professional exterior cleaning for homes and commercial properties. Fully insured and operating as a registered LLC, delivering clean results, clear communication, and reliable service.
          </p>
          <div className="hero-rise mt-9 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={quoteUrl} className="w-full sm:w-auto">
              Get a Quote
            </CTAButton>
            <CTAButton href="#results" variant="secondary" className="w-full sm:w-auto">
              View Results
            </CTAButton>
          </div>
          <div className="hero-rise mt-10 grid gap-3 sm:grid-cols-3">
            {["Fully Insured", "Registered LLC", "Fort Wayne • Bloomington"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/14 bg-white/8 px-4 py-4 text-sm font-bold text-white/88 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-rise relative hidden lg:block">
          <div className="absolute -inset-10 rounded-full bg-gold/18 blur-3xl" />
          <div className="relative ml-auto aspect-[4/5] max-w-[460px] overflow-hidden rounded-[2rem] border border-white/14 bg-white/8 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="h-full rounded-[1.35rem] image-fallback luxury-grid" />
            <GinkgoMark className="leaf-shadow absolute right-8 top-8 h-24 w-24 text-gold/90" />
            <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/14 bg-charcoal/72 p-5 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Premium exterior cleaning</p>
              <p className="mt-2 text-2xl font-black">Built for clean curb appeal and commercial confidence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
