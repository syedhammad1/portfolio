"use client";

import { Fragment, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { site } from "@/data/site";

const Letters = ({ text }: { text: string }) =>
  text.split("").map((ch, i) => (
    <Fragment key={i}>
      <span className="letter">{ch === " " ? " " : ch}</span>{" "}
    </Fragment>
  ));

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const talk = useRef<HTMLDivElement>(null);
  const talkPulse = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Steps are chained relative to each other (no fixed 4s/5s waits) so the intro takes ~2s
      gsap
        .timeline({ delay: 0.1 })
        .to(".callout", { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.4)" }, 0)
        .to(".letter", { fontSize: "3rem", duration: 0.04, stagger: 0.035 }, 0.15)
        .to(".des", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.2")
        .to(".message", { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3")
        .to(".talk-wrapper", { opacity: 1, duration: 0.3 }, "-=0.3")
        .to(talk.current, { duration: 0.3, scale: 0.8, rotation: 16, ease: "back.out(1.7)" }, "<")
        .to(talkPulse.current, { duration: 0.4, scale: 0.9, opacity: 1 }, "<")
        .to(talk.current, { duration: 0.9, scale: 1, rotation: "-=16", ease: "elastic.out(2.5, 0.5)" })
        .to(talkPulse.current, { duration: 0.9, scale: 3, opacity: 0, ease: "expo.out" }, "<");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={root} className="md:flex mt-10">
      <div className="md:flex-1">
        <div className="text-center md:text-left">
          <div className="callout top-right inline-block bg-kjColorDark text-kjColorLight shadow">
            It&apos;s me
          </div>
          <h1 className="text-5xl font-black leading-none mb-4">
            <Letters text={site.firstName} />
            <br />
            <Letters text={site.lastName} />
          </h1>
        </div>
        <p className="uppercase font-bold des text-center md:text-left px-5 md:px-0">{site.role}</p>
        <p className="text-kjColorGray dark:text-kjColorLight text-sm mt-10 text-center md:text-left px-5 md:px-0 md:w-64 message">
          {site.intro}
        </p>
        <div className="mt-10 talk-wrapper">
          <a href={`mailto:${site.email}`} target="_blank" rel="noreferrer">
            <div ref={talk} className="talk">
              <img src="/img/talkButton.png" alt="talk button" className="talk-img" />
              <div ref={talkPulse} className="talk-pulse" />
            </div>
          </a>
        </div>
      </div>
      <div className="mt-10 md:flex-1">
        <img
          src={site.heroImage}
          alt="profile photo"
    className="w-40 ml-auto mr-auto md:ml-0 md:mr-0 md:w-80 rounded-full"
        />
      </div>
    </header>
  );
}
