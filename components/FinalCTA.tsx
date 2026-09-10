import { SketchButton } from "./sketch/SketchButton";
import { StarDoodle } from "./sketch/Doodles";
import { Reveal } from "./sketch/Reveal";

export function FinalCTA() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <Reveal className="mx-auto max-w-page">
        <div className="sketch-frame sketch-frame-double sketch-shadow paper-hatch relative mx-auto max-w-3xl rotate-0 px-6 py-12 text-center md:rotate-[-1deg] md:px-12 md:py-14">
          <StarDoodle className="absolute left-4 top-4 h-6 w-6 md:left-8 md:top-6" />
          <StarDoodle className="absolute bottom-5 right-6 h-5 w-5 rotate-12" />
          <h2 className="font-display relative text-4xl leading-[1.05] md:text-5xl">
            Stop managing tasks. Start finishing them.
          </h2>
          <div className="relative mt-8 flex justify-center">
            <SketchButton href="#">Start free today</SketchButton>
          </div>
          <p className="font-doodle relative mt-5 text-sm md:text-base">
            No credit card • Cancel anytime • 2-minute setup
          </p>
        </div>
      </Reveal>
    </section>
  );
}
