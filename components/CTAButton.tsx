import { quoteUrl } from "@/lib/constants";

type CTAButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-gold text-charcoal shadow-[0_18px_50px_rgba(230,182,74,0.32)] hover:bg-goldLight hover:shadow-[0_22px_60px_rgba(230,182,74,0.42)]",
  secondary:
    "border border-white/30 bg-white/10 text-white backdrop-blur-xl hover:border-gold/70 hover:bg-white/15",
  dark:
    "bg-deepGreen text-white shadow-[0_18px_50px_rgba(43,98,11,0.28)] hover:bg-greenSoft",
  ghost:
    "border border-deepGreen/20 bg-white text-deepGreen hover:border-gold/70 hover:bg-cream"
};

export default function CTAButton({
  children,
  href = quoteUrl,
  variant = "primary",
  className = "",
  ariaLabel
}: CTAButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel ?? (typeof children === "string" ? children : "Start quote")}
      className={`group inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] transition duration-300 focus:outline-none focus:ring-4 focus:ring-gold/35 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
        -&gt;
      </span>
    </a>
  );
}
