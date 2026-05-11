"use client";

import { useEffect, useRef, useState } from "react";
import CTAButton from "@/components/CTAButton";
import { BuildingIcon, DropletIcon, SparkIcon } from "@/components/Icons";
import { commercialServices, quoteUrl, residentialServices } from "@/lib/constants";
import { runAnime } from "@/lib/anime";

type Service = {
  title: string;
  description: string;
  bestFor: string[];
};

function ServiceCard({ service, commercial = false, index }: { service: Service; commercial?: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const hover = () => {
    if (!ref.current) return;
    runAnime(ref.current, {
      translateY: -8,
      scale: 1.015,
      duration: 320,
      easing: "easeOutCubic"
    });
  };

  const leave = () => {
    if (!ref.current) return;
    runAnime(ref.current, {
      translateY: 0,
      scale: 1,
      duration: 360,
      easing: "easeOutCubic"
    });
  };

  return (
    <article
      ref={ref}
      onMouseEnter={hover}
      onMouseLeave={leave}
      className="group relative overflow-hidden rounded-[1.4rem] border border-deepGreen/10 bg-white p-6 shadow-[0_18px_60px_rgba(16,19,15,0.08)] transition will-change-transform"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-deepGreen via-gold to-deepGreen opacity-55 transition group-hover:opacity-100" />
      <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gold/0 blur-3xl transition group-hover:bg-gold/25" />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deepGreen text-white shadow-lg shadow-deepGreen/20">
          {commercial ? <BuildingIcon /> : index % 2 === 0 ? <DropletIcon /> : <SparkIcon />}
        </div>
        <h3 className="mt-6 text-xl font-black text-charcoal">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-charcoal/68">{service.description}</p>
        <div className="mt-5 border-t border-deepGreen/10 pt-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-deepGreen">Best for</p>
          <ul className="mt-3 grid gap-2 text-sm text-charcoal/72">
            {service.bestFor.slice(0, commercial ? 6 : 3).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  const [tab, setTab] = useState<"residential" | "commercial">("residential");
  const services = tab === "residential" ? residentialServices : commercialServices;

  useEffect(() => {
    runAnime(".service-card-enter", {
      opacity: [0, 1],
      translateY: [18, 0],
      delay: (_el: Element, i: number) => i * 35,
      duration: 600,
      easing: "easeOutCubic"
    });
  }, [tab]);

  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-deepGreen">Services</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal md:text-6xl">Exterior cleaning with a premium finish.</h2>
          </div>
          <div className="lg:justify-self-end">
            <div className="inline-flex rounded-full border border-deepGreen/12 bg-white p-1 shadow-lg shadow-black/5" role="tablist" aria-label="Service categories">
              {(["residential", "commercial"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={tab === item}
                  onClick={() => setTab(item)}
                  className={`rounded-full px-5 py-3 text-sm font-black capitalize transition ${
                    tab === item ? "bg-deepGreen text-white" : "text-charcoal/68 hover:text-deepGreen"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div key={`${tab}-${service.title}`} className="service-card-enter">
              <ServiceCard service={service} commercial={tab === "commercial"} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] bg-charcoal p-6 text-white shadow-2xl shadow-black/15 md:flex-row md:items-center md:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Ready when you are</p>
            <p className="mt-2 max-w-2xl text-xl font-bold text-white/88">Send the project details once and get routed through the quote flow built for fast estimates.</p>
          </div>
          <CTAButton href={quoteUrl}>Request a Free Estimate</CTAButton>
        </div>
      </div>
    </section>
  );
}
