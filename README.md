# Flowline

Hand-drawn sketch landing page for Flowline, an AI project management tool.

**Live:** [https://sketch-site.skw-dev.workers.dev/h](https://sketch-site.skw-dev.workers.dev/)

Built with Next.js 14, React, Tailwind CSS, and Framer Motion. Deployed as a static site on Cloudflare Workers.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts


| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `npm run dev`    | Start the Next.js dev server           |
| `npm run build`  | Static export to `out/`                |
| `npm run lint`   | Run ESLint                             |
| `npm run deploy` | Build and deploy to Cloudflare Workers |




## Deploy

Requires [Wrangler](https://developers.cloudflare.com/workers/wrangler/) (already a project dependency) and a logged-in Cloudflare account (`npx wrangler login`).

```bash
npm run deploy
```

This builds the static export, then uploads `out/` to the `sketch-site` Worker.