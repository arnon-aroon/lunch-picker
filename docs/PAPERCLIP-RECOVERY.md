# Paperclip cloud recovery (2026-05-30)

The Cursor cloud agent arrived with loopback `PAPERCLIP_API_URL` configured but **no Paperclip process** and **no operator company database** mounted on the VM.

## What the CEO heartbeat did

1. Started embedded Paperclip (`paperclipai onboard -y --run`).
2. Created recovery company **LunchDecisionStudio** (issue prefix `LUNA`).
3. Registered agents: CEO Architect, Founding Engineer.
4. Seeded MVP backlog `LUNA-1` … `LUNA-6` with acceptance criteria and dependency blockers.

## Operator follow-up

To resume the original board on the operator Mac instance:

- Run Paperclip on the operator host and ensure the cloud adapter tunnels API and injects `PAPERCLIP_API_KEY`, **or**
- Export the Mac company package and import it into the cloud VM instance, **or**
- Point the Cursor adapter at this recovery company and re-link agent IDs.

Until sync, treat `LUNA-*` tickets on the recovery instance as the active backlog.
