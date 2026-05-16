"use client";

import { useEffect, useRef } from "react";
import { getAnimeModule } from "@/lib/anime";

export default function ScrollProgressLeaf() {
  const pathRef = useRef<SVGPathElement>(null);
  const leafRef = useRef<SVGGElement>(null);

  useEffect(() => {
    let frame = 0;
    let total = 1;

    const update = () => {
      const path = pathRef.current;
      const leaf = leafRef.current;
      if (!path || !leaf) return;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const point = path.getPointAtLength(total * Math.min(Math.max(progress, 0), 1));
      const ahead = path.getPointAtLength(total * Math.min(progress + 0.01, 1));
      const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * (180 / Math.PI);
      leaf.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle + 86})`);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    const boot = async () => {
      total = pathRef.current?.getTotalLength() ?? 1;
      const anime = await getAnimeModule();
      const createMotionPath = anime.createMotionPath as undefined | ((path: SVGPathElement) => unknown);
      if (createMotionPath && pathRef.current) {
        createMotionPath(pathRef.current);
      }
      update();
    };

    boot();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <aside className="pointer-events-none fixed right-5 top-28 z-30 hidden h-[68vh] w-16 xl:block" aria-hidden="true">
      <svg viewBox="0 0 64 620" className="h-full w-full overflow-visible">
        <path
          ref={pathRef}
          d="M32 8 C 58 96, 4 142, 32 226 S 58 374, 32 460 S 14 560, 36 612"
          fill="none"
          stroke="rgba(230,182,74,0.28)"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
        <g ref={leafRef} transform="translate(0 0)">
  <svg
    x="-18"
    y="-18"
    width="36"
    height="36"
    viewBox="0 0 100 100"
    fill="none"
  >
    {/* Ginkgo leaf fan */}
    <path
      d="
        M50 88
        C46 72 38 61 25 52
        C10 42 7 25 21 14
        C33 4 44 18 50 31
        C56 18 67 4 79 14
        C93 25 90 42 75 52
        C62 61 54 72 50 88
        Z
      "
      fill="#8fd14f"
      stroke="#1f5f2a"
      strokeWidth="4"
      strokeLinejoin="round"
    />

    {/* center notch */}
    <path
      d="M50 31 C47 43 47 55 50 88 C53 55 53 43 50 31Z"
      fill="#6fbf3a"
      opacity="0.55"
    />

    {/* veins */}
    <path d="M50 88 L24 18" stroke="#1f5f2a" strokeWidth="2.5" opacity="0.75" />
    <path d="M50 88 L36 15" stroke="#1f5f2a" strokeWidth="2.5" opacity="0.75" />
    <path d="M50 88 L50 31" stroke="#1f5f2a" strokeWidth="2.5" opacity="0.75" />
    <path d="M50 88 L64 15" stroke="#1f5f2a" strokeWidth="2.5" opacity="0.75" />
    <path d="M50 88 L76 18" stroke="#1f5f2a" strokeWidth="2.5" opacity="0.75" />

    {/* stem */}
    <path
      d="M50 88 C50 94 50 97 50 100"
      stroke="#1f5f2a"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
</g>
      </svg>
    </aside>
  );
}
