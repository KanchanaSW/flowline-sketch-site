import { FooterDoodle } from "./sketch/Doodles";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help Center", "API Docs", "Community", "Status"],
  },
];

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 md:px-6">
      <div className="mx-auto max-w-page">
        <FooterDoodle className="mx-auto mb-10 h-8 w-full max-w-xl" />

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-accent mb-3 text-xl">{col.title}</p>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:sketch-underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="font-doodle mt-10 text-sm text-ink/80">
          © 2026 Flowline. Made with pencils, not Figma.
        </p>
      </div>
    </footer>
  );
}
