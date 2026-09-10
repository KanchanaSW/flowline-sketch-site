"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import {
  ChartIcon,
  ClockIcon,
  LightningIcon,
  LockIcon,
  PuzzleIcon,
  SpeechIcon,
} from "./sketch/Doodles";
import { Reveal, RevealGroup, RevealItem } from "./sketch/Reveal";

const features: {
  title: string;
  copy: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  rotate: string;
}[] = [
  {
    title: "AI task sorting",
    copy: "Dump every task in one box. Flowline figures out priority, owner, and deadline for you.",
    Icon: LightningIcon,
    rotate: "md:rotate-[-1.6deg]",
  },
  {
    title: "Async by default",
    copy: "Comments, updates, and decisions live next to the work, so nobody has to be online at the same time.",
    Icon: SpeechIcon,
    rotate: "md:rotate-[1.8deg]",
  },
  {
    title: "One-glance reporting",
    copy: "A single weekly snapshot that actually gets read, instead of a dashboard nobody opens.",
    Icon: ChartIcon,
    rotate: "md:rotate-[-0.8deg]",
  },
  {
    title: "Works with your tools",
    copy: "Connects to Slack, Notion, and GitHub in two clicks. No migration headaches.",
    Icon: PuzzleIcon,
    rotate: "md:rotate-[1.4deg]",
  },
  {
    title: "Privacy first",
    copy: "Your data stays yours. SOC 2 Type II certified, no AI training on your content.",
    Icon: LockIcon,
    rotate: "md:rotate-[-2deg]",
  },
  {
    title: "Set up in 10 minutes",
    copy: "Import from Trello, Asana, or a spreadsheet and be running before your coffee's cold.",
    Icon: ClockIcon,
    rotate: "md:rotate-[0.9deg]",
  },
];

export function Features() {
  const reduce = useReducedMotion();

  return (
    <section id="features" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-page">
        <Reveal>
          <h2 className="font-display mx-auto mb-12 max-w-[18ch] text-center text-4xl leading-[1.05] md:mb-16 md:text-5xl">
            Everything your team needs, nothing it doesn&apos;t
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <RevealItem key={feature.title}>
              <motion.article
                whileHover={
                  reduce
                    ? undefined
                    : {
                        rotate: [0, -1.8, 1.6, 0],
                        transition: { duration: 0.4 },
                      }
                }
                className={`sketch-frame sketch-shadow relative h-full p-5 md:p-6 ${feature.rotate}`}
              >
                <feature.Icon className="relative mb-4 h-12 w-12" />
                <h3 className="font-accent relative text-2xl leading-tight">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-ink">
                  {feature.copy}
                </p>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
