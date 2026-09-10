"use client";

import { useState } from "react";
import { SketchButton } from "./sketch/SketchButton";
import { CloseIcon, LogoWordmark, MenuIcon } from "./sketch/Doodles";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[30] bg-paper/92 backdrop-blur-[2px]">
      <div className="relative mx-auto flex h-16 max-w-page items-center justify-between px-4 md:h-[72px] md:px-6">
        <LogoWordmark />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-doodle text-[1.05rem] text-ink hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <SketchButton href="#">Try it free</SketchButton>
        </div>

        <button
          type="button"
          className="sketch-frame sketch-shadow relative h-10 w-10 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex h-full w-full items-center justify-center">
            {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-5 w-6" />}
          </span>
        </button>

        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-ink sketch-filter"
          aria-hidden="true"
        />
      </div>

      {open ? (
        <div className="border-t-2 border-ink bg-paper px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-doodle text-xl"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <SketchButton href="#" className="mt-2 w-full">
              Try it free
            </SketchButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
