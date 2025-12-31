<div align="center">

# eos-ui-comp

Reusable Angular UI widgets for EOS applications. Includes a multi-variant dashboard card with tooltip support.

[![Angular](https://img.shields.io/badge/angular-17+-DD0031?logo=angular&logoColor=white)](#)
[![NPM](https://img.shields.io/badge/npm-ready-green?logo=npm)](#installation)

</div>

## Installation

```bash
npm install eos-comp
```

If you are working inside the monorepo, run `npm install` at the workspace root and then:

```bash
ng build eos-comp
```

The compiled package lives under `dist/eos-comp/`.

## Usage

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardCard } from 'eos-ui-comp';

@NgModule({
  imports: [BrowserModule, DashboardCard],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```html
<lib-card
  [cardType]="'1view'"
  [title]="'Loan Snapshot'"
  [netWorth]="'$1.2M'"
  [vua]="'$120K'"
  [categoryList]="categories"
  (cardClick)="handleCardClick()"
></lib-card>
```

```ts
categories = [
  { key: 'Outstanding Loans', value: '$450K', toolTipText: 'Loan details auto-updated' },
  { key: 'Interest Rate', value: '6.75%', toolTipText: '' },
  { key: 'EMI', value: '$3.4K', toolTipText: 'EMI recalculated daily' },
];
```

### Component Reference: `DashboardCard`

| Input          | Type                                             | Default       | Description                                                                 |
|----------------|--------------------------------------------------|---------------|-----------------------------------------------------------------------------|
| `title`        | `string`                                         | —             | Primary heading displayed across variants.                                  |
| `value`        | `string \| number`                               | —             | Main metric/value for dashboard/workbook cards.                             |
| `value1`       | `string \| number`                               | —             | Secondary text for workbook cards.                                         |
| `svgIcon`      | `string` (raw SVG)                               | —             | Custom SVG markup rendered inside icons via `DomSanitizer`.                 |
| `cardType`     | `'dashboard' \| 'riaDashboard' \| 'personalDetail' \| '1view' \| other` | `'dashboard'` | Determines which block of the template is rendered.                          |
| `taskList`     | `string[]`                                       | `[]`          | Items displayed in the `personalDetail` variant.                            |
| `vua`          | `string`                                         | —             | Value used in the `1view` card’s VUA tile.                                  |
| `netWorth`     | `string`                                         | —             | Value used in the `1view` card’s Net Worth tile.                            |
| `categoryList` | `{ key: string; value: string; toolTipText: string }[]` | —     | Drives label/value rows and optional tooltips inside the `1view` variant.   |

| Output      | Type                | Trigger                                           |
|-------------|---------------------|---------------------------------------------------|
| `cardClick` | `EventEmitter<void>`| Fires when the wrapper `<button>` is clicked.      |


## Local Development

```bash
npm install
ng serve   # run demo app in /src/app
ng build eos-ui-comp --watch
```

## Publishing

1. Bump the version in `projects/eos-ui-comp/package.json`.
2. `ng build eos-ui-comp`
3. `cd dist/eos-comp`
4. `npm publish`

---

Need more components or docs? Open an issue or drop a PR!

