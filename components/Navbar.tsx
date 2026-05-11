"use client";

import { useEffect, useState } from "react";
import CTAButton from "@/components/CTAButton";
import { CloseIcon, GinkgoMark, MenuIcon } from "@/components/Icons";
import { navLinks, quoteUrl } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-charcoal/78 shadow-2xl shadow-black/20 backdrop-blur-2xl" : "bg-charcoal/35 backdrop-blur-md"
        }`}
      >
        <nav className="section-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
          <a href="#home" className="flex items-center gap-3 text-white" aria-label="Ginkgo Pressure Washing home">
            {/* TODO: Replace with final logo asset if preferred. Current image path is ready: /images/ginkgofinalwhite.png */}
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-deepGreen shadow-lg shadow-black/20">
              <GinkgoMark className="h-7 w-7" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black uppercase tracking-[0.2em]">Ginkgo</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">Pressure Washing</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-white/78 transition hover:text-gold">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <CTAButton href={quoteUrl} className="min-h-11 px-5 py-2.5 text-xs">
              Get a Quote
            </CTAButton>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-charcoal/70 backdrop-blur-sm transition lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`ml-auto flex h-full w-[min(88vw,390px)] flex-col bg-cream p-6 shadow-2xl transition duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-3 font-black uppercase tracking-[0.16em] text-deepGreen">
              <GinkgoMark className="h-8 w-8" />
              Ginkgo
            </span>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-deepGreen/15 text-deepGreen"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mt-10 grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 text-lg font-bold text-charcoal transition hover:bg-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <CTAButton href={quoteUrl} variant="dark" className="mt-8 w-full">
            Start Your Quote
          </CTAButton>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-charcoal/88 p-3 backdrop-blur-xl lg:hidden">
        <CTAButton href={quoteUrl} className="w-full">
          Get a Quote
        </CTAButton>
      </div>
    </>
  );
}
