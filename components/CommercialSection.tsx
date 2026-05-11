import CTAButton from "@/components/CTAButton";
import { BuildingIcon } from "@/components/Icons";
import { quoteUrl } from "@/lib/constants";

const proofPoints = [
  "Proof of insurance available",
  "LLC documentation available",
  "One-time and recurring maintenance options",
  "Flexible scheduling"
];

export default function CommercialSection() {
  return (
    <section id="commercial" className="relative overflow-hidden bg-charcoal py-20 text-white md:py-28">
      <div className="absolute inset-0 luxury-grid opacity-20" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_65%_35%,rgba(230,182,74,0.24),transparent_34%)]" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Commercial exterior cleaning</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Commercial Exterior Cleaning Built for Property Managers
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
            From storefront entrances to apartment walkways and dumpster pads, Ginkgo Pressure Washing helps commercial properties stay clean, safe, and professional.
          </p>
          <div className="mt-9">
            <CTAButton href={quoteUrl}>Request a Commercial Estimate</CTAButton>
          </div>
        </div>

        <div className="rounded-[1.7rem] border border-white/14 bg-white/8 p-5 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-7">
          <div className="flex items-center gap-4 border-b border-white/12 pb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-charcoal">
              <BuildingIcon />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Built for accounts</p>
              <p className="text-2xl font-black">Clean properties, cleaner coordination.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            {proofPoints.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4">
                <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                <span className="font-bold text-white/88">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
