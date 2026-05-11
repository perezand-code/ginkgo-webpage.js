"use client";

import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import { GinkgoMark } from "@/components/Icons";
import { navLinks, quoteUrl } from "@/lib/constants";
import { getAnimeModule, runAnime } from "@/lib/anime";

export default function Footer() {
  useEffect(() => {
    const morph = async () => {
      const mod = await getAnimeModule();
      const svg = mod.svg as undefined | { morphTo?: (target: string) => unknown };
      const morphTo = (mod.morphTo as undefined | ((target: string) => unknown)) ?? svg?.morphTo;
      const path = document.querySelector("#footer-leaf-path");
      if (!path) return;

      const shapes = ["#footer-leaf-target-0", "#footer-leaf-target-1", "#footer-leaf-target-2"];

      let index = 0;
      const tick = () => {
        index = (index + 1) % shapes.length;
        const fallbackPath = document.querySelector(shapes[index])?.getAttribute("d");
        runAnime(path, {
          d: morphTo ? morphTo(shapes[index]) : document.querySelector(shapes[index])?.getAttribute("d"),
          duration: 2200,
          easing: "easeInOutSine"
        }).catch(() => {
          if (fallbackPath) {
            path.setAttribute("d", fallbackPath);
          }
        });
      };

      tick();
      const interval = window.setInterval(tick, 2600);
      return () => window.clearInterval(interval);
    };

    let cleanup: void | (() => void);
    morph().then((fn) => {
      cleanup = fn;
    });
    return () => cleanup?.();
  }, []);

  return (
    <footer className="relative overflow-hidden bg-forest pb-28 pt-16 text-white lg:pb-12" id="footer">
      <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-gold/12 blur-3xl" />
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-charcoal">
                <GinkgoMark className="h-8 w-8" />
              </span>
              <div>
                <p className="font-black uppercase tracking-[0.18em]">Ginkgo</p>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Pressure Washing</p>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-7 text-white/70">
              Premium residential and commercial exterior cleaning serving Fort Wayne, Bloomington, and surrounding areas.
            </p>
            <div className="mt-7">
              <CTAButton href={quoteUrl}>Get a Quote</CTAButton>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Explore</p>
            <div className="mt-5 grid gap-3">
              {navLinks.slice(1, 6).map((link) => (
                <a key={link.href} href={link.href} className="text-white/72 transition hover:text-gold">
                  {link.label}
                </a>
              ))}
              <a href="#services" className="text-white/72 transition hover:text-gold">
                Residential Services
              </a>
              <a href="#commercial" className="text-white/72 transition hover:text-gold">
                Commercial Services
              </a>
            </div>
          </div>

          <div id="contact-info">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Contact</p>
            <div className="mt-5 grid gap-3 text-white/72">
              <p>Fort Wayne • Bloomington</p>
              <a href={quoteUrl} className="transition hover:text-gold">
                Online quote tool
              </a>
              <a href="#" className="transition hover:text-gold">
                Instagram
              </a>
              <a href="#" className="transition hover:text-gold">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-white/52">© 2026 Ginkgo Pressure Washing. Fully insured. Registered LLC.</p>
          <svg viewBox="0 0 100 100" aria-hidden="true" className="h-20 w-20 text-gold leaf-shadow">
            <defs>
              <path
                id="footer-leaf-target-0"
                d="M50 88c-2-13-5-23-14-33C24 41 15 29 22 17c13 0 23 9 28 24 5-15 15-24 28-24 7 12-2 24-14 38-9 10-12 20-14 33Z"
              />
              <path
                id="footer-leaf-target-1"
                d="M50 88c-4-15-9-25-20-34C18 44 12 30 22 17c15 1 24 10 28 24 4-14 13-23 28-24 10 13 4 27-8 37-11 9-16 19-20 34Z"
              />
              <path
                id="footer-leaf-target-2"
                d="M50 88c-1-14-4-25-13-35C25 40 17 27 24 16c12 1 21 9 26 24 5-15 14-23 26-24 7 11-1 24-13 37-9 10-12 21-13 35Z"
              />
            </defs>
            <path
              id="footer-leaf-path"
              d="M50 88c-2-13-5-23-14-33C24 41 15 29 22 17c13 0 23 9 28 24 5-15 15-24 28-24 7 12-2 24-14 38-9 10-12 20-14 33Z"
              fill="currentColor"
            />
            <path d="M50 42v46" stroke="#10240a" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
