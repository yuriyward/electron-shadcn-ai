# Project File Structure

*Generated automatically from TypeScript source code*

## Tree Overview

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

## File Details

### App.tsx
**Purpose**: 1 export

**Exports**:
- `export default` - item implementation

### actions/app.ts
**Purpose**: 2 exports

**Exports**:
- `export getAppVersion` - item implementation
- `export getPlatform` - item implementation

### actions/language.ts
**Purpose**: 2 exports

**Exports**:
- `export setAppLanguage` - item implementation
- `export updateAppLanguage` - item implementation

### actions/shell.ts
**Purpose**: 1 export

**Exports**:
- `export openExternalLink` - item implementation

### actions/theme.ts
**Purpose**: 5 exports

**Exports**:
- `export ThemePreferences` - item implementation
- `export getCurrentTheme` - item implementation
- `export setTheme` - item implementation
- `export syncWithLocalTheme` - item implementation
- `export toggleTheme` - item implementation

### actions/window.ts
**Purpose**: 3 exports

**Exports**:
- `export closeWindow` - item implementation
- `export maximizeWindow` - item implementation
- `export minimizeWindow` - item implementation

### components/drag-window-region.tsx
**Purpose**: 1 export

**Exports**:
- `export default` - item implementation

### components/external-link.tsx
**Purpose**: 1 export

**Exports**:
- `export default` - item implementation

### components/lang-toggle.tsx
**Purpose**: 1 export

**Exports**:
- `export default` - item implementation

### components/navigation-menu.tsx
**Purpose**: 1 export

**Exports**:
- `export default` - item implementation

### components/toggle-theme.tsx
**Purpose**: 1 export

**Exports**:
- `export default` - item implementation

### components/ui/button.tsx
**Purpose**: 2 exports

**Exports**:
- `export buttonVariants` - item implementation
- `export Button` - item implementation

### components/ui/navigation-menu.tsx
**Purpose**: 9 exports

**Exports**:
- `export navigationMenuTriggerStyle` - item implementation
- `export NavigationMenu` - item implementation
- `export NavigationMenuContent` - item implementation
- `export NavigationMenuIndicator` - item implementation
- `export NavigationMenuItem` - item implementation
- `export NavigationMenuLink` - item implementation
- `export NavigationMenuList` - item implementation
- `export NavigationMenuTrigger` - item implementation
- `export NavigationMenuViewport` - item implementation

### components/ui/toggle-group.tsx
**Purpose**: 2 exports

**Exports**:
- `export ToggleGroup` - item implementation
- `export ToggleGroupItem` - item implementation

### components/ui/toggle.tsx
**Purpose**: 2 exports

**Exports**:
- `export toggleVariants` - item implementation
- `export Toggle` - item implementation

### constants/index.ts
**Purpose**: 2 exports

**Exports**:
- `export IPC_CHANNELS` - item implementation
- `export LOCAL_STORAGE_KEYS` - item implementation

### ipc/app/handlers.ts
**Purpose**: 2 exports

**Exports**:
- `export appVersion` - item implementation
- `export currentPlatfom` - item implementation

### ipc/app/index.ts
**Purpose**: 1 export

**Exports**:
- `export app` - item implementation

### ipc/context.ts
**Purpose**: 1 export

**Exports**:
- `export ipcContext` - item implementation

### ipc/handler.ts
**Purpose**: 1 export

**Exports**:
- `export rpcHandler` - item implementation

### ipc/manager.ts
**Purpose**: 1 export

**Exports**:
- `export ipc` - item implementation

### ipc/router.ts
**Purpose**: 1 export

**Exports**:
- `export router` - item implementation

### ipc/shell/handlers.ts
**Purpose**: 1 export

**Exports**:
- `export openExternalLink` - item implementation

### ipc/shell/index.ts
**Purpose**: 1 export

**Exports**:
- `export shell` - item implementation

### ipc/shell/schemas.ts
**Purpose**: 1 export

**Exports**:
- `export openExternalLinkInputSchema` - item implementation

### ipc/theme/handlers.ts
**Purpose**: 3 exports

**Exports**:
- `export getCurrentThemeMode` - item implementation
- `export setThemeMode` - item implementation
- `export toggleThemeMode` - item implementation

### ipc/theme/index.ts
**Purpose**: 1 export

**Exports**:
- `export theme` - item implementation

### ipc/theme/schemas.ts
**Purpose**: 1 export

**Exports**:
- `export setThemeModeInputSchema` - item implementation

### ipc/window/hadlers.ts
**Purpose**: 3 exports

**Exports**:
- `export closeWindow` - item implementation
- `export maximizeWindow` - item implementation
- `export minimizeWindow` - item implementation

### ipc/window/index.ts
**Purpose**: 1 export

**Exports**:
- `export window` - item implementation

### layouts/base-layout.tsx
**Purpose**: 1 export

**Exports**:
- `export default` - item implementation

### localization/i18n.ts
**Purpose**: Module exports

*No exports found*

### localization/langs.ts
**Purpose**: 1 export

**Exports**:
- `export default` - item implementation

### localization/language.ts
**Purpose**: 1 export

**Exports**:
- `export Language` - item implementation

### main.ts
**Purpose**: Module exports

*No exports found*

### preload.ts
**Purpose**: Module exports

*No exports found*

### renderer.ts
**Purpose**: Module exports

*No exports found*

### routeTree.gen.ts
**Purpose**: 6 exports

**Exports**:
- `export FileRoutesByFullPath` - item implementation
- `export FileRoutesById` - item implementation
- `export FileRoutesByTo` - item implementation
- `export FileRouteTypes` - item implementation
- `export RootRouteChildren` - item implementation
- `export routeTree` - item implementation

### routes/__root.tsx
**Purpose**: 1 export

**Exports**:
- `export Route` - item implementation

### routes/index.tsx
**Purpose**: 1 export

**Exports**:
- `export Route` - item implementation

### routes/second.tsx
**Purpose**: 1 export

**Exports**:
- `export Route` - item implementation

### tests/unit/setup.ts
**Purpose**: Module exports

*No exports found*

### types/theme-mode.ts
**Purpose**: 1 export

**Exports**:
- `export ThemeMode` - item implementation

### utils/routes.ts
**Purpose**: 1 export

**Exports**:
- `export router` - item implementation

### utils/tailwind.ts
**Purpose**: 1 export

**Exports**:
- `export cn` - item implementation

