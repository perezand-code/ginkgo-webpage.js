import CTAButton from "@/components/CTAButton";
import { reviews } from "@/lib/constants";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="overflow-hidden bg-charcoal py-20 text-white md:py-28">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Reviews</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">Trusted by homeowners and property teams.</h2>
          </div>
          {/* review link. */}
          <CTAButton href="https://g.page/r/CTJrUftTAwsYEAI/review" variant="primary">
            Leave a Review
          </CTAButton>
        </div>

        <div className="no-scrollbar mt-12 flex snap-x gap-5 overflow-x-auto pb-4">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="min-w-[min(86vw,380px)] snap-start rounded-[1.5rem] border border-white/12 bg-white/8 p-6 shadow-2xl shadow-black/15 backdrop-blur-xl"
            >
              <div className="flex gap-1 text-gold" aria-label={`${review.rating} star rating`}>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-5 text-lg leading-8 text-white/84">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-black">{review.name}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-gold">{review.service}</p>
              </div>
            </article>
          ))}
          <article className="min-w-[min(86vw,380px)] snap-start rounded-[1.5rem] border border-gold/35 bg-gold p-6 text-charcoal shadow-2xl shadow-gold/15">
            <p className="text-sm font-black uppercase tracking-[0.18em]">Next project</p>
            <h3 className="mt-4 text-3xl font-black leading-tight">Make your property the next result worth talking about.</h3>
            <CTAButton variant="dark" className="mt-8">
              Start Your Quote
            </CTAButton>
          </article>
        </div>
      </div>
    </section>
  );
}
