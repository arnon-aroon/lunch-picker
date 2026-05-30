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
npm ci
npm run db:migrate
npm run dev
```

`npm ci` runs `prisma generate` via `postinstall`; `npm run dev` regenerates the client before starting Next.js. Open [http://localhost:3000](http://localhost:3000) in your browser.

Optional: `npm run db:seed` for sample lunch spots.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Generate Prisma client and start the dev server (hot reload) |
| `npm run build` | Generate Prisma client and create a production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Run ESLint |
| `npm run db:migrate` | Apply Prisma migrations to the local SQLite database |
| `npm run db:seed` | Seed sample spots (optional) |

## Project layout

```
src/app/          Next.js App Router pages and layouts
public/           Static assets
```

## Database setup (Prisma + SQLite)

After `npm ci`, apply migrations once:

```bash
npm run db:migrate
```

The SQLite file is created at `prisma/dev.db` (see `.env.example`). No `.env` file is required for local dev — defaults match `prisma.config.ts` and `src/lib/prisma.ts`.

## Environment variables

Optional. Copy `.env.example` to `.env` to override the database path:

```bash
DATABASE_URL="file:./prisma/dev.db"
```

## Mobile & webview

LunchDecisionStudio is designed as a **single-screen, phone-width UI** (max ~448px) — no desktop sidebar or multi-page navigation for MVP.

### Test on a phone

1. Run `npm run dev` on your machine.
2. Find your LAN IP (`ipconfig getifaddr en0` on macOS, `hostname -I` on Linux).
3. On your phone (same Wi‑Fi), open `http://<your-ip>:3000`.

`next.config.ts` includes `allowedDevOrigins` for common private LAN ranges (`192.168.*.*`, `10.*.*.*`, `172.*.*.*`) so dev HMR and `/_next` assets are not blocked cross-origin.

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
