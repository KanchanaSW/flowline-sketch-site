export function SketchFilter() {
  return (
    <svg
      className="pointer-events-none absolute left-0 top-0 h-px w-px overflow-visible"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter
          id="sketch-wobble"
          x="-12%"
          y="-12%"
          width="124%"
          height="124%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.03"
            numOctaves="3"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="6.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter
          id="sketch-wobble-strong"
          x="-18%"
          y="-18%"
          width="136%"
          height="136%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.025"
            numOctaves="4"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
