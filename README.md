# LunchDecisionStudio

Mobile-first lunch picker for teams — choose where to eat in seconds, filtered by how far you're willing to walk.

**Repo:** https://github.com/arnon-aroon/lunch-picker

## Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | [Tailwind CSS 4](https://tailwindcss.com) |
| Language | TypeScript |
| Database | SQLite via [Prisma](https://www.prisma.io) |

## Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm** (bundled with Node)

## Quick start

```bash
git clone https://github.com/arnon-aroon/lunch-picker.git
cd lunch-picker
cp .env.example .env   # postinstall also creates .env if missing
npm ci
npm run db:migrate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For phone/LAN testing, set your machine IP in `.env`:

```bash
NEXT_DEV_ALLOWED_ORIGINS=192.168.1.237
```

Then restart `npm run dev` and open `http://192.168.1.237:3000`.

**If Near/Far buttons do not respond on a phone in dev mode**, client JavaScript may be blocked by Next.js cross-origin dev restrictions. Either set `NEXT_DEV_ALLOWED_ORIGINS` as above, or use production mode on your LAN:

```bash
npm run build && npm run start -- -H 0.0.0.0
```

## Sample data

Seed demo Near/Far spots (only runs when the database is empty):

```bash
npm run db:seed
```

Or add spots in the app UI (form appears when a list is empty, or under **Add another spot**).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server (runs `prisma generate` first) |
| `npm run build` | Create a production build |
| `npm run db:migrate` | Apply Prisma migrations (SQLite) |
| `npm run db:seed` | Seed sample lunch spots |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Run ESLint |

## Project layout

```
src/app/          Next.js App Router pages and layouts
public/           Static assets
```

## Environment variables

Copy `.env.example` to `.env` (or rely on `postinstall` to create it). Required:

```bash
DATABASE_URL="file:./dev.db"
```

## Mobile & webview

LunchDecisionStudio is designed as a **single-screen, phone-width UI** (max ~448px) — no desktop sidebar or multi-page navigation for MVP.

### Test on a phone

1. Run `npm run dev` on your machine.
2. Find your LAN IP (`ipconfig getifaddr en0` on macOS, `hostname -I` on Linux).
3. On your phone (same Wi‑Fi), open `http://<your-ip>:3000`.

Alternatively, use Chrome DevTools → **Toggle device toolbar** and pick a phone preset (e.g. iPhone 14).

### Webview embedding (future)

The app is a responsive web page with no custom URL schemes or native bridges in MVP. To wrap it later:

| Platform | Container | Notes |
| --- | --- | --- |
| iOS | `WKWebView` | Load the deployed HTTPS URL; enable `viewport-fit=cover` for notch safe areas |
| Android | `WebView` | Same URL; handle back gesture if you add in-app navigation later |

When the mobile shell lands, the root layout sets `viewport-fit: cover` and components use `env(safe-area-inset-*)` for header/footer padding on notched devices.

## Contributing

Work is tracked in Paperclip under the **LunchDecisionStudio** board. Open a focused PR against `main` for each ticket.
