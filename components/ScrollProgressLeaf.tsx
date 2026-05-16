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
      leaf.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle + 95})`);
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
        <g ref={leafRef} className="leaf-shadow">
          <path
            d="M0-24
              C-19-24 -34-10 -33 8
              C-25 4 -18 7 -13 15
              C-8 6 -3 5 0 18
              C3 5 8 6 13 15
              C18 7 25 4 33 8
              C34-10 19-24 0-24Z"
          fill="#e6b64a"
        />
        <path
          d="M0-17
            C-1-6 -1 8 0 24
            M0 0 C-8 2 -15 6 -22 12
            M0 0 C8 2 15 6 22 12
            M0-2 C-6-8 -13-12 -23-14
            M0-2 C6-8 13-12 23-14"
          fill="none"
          stroke="#2b620b"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="0" cy="25" r="2" fill="#2b620b" />
      </g>
        
      </svg>
    </aside>
  );
}
