"use client";

import NavLink from "./NavLink";
import { useEffect, useRef } from "react";
import gsap from "gsap";

// Pill button: the circle stretches into a filled pill on hover
export default function AnimatedButton({ title, href, download }: { title: string; href: string; download?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current!;
    const tl = gsap.timeline({ paused: true });
    tl.to(svg.querySelector("rect"), {
      duration: 0.4,
      attr: { width: 160, fill: "#e45447" },
      autoAlpha: 0.8,
      ease: "back.out(1)",
    }).to(svg.querySelector("text"), { duration: 0.2, fill: "#f2f0ee", ease: "none" }, 0);
    const play = () => tl.play();
    const reverse = () => tl.reverse();
    svg.addEventListener("mouseenter", play);
    svg.addEventListener("mouseleave", reverse);
    return () => {
      svg.removeEventListener("mouseenter", play);
      svg.removeEventListener("mouseleave", reverse);
      tl.kill();
    };
  }, []);

  return (
    <NavLink href={href} download={download} className="inline-block">
      <svg ref={svgRef} className="font-bold overflow-visible" width="220" height="60" viewBox="0 0 220 60">
        <rect x="0" y="0" width="60" height="60" rx="30" ry="30" fill="#e45447" style={{ opacity: 0.4 }} />
        <text transform="translate(80 38)" textAnchor="middle" fontSize="20" fill="currentColor">
          {title}
        </text>
      </svg>
    </NavLink>
  );
}
