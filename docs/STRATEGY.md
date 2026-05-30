# LunchDecisionStudio Strategy

## Problem

Choosing lunch should take seconds, not a meeting. Teams need a **mobile-first** picker that respects how far people are willing to walk.

## Product (MVP)

- **Single view** on phone: see options and commit to today's pick without navigation churn.
- **Near / Far** distance buckets filter the list (not maps API for MVP).
- Persist spots in **SQLite via Prisma**; UI with **Tailwind** on **Next.js**.

## Repo

https://github.com/arnon-aroon/lunch-picker

## Execution

CEO Architect owns backlog and acceptance criteria. **Founding Engineer** implements delegated tickets in Paperclip (`LUN-*`).

## Non-goals (MVP)

Accounts, maps integrations, reviews, multi-location admin.
