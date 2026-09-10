export function TornPaper({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`relative h-12 w-full overflow-hidden md:h-16 ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
      >
        <path
          d="M0 28 L18 22 L36 34 L58 16 L82 30 L104 14 L128 32 L154 18 L176 36 L204 12 L228 28 L254 20 L278 38 L306 14 L332 30 L358 18 L384 36 L412 10 L438 28 L464 20 L492 40 L520 16 L546 32 L574 18 L600 38 L628 12 L654 30 L682 20 L708 36 L736 14 L762 28 L790 22 L816 40 L846 16 L872 30 L900 18 L926 36 L954 12 L980 28 L1008 20 L1034 38 L1062 14 L1088 32 L1114 18 L1140 36 L1170 16 L1200 28 V64 H0 Z"
          fill="#FAFAF7"
        />
        <path
          d="M0 28 L18 22 L36 34 L58 16 L82 30 L104 14 L128 32 L154 18 L176 36 L204 12 L228 28 L254 20 L278 38 L306 14 L332 30 L358 18 L384 36 L412 10 L438 28 L464 20 L492 40 L520 16 L546 32 L574 18 L600 38 L628 12 L654 30 L682 20 L708 36 L736 14 L762 28 L790 22 L816 40 L846 16 L872 30 L900 18 L926 36 L954 12 L980 28 L1008 20 L1034 38 L1062 14 L1088 32 L1114 18 L1140 36 L1170 16 L1200 28"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2"
          className="sketch-filter-strong"
        />
      </svg>
    </div>
  );
}
