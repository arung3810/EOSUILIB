# Project Structure

## Repository Layout
This is a monorepo containing both a demo application and the component library:

```
├── src/                          # Demo application
│   ├── app/                      # Main app module
│   ├── assets/                   # Static assets (icons, images)
│   └── styles.css               # Global styles
├── projects/eos-ui-comp/        # Component library
│   ├── src/lib/                 # Library source code
│   └── src/public-api.ts        # Library exports
└── dist/                        # Build outputs
```

## Component Library Structure (`projects/eos-ui-comp/`)

### Library Organization
- **Package name**: `eos-comp` (published name)
- **Selector prefix**: `lib-` for all components
- **File naming**: Mixed conventions (see patterns below)

### Component Patterns

#### File Naming Conventions
Two patterns are used in the codebase:

1. **Angular CLI Standard** (button component):
   - `button.component.ts`
   - `button.component.html` 
   - `button.component.css`
   - `button.component.spec.ts`

2. **Simplified Pattern** (other components):
   - `modal.ts`
   - `modal.html`
   - `modal.css`
   - `modal.spec.ts`

#### Component Architecture
- All components are **standalone** (no NgModule dependencies)
- Use `CommonModule` for common directives
- Export types and interfaces alongside components
- Implement proper TypeScript typing for props

### Component Categories

#### Form & Input Components
- `button/` - Button with variants, sizes, dropdown support
- `search/` - Search input component
- `login/` - Login form component

#### Layout & Navigation
- `header-component/` - Header/navigation component
- `tabpane/` - Tab navigation component
- `card/` - Card container component

#### Data Display
- `table/` - Data table component
- `tooltip/` - Tooltip overlay component

#### Overlays & Modals
- `modal/` - Modal dialog component

#### In Development
- `loader-component/` - Loading spinner (empty folder)

### Public API (`public-api.ts`)
All components must be exported through the public API file to be available for consumption.

## Asset Organization

### Demo App Assets (`src/assets/`)
- `icon/` - General icons
- `loginimg/` - Login-specific imagery
- Root level: Utility icons (calculate.svg, close.svg, etc.)

## Configuration Files
- `angular.json` - Workspace and project configuration
- `tsconfig.*.json` - TypeScript configurations for different targets
- `ng-package.json` - Library packaging configuration
- `.editorconfig` - Editor consistency settings

## Development Workflow
1. Components developed in `projects/eos-ui-comp/src/lib/`
2. Demo/testing in main `src/` application
3. Library built to `dist/eos-ui-comp/` for distribution
4. Each component should have corresponding test file