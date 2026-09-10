"use client";

import { useEffect } from "react";

export function PencilCursor() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    document.documentElement.classList.add("pencil-on");
    return () => document.documentElement.classList.remove("pencil-on");
  }, []);

  return null;
}
