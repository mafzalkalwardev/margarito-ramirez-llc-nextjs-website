'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ScrollExperience() {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (progressRef.current) {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            start: 0,
            end: 'max',
            scrub: 0.2,
          },
        },
      );
    }

    if (prefersReducedMotion) return;

    const sections = gsap.utils.toArray<HTMLElement>('main section:not(:first-child)');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 42 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            once: true,
          },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>('[data-gsap-stagger]').forEach((group) => {
      const children = Array.from(group.children);
      gsap.fromTo(
        children,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.09,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 84%',
            once: true,
          },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>('[data-gsap-parallax]').forEach((element) => {
      gsap.to(element, {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: {
          trigger: element.parentElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  });

  return (
    <div
      ref={progressRef}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-500"
    />
  );
}
