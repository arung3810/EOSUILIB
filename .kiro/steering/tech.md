# Technology Stack

## Framework & Build System
- **Angular 20.3.x** - Latest Angular framework
- **Angular CLI** - Project scaffolding and build tooling
- **ng-packagr** - Library packaging and distribution
- **TypeScript 5.9.x** - Primary development language
- **Vite** - Development server and bundling (via Angular build system)

## Testing
- **Jasmine** - Testing framework
- **Karma** - Test runner
- **Angular Testing Utilities** - Component testing helpers

## Code Quality
- **Prettier** - Code formatting with specific Angular HTML parser
  - Print width: 100 characters
  - Single quotes preferred
- **EditorConfig** - Consistent editor settings

## Dependencies
- **RxJS 7.8.x** - Reactive programming
- **tslib** - TypeScript runtime helpers
- Peer dependencies on Angular core packages

## Common Commands

### Development
```bash
# Start development server
ng serve

# Build for development with watch mode
ng build --watch --configuration development

# Generate new component
ng generate component component-name
```

### Building
```bash
# Build application for production
ng build

# Build library for distribution
ng build eos-ui-comp

# Build library in development mode
ng build eos-ui-comp --configuration development
```

### Testing
```bash
# Run unit tests
ng test

# Run tests for library only
ng test eos-ui-comp
```

### Package Management
```bash
# Install dependencies
npm install

# Update Angular CLI
ng update @angular/cli @angular/core
```

## Build Configuration Notes
- Production builds are optimized with tree-shaking
- Bundle size limits: 500kB warning, 1MB error for initial bundle
- Component styles limited to 4kB warning, 8kB error
- Source maps enabled in development mode