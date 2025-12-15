# AGENTS.md

This file provides guidance to AI agents working with this repository.

## Project Overview

This is a browser extension (WXT + React 19) that intelligently cleans up messy file names. It helps users automatically rename files to descriptive, human-readable names at save time or on demand, while detecting which files actually need renaming.

### Core Capabilities
- Smart file name analysis and pattern detection
- Suggested file names with context-aware templates
- Auto-rename flows with undo/preview support
- Post-download file renaming via File System Access API
- Post-download file analysis via MediaInfo.js WASM
- Post-download file analysis via built-in AI
- Scoped rules per folder and project
- Activity history and quick revert

### Rename Pipeline (Two-Phase)
- Phase 1: Instant Baseline - Synchronous, deterministic strategies
- Phase 2: Contextual Upgrade - Asynchronous, AI-enhanced

## Development Commands

- `bun run dev` — Start dev server
- `bun run build` — Build for production
- `bun run zip` — Package the extension
- `bun run fix` — One-shot auto-fix and verify
- `bun run verify` — Lint, type-check, and build
- `bun run test` — Run unit tests (Vitest)
- `bun run test:watch` — Watch mode for tests
- `bun run coverage` — Generate coverage report

## Architecture

Built with WXT framework and React 19, using Tailwind CSS v4. Entry points live under `entrypoints/`. Global styles are in `assets/tailwind.css`.

### Key Structure
- `background.ts` — Service worker, rules, and file-system messaging
- `content.ts` — Content script for page integrations (optional)
- `popup/` — UI for suggestions, previews, and actions

### Tech Stack
- WXT (`defineBackground`, `defineContentScript`)
- React 19
- TypeScript (strict)
- Tailwind v4
- Biome for lint/format

### Conventions
- `@/` alias to workspace root
- Descriptive names; no barrel files
- Keep files focused, <300 lines when practical

## Code Quality Workflow

- `bun run fix` to auto-fix and verify
- `bun run verify` before PRs
- Resolve any linting or type errors that exist.

### Development Workflow Guidelines

- After each change, choose the lightest effective check:
  - Small fixes (docs, style-only, non-behavioral refactors, test-only): run `bun run fix`.
  - New behavior, new files/entrypoints, storage/background/manifest changes, or new dependencies: run `bun run verify`.
  - For behavior changes, also run tests: `bun run test` (or `bun run coverage`).
- If `verify` fails due to formatting/lints, run `bun run fix` then re-run `bun run verify`.
- Prefer `fix` before commit and `verify` before push.

## Testing

- Test file naming: `**/*.test.ts(x)`
- Commands: `bun run test`, `bun run test:watch`, `bun run coverage`.
- WXT APIs are auto-polyfilled in tests; reset state with `fakeBrowser.reset()` in `beforeEach` when using storage or browser APIs.
- When mocking `#imports`, mock the underlying real path (e.g., `wxt/utils/inject-script`).

### Code Organization (Domain-Driven Design)

- Group code by domain, not by layer or type. Examples for this project:
  - `entrypoints/shared/renaming/` — core renaming logic (parsing, scoring, rules, preview)
  - `entrypoints/shared/rules/` — rule storage, validation, presets
  - `entrypoints/shared/integrations/` — OS/browser integrations and file pickers
  - `entrypoints/shared/ui/` — UI-specific utilities and hooks
- Avoid `index.ts` barrel files. Import from concrete files with clear boundaries.
- Keep each file focused on a single responsibility.
- Prefer direct imports across domains; do not create circular dependencies.

### Reuse-First Development

Always search before building new functionality:
- Scan `entrypoints/shared/` for existing utilities (validation, parsing, async, dates/formatters).
- Extend existing helpers when possible; avoid duplication.
- If adding a new utility that could be reused, place it under the appropriate domain directory.

#### File Structure Guidelines

- Keep files under 300 lines; split when exceeding scope.
- Limit to 3 concerns per file; extract helpers for clarity.
- Extract shared logic after 2+ uses.

### Storage Strategy

- **IndexedDB** (`idb-keyval`) - File System Access handles, large blobs
- **WXT Storage** (`storage` from WXT) - Settings, preferences, history

## Static references

- `WebExt-Core.md` - @webext-core patterns (messaging, storage, proxy services)
- `ai-chrome-*.md` - Chrome Built-in AI APIs (Prompt, Summarizer, Language Detection)
- `mediainfo-research.md` - MediaInfo.js integration patterns
- `chrome-service-worker-long-running-tasks.md` - Alarms API for persistent operations

## AI-Generated Documentation Hub

The `docs/` directory hosts auto-generated structure docs.
- `docs/FILE-STRUCTURE.md` - auto-generated from code via TypeDoc
- Script: `bun run docs` (or `node scripts/generate-structure-docs.mjs`)

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
