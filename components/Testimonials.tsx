"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PinDoodle } from "./sketch/Doodles";
import { RevealGroup, RevealItem } from "./sketch/Reveal";

const quotes = [
  {
    quote: "We cut our Monday planning meeting from 45 minutes to 8.",
    name: "Priya N.",
    role: "Ops Lead at Fieldnote",
    rotate: "md:rotate-[-2.4deg]",
  },
  {
    quote: "It's the first PM tool my whole team actually opens without being nagged.",
    name: "Marcus T.",
    role: "Founder at Wren & Co",
    rotate: "md:rotate-[1.8deg]",
  },
  {
    quote: "Finally a tool that doesn't make me feel like I need a manual.",
    name: "Dana K.",
    role: "Product Manager at Lumen Labs",
    rotate: "md:rotate-[-1.2deg]",
  },
];

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section id="testimonials" className="px-4 py-16 pt-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-page">
        <RevealGroup className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {quotes.map((item) => (
            <RevealItem key={item.name}>
              <motion.figure
                whileHover={
                  reduce
                    ? undefined
                    : {
                        rotate: [0, -2.2, 2, 0],
                        transition: { duration: 0.42 },
                      }
                }
                className={`sketch-frame sketch-shadow relative bg-paper px-5 pb-6 pt-8 ${item.rotate}`}
              >
                <PinDoodle className="absolute left-1/2 top-[-18px] h-8 w-6 -translate-x-1/2" />
                <blockquote className="font-doodle relative text-xl leading-snug md:text-[1.35rem]">
                  {item.quote}
                </blockquote>
                <figcaption className="relative mt-5 text-sm leading-relaxed">
                  <span className="block font-medium">{item.name}</span>
                  <span className="text-ink/75">{item.role}</span>
                </figcaption>
              </motion.figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
