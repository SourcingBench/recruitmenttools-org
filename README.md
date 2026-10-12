# recruitmenttools.org

Static Astro site for RecruitmentTools.org — an independent guide to the recruiting software stack: 10 tool categories, 50+ rated tools, stacks by company type.

## Develop

```
npm install
npm run dev      # local dev server
npm run build    # regenerates public/llms.txt, then builds to dist/
npm run check    # astro type check
```

## Structure

- `src/data/categories.json` — the 10 categories (what/who/when, features, pricing, FAQ)
- `src/data/tools.json` — every tool profile (scores, pricing, pros/cons, integrations)
- `src/data/stacks.json` — recommended stack per company type
- `src/data/glossary.json` — glossary terms
- `src/pages/` — routes; `categories/[slug]`, `tools/[slug]`, `stacks/[slug]` generate from the JSON
- `scripts/llms.mjs` — writes `public/llms.txt` from the data; `scripts/assets.py` regenerates icons/OG image

## Deploy

Cloudflare Pages project `recruitmenttools-org` (build `npm run build`, output `dist`). Pushes to `main` deploy via `.github/workflows/deploy.yml` once `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repo secrets are set; until then deploy with `npx wrangler pages deploy dist --project-name recruitmenttools-org`.
