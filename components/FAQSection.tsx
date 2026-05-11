"use client";

import { useState } from "react";
import CTAButton from "@/components/CTAButton";
import { faqs } from "@/lib/constants";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="contact" className="bg-cream py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-deepGreen">FAQ</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal md:text-6xl">Quick answers before you book.</h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/68">
            The quote tool is the fastest path, but these answers cover the questions most visitors ask before reaching out.
          </p>
          <div className="mt-8">
            <CTAButton variant="dark">Get a Quote</CTAButton>
          </div>
        </div>

        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="rounded-2xl border border-deepGreen/10 bg-white shadow-lg shadow-black/5">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left font-black text-charcoal"
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
                aria-controls={`faq-${index}`}
              >
                <span>{faq.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-deepGreen">
                  {open === index ? "-" : "+"}
                </span>
              </button>
              <div id={`faq-${index}`} className={`${open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid transition-all duration-300`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 leading-7 text-charcoal/68">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
