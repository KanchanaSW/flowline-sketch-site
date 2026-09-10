import { Reveal } from "./sketch/Reveal";

const logos = [
  { name: "Nordic Studio", mark: "N" },
  { name: "Lumen Labs", mark: "L" },
  { name: "Basecamp Coffee Co", mark: "B" },
  { name: "Wren & Co", mark: "W" },
  { name: "Fieldnote", mark: "F" },
];

function LogoMark({ name, mark }: { name: string; mark: string }) {
  return (
    <div className="flex items-center gap-2.5 text-ink">
      <span className="sketch-frame relative flex h-9 w-9 items-center justify-center">
        <span className="font-display relative text-xl leading-none">{mark}</span>
      </span>
      <span className="font-doodle text-lg leading-none whitespace-nowrap md:text-xl">
        {name}
      </span>
    </div>
  );
}

export function LogoStrip() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-12">
      <Reveal className="mx-auto max-w-page">
        <p className="font-doodle mb-6 text-center text-base text-ink/80 md:text-left md:text-lg">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:justify-between">
          {logos.map((logo) => (
            <LogoMark key={logo.name} {...logo} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
