# AI.md

This file provides guidance to AI agents working with this repository.

## Project Overview

This is an Electron desktop app template for building a grammar-checking application.

### Tech Stack
- Electron (Electron Forge + Vite)
- React 19 + TypeScript (strict)
- TanStack Router (file-based routing under `src/routes/`)
- Tailwind CSS v4 + shadcn/ui components under `src/components/ui/`
- oRPC + Zod for typed IPC between renderer and main
- Biome for linting/formatting
- Vitest (unit) + Playwright (e2e)

## Development Commands

- `bun run dev` / `bun run start` — Run the app (Electron Forge)
- `bun run package` — Package without making installers
- `bun run build` — Build installers (`electron-forge make`)
- `bun run publish` — Publish (GitHub Releases)
- `bun run fix` — Auto-fix + re-check (Biome)
- `bun run verify` — `fix` + unit tests
- `bun run verify-full` — `fix` + unit tests + build
- `bun run test` — Unit tests (Vitest)
- `bun run test:e2e` — E2E tests (Playwright)
- `bun run docs` — Regenerate structure docs

## Architecture Notes

### Processes and boundaries
- Main process entry: `src/main.ts`
- Preload entry: `src/preload.ts` (bridge-only; keep renderer isolated)
- Renderer entry: `src/renderer.ts` / `src/App.tsx`

### IPC (oRPC)
- Main-side routing/handlers live under `src/ipc/`
- Renderer-side “actions” wrappers live under `src/actions/`
- Prefer typed schemas (`zod`) for IPC inputs/outputs; avoid ad-hoc `ipcRenderer` calls.
- If you need to change IPC surface area, keep it minimal and update both sides in the same patch.

## Conventions (Repo-Specific)

- `@/` resolves to `src/` (see `tsconfig.json`).
- No barrel files (`index.ts` re-exports) unless there is a strong, explicit reason (Biome enforces this).
- Keep files focused and small; split when scope grows.
- `src/routes/` is file-based routing; don’t hand-edit `src/routeTree.gen.ts` (generated).

### File Structure Guidelines
- Keep files under 300 lines; split when exceeding scope.
- Limit to 3 concerns per file; extract helpers for clarity.
- Extract shared logic after 2+ uses.

## Agent Workflow

- Resolve any linting or type errors that exist.
- Before adding new utilities/components, search for existing ones under `src/` and extend where appropriate.
- After code changes:
  - `bun run fix` to auto-fix and verify
  - Before PRs: `bun run verify`
  - Before releases (or installer changes): `bun run verify-full`

<!-- AUTO-GENERATED TREE START -->

```
actions/ # 5 files
  ├─ app.ts # 2 exports
  ├─ language.ts # 2 exports
  ├─ shell.ts # 1 export
  ├─ theme.ts # 5 exports
  └─ window.ts # 3 exports
components/ # 5 files, 1 directories
  ├─ ui/ # 4 files
  │ ├─ button.tsx # 2 exports
  │ ├─ navigation-menu.tsx # 9 exports
  │ ├─ toggle-group.tsx # 2 exports
  │ └─ toggle.tsx # 2 exports
  ├─ drag-window-region.tsx # 1 export
  ├─ external-link.tsx # 1 export
  ├─ lang-toggle.tsx # 1 export
  ├─ navigation-menu.tsx # 1 export
  └─ toggle-theme.tsx # 1 export
constants/ # 1 file
  └─ index.ts # 2 exports
ipc/ # 4 files, 4 directories
  ├─ app/ # 2 files
  │ ├─ handlers.ts # 2 exports
  │ └─ index.ts # 1 export
  ├─ shell/ # 3 files
  │ ├─ handlers.ts # 1 export
  │ ├─ index.ts # 1 export
  │ └─ schemas.ts # 1 export
  ├─ theme/ # 3 files
  │ ├─ handlers.ts # 3 exports
  │ ├─ index.ts # 1 export
  │ └─ schemas.ts # 1 export
  ├─ window/ # 2 files
  │ ├─ hadlers.ts # 3 exports
  │ └─ index.ts # 1 export
  ├─ context.ts # 1 export
  ├─ handler.ts # 1 export
  ├─ manager.ts # 1 export
  └─ router.ts # 1 export
layouts/ # 1 file
  └─ base-layout.tsx # 1 export
localization/ # 3 files
  ├─ i18n.ts # Module exports
  ├─ langs.ts # 1 export
  └─ language.ts # 1 export
routes/ # 2 files
  ├─ __root.tsx # 1 export
  ├─ index.tsx # 1 export
  └─ second.tsx # 1 export
tests/ # 1 directory
  └─ unit/ # 1 file
    └─ setup.ts # Module exports
types/ # 1 file
  └─ theme-mode.ts # 1 export
utils/ # 2 files
  ├─ routes.ts # 1 export
  └─ tailwind.ts # 1 export
App.tsx # 1 export
main.ts # Module exports
preload.ts # Module exports
renderer.ts # Module exports
routeTree.gen.ts # 6 exports
```

<!-- AUTO-GENERATED TREE END -->
