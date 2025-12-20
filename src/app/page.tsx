'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import CounterStats from './components/CounterStats';
import Education from './components/Education';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skill from './components/Skill';
import Work from './components/Work';
import ScrollToTop from './components/ScrollToTop';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const elements: HTMLElement[] = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    });
  });
  return (
    <main>
      <Hero />
      <CounterStats />
      <Journey />
      <Experience />
      <Skill />
      <Education />
      <Work />
      <Certificate />
      <Contact />
      <ScrollToTop/>
    </main>
  );
}
