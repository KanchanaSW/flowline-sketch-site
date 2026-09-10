import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function iconProps(props: IconProps) {
  return {
    viewBox: "0 0 64 64",
    fill: "none",
    "aria-hidden": true as const,
    ...props,
    className: `ink-stroke ${props.className ?? ""}`,
  };
}

export function ArrowMark(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 36 22">
      <path d="M2 12.2c6.4-1.4 12.8.8 19.2-.4 3.2-.6 6.6-1.8 9.8-1.2" strokeWidth="1.8" />
      <path d="M26.4 5.2c2.4 2.1 4.6 3.9 6.8 6.4-2.8.6-5.1 1.9-7.6 3.6" strokeWidth="1.8" />
    </svg>
  );
}

export function LightningIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M34 8.5L18.2 33.4h12.6L27.4 55.5 48.8 29.8H35.6L34 8.5z" strokeWidth="2.1" />
    </svg>
  );
}

export function SpeechIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M14.2 16.4c-1.4 4.8-.6 11.2 3.1 15.4 4.2 4.7 11.4 6.6 18.2 5.4 5.4-.9 11-4.2 13.1-9.6 2.4-6.1.2-13.8-5.4-17.6-5.8-4-15.2-4.4-21.6-.8-2.6 1.5-5.2 3.8-7.4 7.2z"
        strokeWidth="2"
      />
      <path d="M22 42.5c-1.8 4.4-5.2 8.2-9.6 10.6 3.4-1 7.6-1.1 10.8-3.4 1.6-1.1 3-3.2 3.6-5.2" strokeWidth="2" />
      <path d="M24.5 27.2h15.8M24.8 33.6h11.4" strokeWidth="1.8" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M10.4 50.2V14.8" strokeWidth="2" />
      <path d="M10 50.6h42.6" strokeWidth="2" />
      <path
        d="M14.8 39.4c5.2-7.4 8.8-4.6 13.4-12.2 4.6-7.6 8.4-3.2 14.2-11.6 3.6 2.8 7.2 8.4 11.6 7.1"
        strokeWidth="2.1"
      />
      <path d="M48.2 16.4c1.1 2.8 2.8 4.6 5.2 6.2" strokeWidth="1.8" />
    </svg>
  );
}

export function PuzzleIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M14 22.4v-6.2c0-1.8 1.6-3.4 3.6-3.4h7.2c.4-3.6 3.4-6.2 6.4-5.2 2.6.8 4.2 3.8 3.6 6.6h8.2c1.8.2 3.6 1.8 3.6 3.8v7.4c3.4.2 6.2 2.8 5.4 6.2-.8 3.2-3.8 4.6-6.2 4.2v8.4c.2 2-1.6 4-3.8 4.2h-8.4c-.2 3.2-2.8 6-6.2 5.2-2.8-.6-4.4-3.4-4.2-6v-7.6c-3.6.4-6.8-2.2-7-5.6-.2-2.8 2.2-5.6 5.4-5.8z"
        strokeWidth="2"
      />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M21.2 30.4V22c.2-6.4 5-11.6 11.2-11.4 6 .2 10.6 5.2 10.6 11.2v8.6"
        strokeWidth="2.1"
      />
      <path
        d="M16.6 31.8h31.4c1.6.2 3 1.8 3 3.6v16.4c0 2-1.6 3.6-3.4 3.8H16.8c-1.8 0-3.4-1.8-3.4-3.8V35.6c0-2 1.4-3.6 3.2-3.8z"
        strokeWidth="2"
      />
      <path d="M32.2 39.4v7.6" strokeWidth="2.1" />
      <circle cx="32.2" cy="39" r="1.6" strokeWidth="1.8" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M12.4 32.2c.6-11.4 10.2-20 21.6-19.6 11.2.4 20.2 10.4 19.6 21.6-.6 11-10.4 20.2-21.6 19.6-10.8-.6-20.2-10-19.6-21.6z"
        strokeWidth="2"
      />
      <path d="M32.4 18.8v14.2l9.6 5.4" strokeWidth="2.1" />
    </svg>
  );
}

export function CircleScribble(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 64 64">
      <path
        d="M14 33c1-12 12-22 26-21 13 1 22 12 21 24-1 13-13 22-26 21-12-1-22-12-21-24z"
        strokeWidth="2"
      />
      <path
        d="M18 28c3-9 12-16 23-15"
        strokeWidth="1.4"
        opacity="0.7"
      />
    </svg>
  );
}

export function HomeworkUnderline(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 220 18">
      <path
        d="M4 11c24-6 48 4 74-2 28-7 52 6 78 0 22-5 42 4 60 1"
        strokeWidth="2"
      />
      <path d="M18 14c30-3 62 3 94-1 26-3 52 2 80 0" strokeWidth="1.3" opacity="0.7" />
    </svg>
  );
}

export function StarDoodle(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 32 32">
      <path
        d="M16.2 3.4l2.4 7.6h7.8l-6.2 4.6 2.4 7.6-6.6-4.4-6.4 4.6 2.2-7.8-6.2-4.4h7.8z"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function ScribbleCircle(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 220 56">
      <path
        d="M18 30c8-16 48-24 96-22 46 2 86 12 90 28-6 16-52 18-102 16C54 50 8 44 18 30z"
        strokeWidth="2.2"
      />
      <path
        d="M28 26c12-10 58-16 98-14 32 2 66 12 70 22"
        strokeWidth="1.4"
        opacity="0.7"
      />
    </svg>
  );
}

export function PinDoodle(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 28 36">
      <circle cx="14" cy="10" r="6.2" strokeWidth="1.8" />
      <path d="M14 16.4L12.8 33.2" strokeWidth="1.8" />
      <path d="M10.6 32.4h8.4" strokeWidth="1.6" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 24 24">
      <path d="M4.2 12.2h15.4" strokeWidth="1.8" />
      <path d="M12.1 4.4v15.2" strokeWidth="1.8" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 24 24">
      <path d="M4.4 12.3h15.2" strokeWidth="1.8" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 28 20">
      <path d="M2 3.2h24.2" strokeWidth="1.8" />
      <path d="M3.4 10.1h21.2" strokeWidth="1.8" />
      <path d="M2.6 16.8h22.8" strokeWidth="1.8" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 24 24">
      <path d="M5 5.4l14.2 13.4" strokeWidth="1.8" />
      <path d="M19.4 5.2L5.2 18.8" strokeWidth="1.8" />
    </svg>
  );
}

export function DashedArrow(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 120 28">
      <path
        d="M4 14.2c18-4 36 4 54-1 16-4.4 32 2.2 46 1"
        strokeWidth="1.7"
        strokeDasharray="5 6"
      />
      <path d="M96 7.4c5 2.8 9.4 5 14.2 7.6-5.2 1.2-9.4 3.6-14 6.2" strokeWidth="1.7" />
    </svg>
  );
}

export function DownDashedArrow(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 28 72">
      <path d="M14 3c-3 12 4 22-1 34-3 8 3 16 2 26" strokeWidth="1.7" strokeDasharray="5 6" />
      <path d="M6.4 56.2c3.8 4 6.8 7.4 8.8 12.2 1.4-5 4.6-8.4 8.6-12" strokeWidth="1.7" />
    </svg>
  );
}

export function FooterDoodle(props: IconProps) {
  return (
    <svg {...iconProps(props)} viewBox="0 0 720 36">
      <path
        d="M8 22c36-14 82 10 124-6 46-16 88 12 136 0 42-10 86 12 128-2 44-14 90 10 140 1 38-8 80 8 124-4 32-8 62 8 92 6"
        strokeWidth="2"
      />
      <path d="M348 6l4 10-9 2 10 5-3 9 8-7 9 6-4-10 9-3-10-4 2-9z" strokeWidth="1.5" />
    </svg>
  );
}

export function LogoWordmark() {
  return (
    <a href="#top" className="group inline-flex items-center gap-2 text-ink">
      <span className="font-display text-[1.85rem] leading-none tracking-tight md:text-[2rem]">
        Flowline
      </span>
      <ArrowMark className="h-4 w-7 translate-y-[2px] transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
