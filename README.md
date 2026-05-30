# LunchDecisionStudio

Mobile-first lunch picker for teams — choose where to eat in seconds, filtered by how far you're willing to walk.

**Repo:** https://github.com/arnon-aroon/lunch-picker

## Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | [Tailwind CSS 4](https://tailwindcss.com) |
| Language | TypeScript |
| Database | SQLite via [Prisma](https://www.prisma.io) *(schema and migrations added in a follow-up issue)* |

## Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm** (bundled with Node)

## Quick start

```bash
git clone https://github.com/arnon-aroon/lunch-picker.git
cd lunch-picker
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server (hot reload) |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Run ESLint |

## Project layout

```
src/app/          Next.js App Router pages and layouts
public/           Static assets
```

## Database setup (Prisma + SQLite)

Prisma is part of the planned stack but not yet wired in this repo. When the schema lands, setup will look like:

```bash
npx prisma migrate dev
```

Until then, the app runs without a database.

## Environment variables

No environment variables are required for local development today. When Prisma is added, copy `.env.example` (if present) to `.env` and set `DATABASE_URL`.

## Contributing

Work is tracked in Paperclip under the **LunchDecisionStudio** board. Open a focused PR against `main` for each ticket.
