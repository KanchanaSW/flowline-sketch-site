"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "./sketch/Doodles";
import { Reveal } from "./sketch/Reveal";

const items = [
  {
    q: "Do I need a credit card to start?",
    a: "Nope. The Starter plan is free forever, and Team/Scale trials don't need a card either.",
  },
  {
    q: "Can I import from Trello or Asana?",
    a: "Yes. One-click import for both, plus CSV upload for anything else.",
  },
  {
    q: "Is my data used to train AI models?",
    a: "Never. Your data is used only to run your workspace.",
  },
  {
    q: "What happens if I go over my plan's limits?",
    a: "We'll notify you first. Nothing breaks or gets deleted automatically.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-display mb-10 text-center text-4xl md:mb-12 md:text-5xl">
            FAQ
          </h2>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-4">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="sketch-frame sketch-shadow relative bg-paper">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left md:px-5"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-accent text-xl leading-snug md:text-2xl">
                      {item.q}
                    </span>
                    <span className="mt-1 shrink-0" aria-hidden>
                      {isOpen ? (
                        <MinusIcon className="h-5 w-5" />
                      ) : (
                        <PlusIcon className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="relative px-4 pb-5 text-[15px] leading-relaxed md:px-5">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
