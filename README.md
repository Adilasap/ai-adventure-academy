# AI Adventure Academy — website

One-page site for AI Adventure Academy's free live online AI workshops.
Built with React 18, Vite 5 and TypeScript, styled with a small CSS design-token system (no CSS framework). Icons come from `lucide-react`; brand icons and illustrations are inline SVG.

## Deploy on Vercel

1. Push this folder to a GitHub repository and import that repository in Vercel.
2. Select **Vite** as the framework preset (Vercel usually detects it automatically).
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Add the environment variable `VITE_SITE_URL` with the public site origin (for example, `https://tasknext.online`) in Vercel Project Settings → Environment Variables, then redeploy. It is used for canonical and social-sharing metadata, not as a secret.

The included `.env.example` documents the variable. Copy it to `.env` for local work, or set the variable in your deployment environment. Never commit real secrets in environment files.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:5173. To create the production build in `dist/`, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deploy to tasknext.online

The site is static, so any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or your own web server).

1. Check `.env`: `VITE_SITE_URL=https://tasknext.online`. This value is used **only** for the canonical URL and social-sharing metadata. It never appears on the page as the brand.
2. Run `npm run build`.
3. Upload the contents of `dist/` to the host, or connect the repository and set build command `npm run build` and output directory `dist`.
4. In your domain registrar's DNS settings, point `tasknext.online` to the host using the A/CNAME records the host gives you, then turn on HTTPS.

## Where to edit things

All content lives in `src/config/`, so you shouldn't need to touch the components.

| What | File |
| --- | --- |
| Brand name, footer description, Privacy/Terms links | `src/config/site.ts` |
| WhatsApp number and prefilled messages | `src/config/whatsapp.ts` |
| Educator names, education, LinkedIn URLs, photos | `src/config/educators.ts` |
| Workshop titles, descriptions, modules, outcomes, course details | `src/config/workshops.ts` |
| Colours, fonts, spacing, radii, shadows, motion | `src/styles/tokens.css` |
| Page title, meta description, Open Graph tags | `index.html` |
| Privacy Policy / Terms pages (draft placeholders) | `public/privacy.html`, `public/terms.html` |

### Replace the educator portraits

1. Add square photos (at least 400×400) to `public/educators/`, for example `arjun.jpg` and `adil.jpg`.
2. In `src/config/educators.ts`, set `photo: "/educators/arjun.jpg"` and `photo: "/educators/adil.jpg"`.
3. The "Photo coming soon" placeholder and label disappear automatically once a photo is set.

### Edit course information and curricula

In `src/config/workshops.ts`, each workshop has:

- `modules`: the learning modules. Each has a `title`, `summary`, `items` and an optional `note`; Builders Module 5 also has a `workflow`.
- `outcomes`: the learning-outcome cards.
- `details`: the "Course details" panel. Add `pending: true` to show a value as a grey "To be confirmed" chip, and remove it once the detail is confirmed.
- `mainTopics` / `keyOutcomes`: what appears on the short overview cards.

Icons come from https://lucide.dev/icons. Import the icon at the top of the file and use it.

### Change the WhatsApp number or messages

Edit `src/config/whatsapp.ts`:

- `WHATSAPP_NUMBER`: country code plus number, digits only (currently `919376243218`).
- `WHATSAPP_MESSAGES`: `general` (hero, footer and floating button), `educators` (Ask the Educators), `explorers`, and `builders`.

Every WhatsApp link on the site is built by `getWhatsAppLink()`, so changes apply everywhere.

## How the scroll features work

- **Progress bar** (`ScrollProgress.tsx`): `scrollTop / (scrollHeight - clientHeight)`, clamped to 0–1. It updates once per animation frame and recalculates on resize or when the content height changes.
- **Active nav** (`hooks/useActiveSection.ts`): an IntersectionObserver triggers re-checks. The active section is the last one whose top has passed a line just below the header, so only one item can be active and it cannot flicker. After a nav click, the clicked item stays highlighted until scrolling stops.
- **Header offset:** sections use `scroll-margin-top`, so headings land just below the sticky header.
- **Reduced motion:** with reduced motion enabled, smooth scrolling and animations are turned off.

## Design reference notes

Colours, fonts, radii and shadows were taken from the rendered CSS of the reference site (aikids.flocci.in), inspected on 2026-10-20. They're documented at the top of `src/styles/tokens.css`. Two additions improve contrast: a darker blue for buttons and a darker WhatsApp green.

## Confirm before publishing

- [ ] Real photos of Arjun and Adil (currently labelled placeholders).
- [ ] Final curriculum: the modules are marked as a *proposed* plan.
- [ ] Workshop schedule, duration and number of sessions.
- [ ] Required device, software and any AI accounts, checked against each tool's age requirements.
- [ ] Builders Lab level, prerequisites, and programming language and tools.
- [ ] Whether certificates or recordings will be offered. Update the `details` rows only once confirmed.
- [ ] Complete and review `public/privacy.html` and `public/terms.html`, which are currently drafts.
- [ ] Test the WhatsApp links on a real phone and on WhatsApp Web.
- [ ] Check `og-image.png` previews correctly after deployment (for example with a link-preview debugger).
