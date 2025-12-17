# fix-grammar

> 🔀 **Fork of [electron-shadcn](https://github.com/LuanRoger/electron-shadcn)** — Refactored and enhanced with AI-ready commands for Claude and other AI tools by [Yuriy Babyak](https://littlebit.dev)

A modern Electron template with everything you need to build beautiful, production-ready desktop applications.

![Demo](https://github.com/Yuriy-Babyak/fix-grammar/blob/main/images/demo.png)

## ✨ AI-Ready Development

This template is optimized for AI-assisted development with **unified AI instructions** that work across multiple AI coding assistants:

| File | Purpose |
|------|---------|
| [`AI.md`](AI.md) | Main AI guidance file with architecture overview, conventions, and workflow |
| [`AGENTS.md`](AGENTS.md) | Symlink to `AI.md` — for Cursor, Codex, Gemini, and other AI tools |
| [`CLAUDE.md`](CLAUDE.md) | Symlink to `AI.md` — for Claude and Anthropic-based assistants |

> **Unified Instructions:** All AI guidance files point to the same source (`AI.md`), ensuring consistent behavior across Claude, Cursor, Windsurf, and other AI coding assistants. Update once, apply everywhere.

### AI Workflow Commands

```bash
bun run fix          # Auto-fix + re-check (Biome) — run after changes
bun run verify       # fix + unit tests — run before PRs
bun run verify-full  # fix + unit tests + build + docs — run before releases
```

## 🛠️ Tech Stack

### Core
- [Electron 39](https://www.electronjs.org) (Forge + Vite)
- [React 19](https://reactjs.org) + TypeScript (strict mode)
- [TanStack Router](https://tanstack.com/router) (file-based routing)

### UI
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide](https://lucide.dev) icons
- [Geist](https://vercel.com/font) as default font
- [i18next](https://www.i18next.com) for internationalization

### IPC & Validation
- [oRPC](https://orpc.unnoq.com) — Type-safe IPC communication
- [Zod](https://zod.dev) — Runtime schema validation

### Developer Experience
- [Biome](https://biomejs.dev) — Fast linter and formatter (replaces ESLint + Prettier)
- [Bun](https://bun.sh) — Package manager

### Testing
- [Vitest](https://vitest.dev) — Unit testing
- [Playwright](https://playwright.dev) — E2E testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

### Packaging & Distribution
- [Electron Forge](https://www.electronforge.io)

## 📁 Project Structure

DDD-aligned architecture with clear process boundaries:

```
src/
├── main/           # Main process code
├── preload/        # Preload scripts (context bridge)
├── renderer/       # React UI code
│   ├── components/ # Reusable UI components
│   ├── features/   # Feature-specific modules
│   ├── layouts/    # Layout components
│   └── lib/        # Utilities and configuration
├── ipc/            # IPC handlers (main-side)
├── actions/        # IPC wrappers (renderer-side)
├── shared/         # Cross-process types/constants
├── routes/         # File-based routing (TanStack)
└── styles/         # Global CSS styles
```

See [`docs/FILE-STRUCTURE.md`](docs/FILE-STRUCTURE.md) for detailed documentation.

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+

### Installation

1. Clone this repository

```bash
git clone https://github.com/Yuriy-Babyak/fix-grammar.git
cd fix-grammar
```

Or use it as a template on GitHub.

2. Install dependencies

```bash
bun install
```

3. Run the app

```bash
bun run dev
```

Now you can go directly to [`src/routes/index.tsx`](src/routes/index.tsx) and modify the app as you want.

## 📋 Commands

| Command | Purpose |
|---------|---------|
| `bun run dev` | Run the app (Electron Forge) |
| `bun run fix` | Auto-fix + re-check (Biome) |
| `bun run verify` | fix + unit tests |
| `bun run verify-full` | fix + unit tests + build + docs |
| `bun run test` | Unit tests (Vitest) |
| `bun run test:e2e` | E2E tests (Playwright) |
| `bun run build` | Build installers |
| `bun run docs` | Regenerate structure docs |

## 🎯 Project Preferences

- **Context isolation** enabled (security best practice)
- **React Compiler** enabled by default
- **Custom title bar** (`titleBarStyle: hidden`)
- **Geist** as default font
- Pre-configured styles in [`src/styles`](src/styles)

## 🔄 Auto Update

> [!WARNING]
> This feature only works in open-source repositories on GitHub. For private repositories, you need to set up a custom update server. Check the [Updating Applications](https://www.electronjs.org/docs/latest/tutorial/updates) section in the Electron documentation for more details.

The auto update uses GitHub Releases as the source for updates. The `publish` script will automatically create a new release with the version specified in your `package.json` file. You can run the `publish` script locally to create a new release, but you need to set the `GITHUB_TOKEN` environment variable with a GitHub Personal Access Token that has permission to create releases in your repository.

You can also use the GitHub Actions workflow to automatically create a new release when you push a new tag to the repository. The workflow needs to be triggered manually, but you can modify it to fit your needs. The release is created as a draft by default, so you can review and set a proper description before publishing.

> Check the [`.github/workflows/publish.yml`](.github/workflows/publish.yaml) file for more details.

When you open the app, it will check for updates automatically. If an update is available, it will download and install the update, then restart the app to apply it. This ensures that your users always have the latest version of your app.

The auto update is implemented using [update-electron-app](https://github.com/electron/update-electron-app) to check for and apply updates. For publishing, it uses [Electron Forge's GitHub publisher](https://www.electronforge.io/config/publishers/github).

## 🚀 CI/CD

- Pre-configured [GitHub Actions workflow](.github/workflows/playwright.yml) for testing with Playwright

## 📚 Documentation

Check out the full documentation [here](https://docs.yuribabyak.dev/fix-grammar).

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
