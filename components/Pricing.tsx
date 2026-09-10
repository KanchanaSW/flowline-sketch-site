"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SketchButton } from "./sketch/SketchButton";
import { ArrowMark, ScribbleCircle } from "./sketch/Doodles";
import { RevealGroup, RevealItem } from "./sketch/Reveal";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    cadence: "/mo",
    blurb: "For small teams getting started",
    popular: false,
    rotate: "md:rotate-[-1.4deg]",
    features: [
      "Up to 5 members",
      "3 projects",
      "Core AI sorting",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$12",
    cadence: "/user/mo",
    blurb: "For growing teams",
    popular: true,
    rotate: "md:rotate-[0.6deg]",
    features: [
      "Unlimited projects",
      "Advanced AI sorting",
      "Integrations (Slack, Notion, GitHub)",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "$24",
    cadence: "/user/mo",
    blurb: "For companies that need control",
    popular: false,
    rotate: "md:rotate-[1.8deg]",
    features: [
      "Everything in Team",
      "SSO & advanced permissions",
      "Custom reporting",
      "Dedicated onboarding",
    ],
  },
];

export function Pricing() {
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="px-4 py-16 md:px-6 md:py-24 lg:pt-28">
      <div className="mx-auto max-w-page">
        <RevealGroup className="grid grid-cols-1 items-start gap-12 md:gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <RevealItem key={tier.name} className="relative">
              {tier.popular ? (
                <div className="absolute -inset-x-3 -inset-y-5 z-0 hidden lg:block" aria-hidden>
                  <svg
                    viewBox="0 0 320 460"
                    className="h-full w-full ink-stroke sketch-filter-strong"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M28 42c18-22 86-30 154-22 62 8 116 18 124 62 8 48 10 118 4 186-4 52-18 110-62 128-48 20-122 16-176-6-46-18-64-78-60-138 4-64 12-148 16-210z"
                      strokeWidth="2.2"
                    />
                  </svg>
                </div>
              ) : null}

              <motion.article
                whileHover={
                  reduce
                    ? undefined
                    : {
                        rotate: [0, -2, 1.8, 0],
                        transition: { duration: 0.4 },
                      }
                }
                className={`sketch-frame sketch-shadow relative z-[1] bg-paper p-6 ${tier.rotate} ${
                  tier.popular ? "paper-hatch" : ""
                }`}
              >
                {tier.popular ? (
                  <div className="absolute -right-2 -top-7 rotate-[12deg] md:-right-4">
                    <p className="font-doodle relative z-[1] text-sm md:text-base">
                      Most popular
                    </p>
                    <ScribbleCircle className="absolute -inset-x-2 -inset-y-1 h-[130%] w-[112%]" />
                    <ArrowMark className="absolute -left-8 top-5 h-4 w-8 -rotate-90" />
                  </div>
                ) : null}

                <h3 className="font-accent relative text-3xl">{tier.name}</h3>
                <p className="relative mt-2">
                  <span className="font-display text-5xl leading-none">{tier.price}</span>
                  <span className="font-doodle ml-1 text-lg">{tier.cadence}</span>
                </p>
                <p className="relative mt-3 text-sm leading-relaxed">{tier.blurb}</p>
                <ul className="relative mt-5 space-y-2.5 text-[15px]">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span aria-hidden className="font-doodle leading-none">
                        *
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <SketchButton
                  href="#"
                  variant={tier.popular ? "fill" : "outline"}
                  className="relative mt-6 w-full"
                >
                  Get started
                </SketchButton>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
