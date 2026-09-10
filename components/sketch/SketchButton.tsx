"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "fill" | "outline";

export function SketchButton({
  href = "#",
  children,
  variant = "fill",
  className = "",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      whileHover={
        reduce
          ? undefined
          : {
              rotate: [0, -2.6, 2.2, -1.4, 0],
              transition: { duration: 0.42 },
            }
      }
      whileTap={reduce ? undefined : { scale: 0.98, y: 1 }}
      className={`sketch-btn sketch-btn-${variant} whitespace-nowrap ${className}`}
    >
      <span className="relative z-[1]">{children}</span>
    </motion.a>
  );
}
