# Paperclip cloud recovery (2026-05-30)

The Cursor cloud agent may arrive with loopback `PAPERCLIP_API_URL` configured but **no Paperclip process** running on the VM.

## Recovery steps (cloud VM)

```bash
npx --yes paperclipai onboard -y --run   # starts API on 127.0.0.1:3100
```

Then seed **LunchDecisionStudio** (`issuePrefix: LUN`) with CEO Architect + Founding Engineer agents and MVP backlog.

**Recovery company ID (this VM):** `b398c167-cdc3-4735-a421-cf80ff799656`

## Operator Mac instance

The operator board may use a different company UUID (`PAPERCLIP_COMPANY_ID` in the adapter). To unify:

- Run Paperclip on the Mac and tunnel API + `PAPERCLIP_API_KEY` to cloud, **or**
- `paperclipai company export <macCompanyId>` → `paperclipai company import` on the VM, **or**
- Point the Cursor adapter at the recovery company above.

## GitHub truth (2026-05-30)

| Ticket | Status on `main` |
| --- | --- |
| Prisma + SQLite (LUN-1) | Merged PR #3 |
| Mobile shell (LUN-2) | Merged PR #2 |
| README (LUN-4 docs) | Merged PR #1 |

Active Paperclip backlog: wire UI to DB (spots, pick, add form, seed, README sync).
