type IconProps = {
  className?: string;
};

export function GinkgoMark({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <path
        d="M50 88c-2-13-5-23-14-33C24 41 15 29 22 17c13 0 23 9 28 24 5-15 15-24 28-24 7 12-2 24-14 38-9 10-12 20-14 33Z"
        fill="currentColor"
      />
      <path d="M50 42v46" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
      <path d="M28 22c9 9 15 19 22 33 7-14 13-24 22-33" fill="none" stroke="#fff" strokeWidth="3" opacity="0.55" />
    </svg>
  );
}

export function DropletIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path d="M12 3s7 7.3 7 12a7 7 0 0 1-14 0c0-4.7 7-12 7-12Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 16.5c1.4 1.2 3.7 1.3 5.5-.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SparkIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M19 15l.8 3.2L23 19l-3.2.8L19 23l-.8-3.2L15 19l3.2-.8L19 15Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function BuildingIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path d="M4 21V5.5L14 2v19" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 9h6v12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 8h2M8 12h2M8 16h2M17 13h1M17 17h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
