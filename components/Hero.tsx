"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SketchButton } from "./sketch/SketchButton";
import { ArrowMark, HomeworkUnderline, ScribbleCircle, StarDoodle } from "./sketch/Doodles";
import { Reveal } from "./sketch/Reveal";

function KanbanMock() {
  const columns = [
    {
      title: "To do",
      cards: ["Inbox dump", "Fix signup copy", "Q3 kickoff notes"],
    },
    {
      title: "Doing",
      cards: ["Priority: billing bug", "Priya owns docs"],
    },
    {
      title: "Done",
      cards: ["Standup recap", "Ship waitlist"],
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div className="sketch-frame sketch-frame-double sketch-shadow paper-hatch rotate-0 p-3 md:rotate-[2.4deg] md:p-4">
        <div className="relative grid grid-cols-3 gap-2 md:gap-3">
          {columns.map((col) => (
            <div key={col.title} className="min-w-0">
              <p className="font-doodle mb-2 px-1 text-sm md:text-base">{col.title}</p>
              <div className="flex flex-col gap-2">
                {col.cards.map((card, i) => (
                  <div
                    key={card}
                    className={`sketch-frame relative px-2 py-2 md:px-2.5 md:py-2.5 ${
                      i === 0 ? "rotate-[-2deg]" : i === 1 ? "rotate-[1.6deg]" : "rotate-[-0.8deg]"
                    }`}
                  >
                    <span className="font-doodle relative text-[12px] leading-snug md:text-[14px]">
                      {card}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -left-2 -top-6 hidden rotate-[-8deg] md:-left-8 md:-top-8 md:block">
        <div className="relative">
          <p className="font-doodle relative z-[1] px-2 text-[13px] md:text-base">
            auto-sorted by AI
          </p>
          <ScribbleCircle className="absolute -inset-x-1 -inset-y-2 h-[140%] w-[108%]" />
        </div>
        <ArrowMark className="ml-10 mt-1 h-4 w-8 rotate-[28deg]" />
      </div>

      <div className="absolute -bottom-5 right-2 hidden rotate-[6deg] md:-bottom-6 md:-right-4 md:block">
        <StarDoodle className="absolute -left-5 -top-2 h-4 w-4" />
        <p className="font-doodle text-[13px] md:text-base">drag, done</p>
      </div>

      <div className="mt-3 flex justify-between px-1 font-doodle text-sm md:hidden">
        <span>auto-sorted by AI</span>
        <span>drag, done</span>
      </div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative px-4 pb-10 pt-6 md:px-6 md:pb-12 md:pt-8">
      <div className="mx-auto grid max-w-page items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
        <Reveal>
          <div className="relative mb-5 inline-flex items-center">
            <span className="font-doodle relative z-[1] px-3 py-1 text-sm md:text-base">
              New: AI task sorting is live
            </span>
            <ScribbleCircle className="absolute -inset-x-1 -inset-y-2 h-[130%] w-[106%]" />
          </div>

          <h1 className="font-display max-w-[16ch] text-[2.55rem] leading-[1.05] pb-1 text-ink md:text-5xl lg:text-[3.65rem]">
            Project management that doesn&apos;t feel like{" "}
            <span className="relative inline-block">
              homework
              <HomeworkUnderline className="absolute -bottom-1 left-0 h-3 w-full" />
            </span>
          </h1>

          <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-ink md:text-[1.05rem]">
            Flowline turns messy to-do lists into a clear plan your whole team
            actually follows. No onboarding calls, no 40-tab dashboards.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <SketchButton href="#" className="text-[13px] sm:text-[15px]">
              Start free - no card needed
            </SketchButton>
            <a href="#" className="sketch-underline font-doodle text-lg">
              Watch 90-sec demo
            </a>
          </div>

          <p className="font-doodle mt-5 text-sm text-ink/80 md:text-base">
            Join 4,000+ teams already using Flowline
          </p>
        </Reveal>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28, rotate: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <StarDoodle className="absolute -right-1 top-8 hidden h-7 w-7 md:block" />
          <KanbanMock />
        </motion.div>
      </div>
    </section>
  );
}
