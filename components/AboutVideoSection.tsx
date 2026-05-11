import CTAButton from "@/components/CTAButton";
import { GinkgoMark } from "@/components/Icons";

export default function AboutVideoSection() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-deepGreen/10 bg-charcoal p-4 shadow-2xl shadow-black/15">
          <div className="aspect-video overflow-hidden rounded-[1.15rem] bg-[radial-gradient(circle_at_30%_25%,rgba(230,182,74,0.38),transparent_30%),linear-gradient(135deg,#10240a,#2b620b_55%,#10130f)]">
            {/* TODO: Add the finished video at /ginkgovidcomplete.mp4 or /videos/ginkgo-video.mp4 and swap this placeholder for a video element. */}
            <div className="flex h-full flex-col items-center justify-center p-6 text-center text-white">
              <GinkgoMark className="h-16 w-16 text-gold" />
              <p className="mt-5 text-sm font-black uppercase tracking-[0.24em] text-gold">Video Coming Soon</p>
              <p className="mt-3 max-w-md text-lg font-bold text-white/78">This component is ready for the company video once the final cut is available.</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-deepGreen">About Ginkgo</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal md:text-6xl">Professional service with visible standards.</h2>
          <p className="mt-6 text-lg leading-8 text-charcoal/72">
            Ginkgo Pressure Washing was built by Fort Wayne natives and college students with a simple goal: deliver professional exterior cleaning with dependable communication, strong work ethic, and results that property owners can see immediately.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Fort Wayne and Bloomington service areas", "Residential and commercial cleaning", "Fully insured", "Registered LLC"].map((item) => (
              <div key={item} className="rounded-2xl border border-deepGreen/10 bg-white p-4 font-bold text-charcoal/76 shadow-lg shadow-black/5">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton variant="dark">Request a Free Estimate</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
