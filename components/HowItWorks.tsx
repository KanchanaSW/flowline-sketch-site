import { CircleScribble, DashedArrow, DownDashedArrow } from "./sketch/Doodles";
import { Reveal, RevealGroup, RevealItem } from "./sketch/Reveal";

const steps = [
  {
    n: "1",
    title: "Dump everything",
    copy: "Paste your task list, forward an email, or type it out. Don't organize anything yet.",
  },
  {
    n: "2",
    title: "Let Flowline sort it",
    copy: "Our AI groups, prioritizes, and assigns based on your team's patterns.",
  },
  {
    n: "3",
    title: "Review and go",
    copy: "Approve the plan in one tap. Everyone's calendar updates automatically.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-page">
        <Reveal>
          <h2 className="font-display mx-auto mb-12 max-w-[16ch] text-center text-4xl leading-[1.05] md:mb-16 md:text-5xl">
            From chaos to clarity in three steps
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 items-start gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-2">
          {steps.map((step, i) => (
            <div key={step.n} className="contents">
              <RevealItem>
                <article className="relative px-2 text-center md:px-3">
                  <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                    <CircleScribble className="absolute inset-0 h-16 w-16" />
                    <span className="font-display relative text-3xl leading-none">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="font-accent text-2xl">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-[32ch] text-[15px] leading-relaxed">
                    {step.copy}
                  </p>
                </article>
              </RevealItem>

              {i < steps.length - 1 ? (
                <RevealItem className="flex items-center justify-center py-1 md:self-center md:py-0">
                  <DownDashedArrow className="h-12 w-7 md:hidden" />
                  <DashedArrow className="hidden h-8 w-24 md:block" />
                </RevealItem>
              ) : null}
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
