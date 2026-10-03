"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomBorder from "./CustomBorder";
import AnimatedButton from "./AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        // Pin the section on desktop while its illustration assembles on scroll.
        gsap
          .timeline({
            scrollTrigger: { trigger: root.current, start: "top top", end: "+=300%", pin: true, scrub: true },
          })
          .from(".illustration__img--1", { duration: 0.5, scale: 0.5 }, 0)
          .from(".illustration__img--2", { duration: 0.5, opacity: 0, y: -50 }, 0.2)
          .from(".illustration__img--3", { duration: 0.5, opacity: 0, y: -50 }, 0.5)
          .from(".data-1", { duration: 1, opacity: 0, stagger: 1 }, 0.7)
          .from(".illustration__img--5", { duration: 0.5, opacity: 0, x: 100 }, 1.4)
          .from(".illustration__img--6", { duration: 0.5, opacity: 0, x: -100 }, 1.7)
          .from(".data-2", { duration: 1, opacity: 0, stagger: 1 }, 1.9)
          .from(".illustration__img--4", { duration: 0.5, opacity: 0, x: -100 }, 2.6)
          .from(".illustration__img--7", { duration: 0.5, opacity: 0, x: 100 }, 2.9)
          .to(".see-project-btn", { duration: 1, opacity: 1 }, 3.5);
      }, root);

      // Re-measure once the page slide-in has finished.
      const timeout = setTimeout(() => ScrollTrigger.refresh(), 400);
      return () => {
        clearTimeout(timeout);
        ctx.revert();
      };
    });
    return () => media.revert();
  }, []);

  return (
    <section ref={root} className="mt-12 md:mt-32 bg-white dark:bg-kjColorBlack">
      <h1 className="capitalize text-3xl md:text-4xl font-bold leading-none">my top skills</h1>
      <p className="capitalize mt-2 text-lg">what i do</p>
      <CustomBorder />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 rounded-lg bg-kjColorLight dark:bg-kjColorBlack border-2 border-kjColorLight">
        <div className="p-5 md:mx-8 services__data">
          <h2 className="text-lg font-black uppercase mb-3 data-2">backend</h2>
          <p className="mb-5 data-2">
           I architect distributed systems built to scale and stay up. I build microservices with Nest.js, connect them over gRPC and Kafka, and run them on Kubernetes with infrastructure defined in Terraform. For data I use PostgreSQL, MongoDB and Redis, and Docker keeps every environment consistent. I've built APIs serving 1M+ requests a day and cut response times by 40%.
          </p>
          <h2 className="text-lg font-black uppercase mb-3 data-1">frontend</h2>
          <p className="mb-5 data-1">
            I build fast, SEO-first web apps with React, Next.js, TypeScript, TailwindCSS, Redux and GSAP. I focus on server-side rendering, clean semantic code and smooth animation. On past projects that has meant Lighthouse scores of 95+ and 30% more organic traffic.
          </p>
          <div className="mt-8 see-project-btn">
            <AnimatedButton title="SEE MY WORKS" href="/portfolio" />
          </div>
        </div>
        <div className="hidden lg:block illustration">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <img
              key={n}
              src={`/img/illustration-0${n}.png`}
              alt={`illustration ${n}`}
              className={`illustration__img illustration__img--${n}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
