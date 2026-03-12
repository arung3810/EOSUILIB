# EOS UI Component Library - Handbook

## Table of Contents
1. [Introduction](#introduction)
2. [Aim](#aim)
3. [Installation](#installation)
4. [Getting Started](#getting-started)
5. [Components](#components)
   - [Table Component](#table-component)
   - [Button Component](#button-component)
   - [Modal Component](#modal-component)
   - [Card Component](#card-component)
   - [Search Component](#search-component)
   - [Header Component](#header-component)
   - [Accordion Component](#accordion-component)
   - [Form Control Components](#form-control-components)
     - [Text Input Component](#text-input-component)
     - [Textarea Component](#textarea-component)
     - [Select Component](#select-component)
     - [Toggle Component](#toggle-component)
     - [Radio Group Component](#radio-group-component)
     - [Checkbox Group Component](#checkbox-group-component)
     - [Input With Icon Component](#input-with-icon-component)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)
8. [Version Information](#version-information)

---

## Introduction

The **EOS UI Component Library** (`eos-comp`) is a comprehensive Angular component library designed to accelerate development with pre-built, customizable, and production-ready UI components. Built with Angular 20.3.0+, this library provides a rich set of components for modern web applications.

---

## Aim

The EOS UI Component Library aims to:

- **Accelerate Development**: Provide ready-to-use components that reduce development time
- **Ensure Consistency**: Maintain a unified design language across applications
- **Enhance Productivity**: Offer flexible, configurable components that adapt to various use cases
- **Simplify Integration**: Standalone components with minimal setup requirements
- **Support Complex UIs**: Enable sophisticated features like multi-level headers, AG-Grid integration, and dynamic templates
- **Maintain Quality**: Production-tested components with TypeScript support

---

## Installation

### Prerequisites

Before installing, ensure your project has the following peer dependencies:

```json
{
  "@angular/common": "^20.3.0",
  "@angular/core": "^20.3.0",
  "@splidejs/splide": "^4.1.4",
  "ng-apexcharts": "^1.8.0",
  "ag-grid-angular": "^31.0.3"
}
```

### Install the Library

```bash
npm install eos-comp
```

### Install Peer Dependencies (if not already installed)

```bash
npm install @angular/common@^20.3.0 @angular/core@^20.3.0
npm install @splidejs/splide@^4.1.4
npm install ng-apexcharts@^1.8.0
npm install ag-grid-angular@^31.0.3
```

---

## Getting Started

### Basic Setup

Since all components are **standalone**, you can import them directly into your component without adding them to a module.

#### Example: Using the Button Component

**app.component.ts**
```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from 'eos-comp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <lib-button
      variant="primary"
      size="medium"
      (clicked)="handleClick($event)">
      Click Me
    </lib-button>
  `
})
export class AppComponent {
  handleClick(event: MouseEvent) {
    console.log('Button clicked!', event);
  }
}
```

---

## Components

### Table Component

The Table component is a powerful, feature-rich data table with support for multiple table types, pagination, sorting, multi-level headers, and AG-Grid integration.

#### Import

```typescript
import { TableComponent } from 'eos-comp';
```

#### Basic Usage

```typescript
import { Component } from '@angular/core';
import { TableComponent, TableColumn } from 'eos-comp';

@Component({
  selector: 'app-my-table',
  standalone: true,
  imports: [TableComponent],
  template: `
    <lib-table
      [tableType]="'dynamic'"
      [columns]="columns"
      [rows]="data"
      [total]="totalRows"
      [page]="currentPage"
      [pageSize]="10"
      (pageChange)="onPageChange($event)"
      (sortChange)="onSortChange($event)">
    </lib-table>
  `
})
export class MyTableComponent {
  columns: TableColumn[] = [
    { label: 'Name', field: 'name', sortable: true },
    { label: 'Email', field: 'email', sortable: true },
    { label: 'Role', field: 'role' }
  ];

  data = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
  ];

  totalRows = 100;
  currentPage = 1;

  onPageChange(page: number) {
    this.currentPage = page;
    // Fetch new data
  }

  onSortChange(event: { field: string; direction: 'asc' | 'desc' | null }) {
    console.log('Sort changed:', event);
  }
}
```

#### Visual Representation

```
┌─────────────────────────────────────────────────────────────────┐
│                         Data Table                              │
├─────────────────────────────────────────────────────────────────┤
│  Name ↑         │  Email ↓           │  Role                    │
├─────────────────────────────────────────────────────────────────┤
│  John Doe       │  john@example.com  │  Admin                   │
│  Jane Smith     │  jane@example.com  │  User                    │
│  Bob Wilson     │  bob@example.com   │  Editor                  │
│  Alice Brown    │  alice@example.com │  User                    │
│  Charlie Davis  │  charlie@email.com │  Manager                 │
├─────────────────────────────────────────────────────────────────┤
│  Showing 1-5 of 100                [◄] [1] [2] [3] [►]         │
└─────────────────────────────────────────────────────────────────┘

Features:
• Sortable columns (indicated by ↑/↓ arrows)
• Pagination controls at bottom
• Clean, structured data display
• Responsive column layout
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tableType` | `'dynamic' \| 'static' \| 'financial-scoring' \| 'tax-comparison' \| 'agTable'` | `'dynamic'` | Type of table to render |
| `columns` | `TableColumn[]` | `[]` | Column configuration array |
| `rows` | `any[]` | `[]` | Data rows array |
| `agGridColDefs` | `ColDef[]` | - | AG-Grid column definitions (for agTable type) |
| `agGridOptions` | `GridOptions` | - | AG-Grid options (for agTable type) |
| `tableHeight` | `string` | - | Height for scrollable table (e.g., '500px') |
| `columnAlignments` | `{ [field: string]: 'left' \| 'center' \| 'right' }` | - | Field-level alignment |
| `total` | `number` | `0` | Total number of rows for pagination |
| `page` | `number` | `1` | Current page number |
| `pageSize` | `number` | `5` | Rows per page |
| `showFooter` | `boolean` | `false` | Enable footer row |
| `footerLabel` | `string` | `'Avg Score'` | Label for first column in footer |
| `footerCalculation` | `'avg' \| 'sum' \| 'custom'` | `'avg'` | Type of calculation for footer |
| `footerValues` | `any` | - | Custom footer values object |
| `showHeaderBorder` | `boolean` | `true` | Show/hide header borders |
| `tableTitle` | `string` | `''` | Title above the table |
| `headerRightTemplate` | `TemplateRef<any>` | - | Template for header right component |

#### Events

| Event | Type | Description |
|-------|------|-------------|
| `pageChange` | `EventEmitter<number>` | Emitted when page changes |
| `sortChange` | `EventEmitter<{ field: string; direction: SortDirection }>` | Emitted when sort changes |

#### TableColumn Interface

```typescript
interface TableColumn {
  label: string;              // Column header text
  field: string;              // Data field key
  icons?: string[];           // Icon array (e.g., ['filter', 'tune'])
  tuneOptions?: any[];        // Options for tune functionality
  cellType?: 'text' | 'dropdown' | 'tooltip' | 'custom';
  dropdownOptions?: boolean | string[] | ((row: any) => string[]);
  valueMapper?: (value: any, row: any) => any;
  sortable?: boolean;         // Enable sorting
  tooltipField?: string;      // Field for tooltip text
  showTooltipField?: string;  // Field to check if tooltip should show
  customTemplate?: TemplateRef<any> | ((row: any) => string);
  colspan?: number;           // Number of columns header spans
  subHeaders?: TableColumn[]; // Sub-headers for multi-level
  rowspan?: number;           // Number of rows header spans
  align?: 'left' | 'center' | 'right'; // Text alignment
}
```

#### Advanced Examples

**Multi-Level Headers:**

```typescript
columns: TableColumn[] = [
  {
    label: 'Liability Type',
    field: 'liabilityType',
    rowspan: 2
  },
  {
    label: 'Current Liability Distribution',
    field: '',
    subHeaders: [
      { label: 'Outstanding', field: 'outstanding' },
      { label: 'EMI', field: 'emi' }
    ]
  }
];
```

**Visual:**

```
Multi-Level Header Table:
┌─────────────────┬─────────────────────────────────────────┐
│                 │  Current Liability Distribution         │
│ Liability Type  ├──────────────────┬──────────────────────┤
│                 │  Outstanding     │      EMI             │
├─────────────────┼──────────────────┼──────────────────────┤
│ Home Loan       │  ₹ 25,00,000     │  ₹ 30,000           │
│ Car Loan        │  ₹ 8,50,000      │  ₹ 18,500           │
│ Personal Loan   │  ₹ 2,00,000      │  ₹ 8,000            │
└─────────────────┴──────────────────┴──────────────────────┘

Features:
• Colspan for parent headers
• Rowspan for spanning multiple levels
• Clean hierarchy visualization
• Supports unlimited nesting levels
```

**AG-Grid Table:**

```typescript
<lib-table
  [tableType]="'agTable'"
  [rows]="rowData"
  [agGridColDefs]="colDefs"
  [agGridOptions]="gridOptions"
  [tableHeight]="'500px'"
  [columnAlignments]="{ 'amount': 'right', 'name': 'left' }">
</lib-table>
```

**Visual:**

```
AG-Grid Table (Advanced Features):
┌────────────────────────────────────────────────────────────────┐
│  Scheme Portfolio                                              │
├────────────────────────────────────────────────────────────────┤
│  🔍 Search...                            [⚙️] [Filter] [Export]│
├──────────┬──────────────┬──────────┬──────────┬──────────────┤
│ Fund     │ Category     │ Expense  │ Value    │ Performance  │
│ Name     │              │ Ratio    │          │ Score        │
├──────────┼──────────────┼──────────┼──────────┼──────────────┤
│ Fund A   │ Large Cap    │ 1.2%     │  $50,000 │ ████ 85%     │
│ Fund B   │ Mid Cap      │ 1.5%     │  $35,000 │ ███  75%     │
│ Fund C   │ Small Cap    │ 1.8%     │  $25,000 │ ███  70%     │
│ Fund D   │ Debt         │ 0.8%     │  $40,000 │ ████ 80%     │
│ ↓↓↓↓↓↓↓↓ [Scrollable] ↓↓↓↓↓↓↓↓                              │
│ Fund E   │ Hybrid       │ 1.3%     │  $30,000 │ ███  78%     │
├──────────┴──────────────┴──────────┴──────────┴──────────────┤
│  Height: 500px (Scrollable)           Showing 5 of 50 records │
└────────────────────────────────────────────────────────────────┘

Features:
• Full AG-Grid power (sorting, filtering, grouping)
• Custom cell renderers (badges, icons, progress bars)
• Scrollable body with fixed height
• Column alignment control
• Responsive column sizing
• Excel-like editing capabilities
• Advanced data operations
```

**Custom Footer Values:**

```typescript
footerValues = {
  totalAmount: '₹ 1,27,87,666',
  score: '61.67',
  name: '',  // Won't be displayed
};
```

**Visual:**

```
Table with Custom Footer:
┌────────────────────────────────────────────────────────────┐
│  Product      │  Category      │  Amount        │  Score   │
├────────────────────────────────────────────────────────────┤
│  Product A    │  Electronics   │  ₹ 25,00,000  │  85.5    │
│  Product B    │  Furniture     │  ₹ 45,00,000  │  72.3    │
│  Product C    │  Appliances    │  ₹ 57,87,666  │  90.2    │
├────────────────────────────────────────────────────────────┤
│  Total        │                │ ₹1,27,87,666  │  61.67   │
└────────────────────────────────────────────────────────────┘
             (Custom footer values - only shows where specified)

Features:
• Selective footer display (only shows specified columns)
• Custom calculations (avg, sum, or custom)
• Formatted values (currency, percentages)
• Empty columns automatically hidden in footer
```

---

### Button Component

A versatile button component with multiple variants, sizes, loading states, and dropdown support.

#### Import

```typescript
import { ButtonComponent } from 'eos-comp';
```

#### Basic Usage

```typescript
<lib-button
  variant="primary"
  size="medium"
  (clicked)="handleClick($event)">
  Submit
</lib-button>
```

#### Visual Representation

```
Button Variants:
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Primary   │  │  Secondary  │  │   Outline   │  │    Ghost    │  │   Danger    │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
  (Solid Blue)    (Solid Gray)    (Border Only)    (Transparent)   (Solid Red)

Button Sizes:
┌───────┐       ┌──────────┐       ┌─────────────┐
│ Small │       │  Medium  │       │    Large    │
└───────┘       └──────────┘       └─────────────┘

Button States:
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Normal    │  │  ⟳ Loading  │  │ [Disabled]  │
└─────────────┘  └─────────────┘  └─────────────┘

With Icons:
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ 🔍 Search   │  │  Save 💾    │  │ ⚙️ Settings │
└─────────────┘  └─────────────┘  └─────────────┘

Dropdown Button:
┌─────────────┐
│  Actions ▼  │
└─────────────┘
      ↓
┌─────────────┐
│ Edit        │
│ Delete      │
│ Archive     │
└─────────────┘
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `disabled` | `boolean` | `false` | Disable button |
| `loading` | `boolean` | `false` | Show loading state |
| `fullWidth` | `boolean` | `false` | Full width button |
| `dropdown` | `boolean` | `false` | Enable dropdown mode |
| `openOnHover` | `boolean` | `false` | Open dropdown on hover |
| `openOnClick` | `boolean` | `false` | Open dropdown on click |
| `prefixIcon` | `string` | `''` | Icon before text |
| `suffixIcon` | `string` | `''` | Icon after text |
| `dropdownList` | `DropdownItem[]` | `[]` | Dropdown items array |

#### Events

| Event | Type | Description |
|-------|------|-------------|
| `clicked` | `EventEmitter<MouseEvent>` | Emitted when button is clicked |
| `dropdownClicked` | `EventEmitter<MouseEvent>` | Emitted when dropdown item is clicked |

#### Examples

**Loading State:**

```typescript
<lib-button
  variant="primary"
  [loading]="isLoading"
  [disabled]="isLoading"
  (clicked)="submit()">
  Save Changes
</lib-button>
```

**Dropdown Button:**

```typescript
<lib-button
  variant="outline"
  [dropdown]="true"
  [openOnClick]="true"
  [dropdownList]="menuItems"
  (dropdownClicked)="handleDropdownClick($event)">
  Actions
</lib-button>
```

```typescript
menuItems: DropdownItem[] = [
  { label: 'Edit' },
  { label: 'Delete' },
  { label: 'Archive' }
];
```

**With Icons:**

```typescript
<lib-button
  variant="secondary"
  prefixIcon="🔍"
  (clicked)="search()">
  Search
</lib-button>
```

---

### Modal Component

A flexible modal dialog component with multiple sizes, positions, and customizable content.

#### Import

```typescript
import { ModalComponent } from 'eos-comp';
```

#### Basic Usage

```typescript
import { Component } from '@angular/core';
import { ModalComponent } from 'eos-comp';

@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [ModalComponent],
  template: `
    <lib-modal
      [open]="isModalOpen"
      [heading]="'Confirmation'"
      [message]="'Are you sure you want to proceed?'"
      [button1]="'Cancel'"
      [button2]="'Confirm'"
      (click1)="onCancel()"
      (click2)="onConfirm()"
      (openChange)="isModalOpen = $event">
    </lib-modal>

    <button (click)="isModalOpen = true">Open Modal</button>
  `
})
export class MyModalComponent {
  isModalOpen = false;

  onCancel() {
    this.isModalOpen = false;
  }

  onConfirm() {
    console.log('Confirmed!');
    this.isModalOpen = false;
  }
}
```

#### Visual Representation

```
Center Modal (Default):
                    ┌──────────────────────────────────┐
                    │ ✕                    Confirmation│
                    ├──────────────────────────────────┤
                    │                                  │
                    │  Are you sure you want to        │
                    │  proceed?                        │
                    │                                  │
                    ├──────────────────────────────────┤
                    │          [Cancel]  [Confirm]     │
                    └──────────────────────────────────┘

Modal Sizes:
Small (sm)          Medium (md)              Large (lg)                  Extra Large (xl)
┌──────────┐        ┌─────────────────┐      ┌─────────────────────────┐  ┌──────────────────────────────┐
│          │        │                 │      │                         │  │                              │
│  Content │        │    Content      │      │        Content          │  │           Content            │
│          │        │                 │      │                         │  │                              │
└──────────┘        └─────────────────┘      └─────────────────────────┘  └──────────────────────────────┘

Side Modal Positions:
Left Position:                                   Right Position:
┌──────────────┐                                              ┌──────────────┐
│              │                                              │              │
│  Settings    │                                              │  Settings    │
│              │                                              │              │
│  [Content]   │                                              │  [Content]   │
│              │                                              │              │
│              │                                              │              │
└──────────────┘                                              └──────────────┘
(Slides from left)                                            (Slides from right)

Modal with Custom Content:
┌─────────────────────────────────────┐
│ ✕                     User Details  │
├─────────────────────────────────────┤
│                                     │
│  Name:  John Doe                    │
│  Email: john@example.com            │
│  Role:  Administrator               │
│                                     │
│  [Your custom form/content here]    │
│                                     │
└─────────────────────────────────────┘

Features:
• Backdrop overlay with click-to-close
• ESC key to close
• Multiple size options (sm, md, lg, xl)
• Positioning (left, right, center)
• Smooth animations
• Accessibility support
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | `boolean` | `false` | Control modal visibility |
| `heading` | `string` | - | Modal heading text |
| `title` | `string` | - | Modal title (alternative to heading) |
| `message` | `string` | - | Modal message content |
| `button1` | `string` | - | First button text |
| `button2` | `string` | - | Second button text |
| `closeOnBackdrop` | `boolean` | `true` | Close when clicking backdrop |
| `closeOnEscape` | `boolean` | `true` | Close when pressing Escape key |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Modal size |
| `position` | `'left' \| 'right' \| 'center'` | `'center'` | Modal position |
| `hideCloseButton` | `boolean` | `false` | Hide the close button |
| `showHeader` | `boolean` | `true` | Show modal header |
| `showFooter` | `boolean` | `false` | Show modal footer |
| `ariaDescribedBy` | `string` | - | ARIA described by attribute |

#### Events

| Event | Type | Description |
|-------|------|-------------|
| `click1` | `EventEmitter<MouseEvent>` | Emitted when button1 is clicked |
| `click2` | `EventEmitter<MouseEvent>` | Emitted when button2 is clicked |
| `openChange` | `EventEmitter<boolean>` | Emitted when open state changes |
| `closed` | `EventEmitter<void>` | Emitted when modal is closed |

#### Advanced Examples

**Side Modal:**

```typescript
<lib-modal
  [open]="isOpen"
  [position]="'right'"
  [size]="'lg'"
  [heading]="'Settings'"
  (openChange)="isOpen = $event">
  <ng-container>
    <!-- Your custom content here -->
  </ng-container>
</lib-modal>
```

**Custom Content:**

```typescript
<lib-modal
  [open]="isOpen"
  [showHeader]="true"
  [showFooter]="false"
  [heading]="'User Details'">
  <div class="custom-content">
    <p>Name: John Doe</p>
    <p>Email: john@example.com</p>
  </div>
</lib-modal>
```

---

### Card Component

A highly versatile card component supporting multiple card types including dashboard cards, carousel cards, pie chart cards, and more.

#### Import

```typescript
import { DashboardCard } from 'eos-comp';
```

#### Basic Usage

```typescript
<lib-card
  [cardType]="'dashboard'"
  [title]="'Total Users'"
  [value]="'1,234'"
  [svgIcon]="userIcon"
  (cardClick)="handleCardClick()">
</lib-card>
```

#### Visual Representation

```
Dashboard Card:
┌─────────────────────────────┐
│  👤                          │
│                              │
│  Total Users                 │
│  1,234                       │
│  ↑ +12% from last month      │
└─────────────────────────────┘

Pie Chart Card:
┌─────────────────────────────┐
│  Portfolio Allocation        │
│                              │
│         ●●●●●                │
│       ●       ●              │
│      ●    ○    ●             │
│       ●       ●              │
│         ●●●●●                │
│                              │
│  ■ Equity: 60%               │
│  ■ Debt: 40%                 │
└─────────────────────────────┘

Task List Card:
┌─────────────────────────────┐
│  Today's Tasks               │
│  ─────────────────────       │
│  □ Review documents          │
│  □ Team meeting at 2 PM      │
│  □ Submit report             │
│  □ Update project status     │
└─────────────────────────────┘

Financial Card:
┌─────────────────────────────┐
│  💰 Revenue                  │
│                              │
│  $45,231                     │
│  Current Month               │
│                              │
│  Target: $50,000             │
└─────────────────────────────┘

Carousel Card:
┌─────────────────────────────────────────────────────────┐
│  Portfolio Fund Overlap              [◄]  [►]           │
│  ─────────────────────────────────────────────────      │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐          │
│  │ Fund A    │  │ Fund B    │  │ Fund C    │          │
│  │ vs        │  │ vs        │  │ vs        │          │
│  │ Fund B    │  │ Fund C    │  │ Fund D    │          │
│  │ ─────     │  │ ─────     │  │ ─────     │          │
│  │ 45% ████  │  │ 32% ███   │  │ 67% █████ │          │
│  │ Overlap   │  │ Overlap   │  │ Overlap   │          │
│  └───────────┘  └───────────┘  └───────────┘          │
└─────────────────────────────────────────────────────────┘

Features:
• Multiple card types for different use cases
• Interactive elements (click handlers)
• Chart integration (pie, donut)
• Icon support (SVG)
• Carousel with navigation
• Responsive layout
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `cardType` | `string` | `'dashboard'` | Type of card (dashboard, carousal, etc.) |
| `title` | `string` | - | Card title |
| `value` | `string \| number` | - | Primary value |
| `value1` | `string \| number` | - | Secondary value |
| `svgIcon` | `string` | - | SVG icon HTML |
| `taskList` | `string[]` | `[]` | Task list for task cards |
| `para` | `string` | - | Paragraph text |
| `small` | `string` | - | Small text/subtitle |
| `series` | `number[]` | - | Chart data series |
| `colors` | `string[]` | - | Chart colors |
| `width` | `number` | `100` | Chart width |
| `height` | `number` | `130` | Chart height |
| `stroke` | `number` | `0` | Chart stroke width |

#### Events

| Event | Type | Description |
|-------|------|-------------|
| `cardClick` | `EventEmitter<void>` | Emitted when card is clicked |

#### Examples

**Dashboard Card:**

```typescript
<lib-card
  [cardType]="'dashboard'"
  [title]="'Revenue'"
  [value]="'$45,231'"
  [svgIcon]="revenueIcon">
</lib-card>
```

**Pie Chart Card:**

```typescript
<lib-card
  [cardType]="'mfholdings'"
  [title]="'Portfolio Allocation'"
  [series]="[60, 40]"
  [colors]="['#FF8B81', '#7FCDA4']"
  [width]="150"
  [height]="150">
</lib-card>
```

---

### Search Component

A search input component with optional button and icon support.

#### Import

```typescript
import { Search } from 'eos-comp';
```

#### Basic Usage

```typescript
<lib-search
  [placeholder]="'Search users...'"
  [type]="'text'"
  [btnName]="'Search'"
  (inputChange)="onSearchChange($event)"
  (buttonClick)="onSearchClick()">
</lib-search>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `placeholder` | `string` | - | Input placeholder text |
| `type` | `string` | `'text'` | Input type |
| `svgIcon` | `string` | - | Optional icon HTML |
| `btnName` | `string` | - | Optional button text |
| `half` | `string` | `'true'` | Half width mode |

#### Events

| Event | Type | Description |
|-------|------|-------------|
| `inputChange` | `EventEmitter<string>` | Emitted when input value changes |
| `buttonClick` | `EventEmitter<void>` | Emitted when button is clicked |

#### Example

```typescript
import { Component } from '@angular/core';
import { Search } from 'eos-comp';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [Search],
  template: `
    <lib-search
      [placeholder]="'Search...'"
      [btnName]="'Go'"
      (inputChange)="handleSearch($event)"
      (buttonClick)="executeSearch()">
    </lib-search>
  `
})
export class SearchPageComponent {
  searchTerm = '';

  handleSearch(value: string) {
    this.searchTerm = value;
    console.log('Search term:', value);
  }

  executeSearch() {
    console.log('Execute search for:', this.searchTerm);
  }
}
```

#### Visual Representation

```
Basic Search Component:
┌────────────────────────────────────────────────────┐
│  🔍  │ Search users...                    [ Go ]   │
└────────────────────────────────────────────────────┘

Search with Icon Only:
┌────────────────────────────────────┐
│  🔍  │ Type to search...             │
└────────────────────────────────────┘

Search with Button:
┌──────────────────────────────────────────────────────┐
│  │ Enter search term...               [ Search ]     │
└──────────────────────────────────────────────────────┘

Half Width Search:
┌─────────────────────────┐
│  🔍  │ Quick search...   │
└─────────────────────────┘

Features:
• Optional prefix icon
• Optional action button
• Real-time input change events
• Customizable placeholder
• Half/full width options
• Flexible styling
```

---

### Header Component

A header component with title, description, profile image, icon, and action buttons.

#### Import

```typescript
import { HeaderComponent, ButtonType } from 'eos-comp';
```

#### Basic Usage

```typescript
<lib-header-component
  [title]="'Dashboard'"
  [description]="'Welcome back!'"
  [profileImage]="profileUrl"
  [icon]="settingsIcon"
  [buttonList]="headerButtons"
  (iconClicked)="onIconClick()">
</lib-header-component>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | `''` | Header title |
| `description` | `string` | `''` | Header description |
| `profileImage` | `string` | `''` | Profile image URL |
| `icon` | `string` | `''` | Icon HTML/SVG |
| `buttonList` | `ButtonType[]` | `[]` | Array of button configurations |

#### Events

| Event | Type | Description |
|-------|------|-------------|
| `iconClicked` | `EventEmitter<MouseEvent>` | Emitted when icon is clicked |

#### ButtonType Interface

```typescript
interface ButtonType {
  label: string;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
  dropdown?: boolean;
  openOnHover?: boolean;
  openOnClick?: boolean;
  clicked?: (event: MouseEvent) => void;
  dropdownClicked?: (event: MouseEvent) => void;
  dropdownList?: DropdownItem[];
}
```

#### Example

```typescript
headerButtons: ButtonType[] = [
  {
    label: 'Settings',
    variant: 'outline',
    prefixIcon: '⚙️',
    clicked: (event) => this.openSettings()
  },
  {
    label: 'Export',
    variant: 'primary',
    clicked: (event) => this.exportData()
  }
];
```

#### Visual Representation

```
Complete Header Component:
┌────────────────────────────────────────────────────────────────────────┐
│  👤  Dashboard                            [⚙️ Settings] [Export] ⚙️   │
│      Welcome back, John!                                               │
└────────────────────────────────────────────────────────────────────────┘

Header Layout Breakdown:
┌────────────────────────────────────────────────────────────────────────┐
│  [Profile]  [Title]                   [Button List]      [Icon]        │
│              [Description]                                             │
└────────────────────────────────────────────────────────────────────────┘

Simple Header (Title + Description):
┌────────────────────────────────────────┐
│  User Management                       │
│  Manage all system users               │
└────────────────────────────────────────┘

Header with Action Buttons:
┌─────────────────────────────────────────────────────────────────┐
│  Reports                    [Download] [Share] [Print]          │
│  Monthly financial reports                                      │
└─────────────────────────────────────────────────────────────────┘

Header with Profile Image:
┌──────────────────────────────────────────────────────┐
│  [👤]  My Profile                    [Edit Profile]  │
│        View and manage your account settings         │
└──────────────────────────────────────────────────────┘

Features:
• Flexible layout with multiple content slots
• Profile image support
• Multiple action buttons
• Clickable icon
• Title and description text
• Customizable button configurations
```

---

### Accordion Component

An accordion component for expandable content sections.

#### Import

```typescript
import { AccordionComponent } from 'eos-comp';
```

#### Basic Usage

```typescript
<lib-accordion-component
  [title]="'Personal Information'"
  [subsections]="sections"
  [editUrl]="'/edit-profile'"
  [tableData]="data"
  [tableColumns]="columns">
</lib-accordion-component>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | `''` | Accordion title |
| `subsections` | `SubSection[]` | `[]` | Array of subsections |
| `editUrl` | `string` | - | Edit navigation URL |
| `tableColumns` | `any[]` | `[]` | Table column configuration |
| `tableData` | `any[]` | `[]` | Table data |

#### SubSection Interface

```typescript
interface SubSection {
  header: string;
  content: string;
}
```

#### Example

```typescript
sections: SubSection[] = [
  {
    header: 'Full Name',
    content: 'John Doe'
  },
  {
    header: 'Email',
    content: 'john@example.com'
  }
];
```

#### Visual Representation

```
Accordion - Collapsed State:
┌───────────────────────────────────────────────────────┐
│  ▶ Personal Information                     [Edit]    │
└───────────────────────────────────────────────────────┘

Accordion - Expanded State:
┌───────────────────────────────────────────────────────┐
│  ▼ Personal Information                     [Edit]    │
├───────────────────────────────────────────────────────┤
│                                                       │
│  Full Name                                            │
│  John Doe                                             │
│                                                       │
│  Email                                                │
│  john@example.com                                     │
│                                                       │
│  Phone                                                │
│  +1 (555) 123-4567                                    │
│                                                       │
│  Address                                              │
│  123 Main Street, City, State 12345                   │
│                                                       │
└───────────────────────────────────────────────────────┘

Multiple Accordions:
┌───────────────────────────────────────────────────────┐
│  ▼ Personal Information                     [Edit]    │
├───────────────────────────────────────────────────────┤
│  [Content visible when expanded]                      │
└───────────────────────────────────────────────────────┘
┌───────────────────────────────────────────────────────┐
│  ▶ Work Information                         [Edit]    │
└───────────────────────────────────────────────────────┘
┌───────────────────────────────────────────────────────┐
│  ▶ Payment Details                          [Edit]    │
└───────────────────────────────────────────────────────┘

Accordion with Table Data:
┌─────────────────────────────────────────────────────────┐
│  ▼ Order History                            [Edit]      │
├─────────────────────────────────────────────────────────┤
│  Date        │  Order ID  │  Amount   │  Status        │
│  ───────────────────────────────────────────────────── │
│  2024-01-15  │  #12345    │  $125.00  │  Delivered     │
│  2024-01-10  │  #12344    │  $89.99   │  Shipped       │
│  2024-01-05  │  #12343    │  $45.50   │  Processing    │
└─────────────────────────────────────────────────────────┘

Features:
• Click to expand/collapse content
• Optional edit button with navigation
• Support for subsections (key-value pairs)
• Table data integration
• Smooth animations
• Clean, organized layout
```

---

### Form Control Components

The EOS UI Library provides a comprehensive set of standalone form control components that work seamlessly with both Reactive Forms and Template-Driven Forms. All components implement Angular's `ControlValueAccessor` interface for full form integration.

#### Overview

The library includes 7 reusable form control components:

- **TextInputComponent** - Text, email, number, and date inputs
- **TextareaComponent** - Multi-line text input
- **SelectComponent** - Dropdown select
- **ToggleComponent** - Switch/toggle for boolean values
- **RadioGroupComponent** - Radio button groups
- **CheckboxGroupComponent** - Checkbox groups (multiple selections)
- **InputWithIconComponent** - Input with prefix/suffix icons

---

#### Text Input Component

A versatile input component supporting text, email, number, and date input types.

##### Import

```typescript
import { TextInputComponent } from 'eos-comp';
```

##### Basic Usage

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from 'eos-comp';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, TextInputComponent],
  template: `
    <form [formGroup]="form">
      <!-- Text Input -->
      <lib-text-input
        label="Full Name"
        placeholder="Enter your name"
        formControlName="name">
      </lib-text-input>

      <!-- Email Input -->
      <lib-text-input
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        formControlName="email">
      </lib-text-input>

      <!-- Number Input -->
      <lib-text-input
        label="Age"
        type="number"
        placeholder="Enter age"
        formControlName="age">
      </lib-text-input>

      <!-- Date Input -->
      <lib-text-input
        label="Birth Date"
        type="date"
        formControlName="birthDate">
      </lib-text-input>

      <!-- Disabled Input -->
      <lib-text-input
        label="User ID"
        [disabled]="true"
        formControlName="userId">
      </lib-text-input>
    </form>
  `
})
export class UserFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      age: [''],
      birthDate: [''],
      userId: ['USER-12345']
    });
  }
}
```

##### Visual Representation

```
Text Input Component:
┌──────────────────────────────────────────────┐
│  Full Name                                   │
│  ┌────────────────────────────────────────┐ │
│  │ John Doe                               │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘

Email Input:
┌──────────────────────────────────────────────┐
│  Email Address                               │
│  ┌────────────────────────────────────────┐ │
│  │ john@example.com                       │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘

Number Input:
┌──────────────────────────────────────────────┐
│  Age                                         │
│  ┌────────────────────────────────────────┐ │
│  │ 28                                     │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘

Date Input:
┌──────────────────────────────────────────────┐
│  Birth Date                                  │
│  ┌────────────────────────────────────────┐ │
│  │ 01/15/1995                       📅   │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘

Disabled Input:
┌──────────────────────────────────────────────┐
│  User ID                                     │
│  ┌────────────────────────────────────────┐ │
│  │ USER-12345               [Disabled]    │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

##### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text displayed above input |
| `placeholder` | `string` | `''` | Placeholder text |
| `type` | `'text' \| 'email' \| 'number' \| 'date'` | `'text'` | Input type |
| `disabled` | `boolean` | `false` | Disable the input |

---

#### Textarea Component

Multi-line text input component with configurable rows.

##### Import

```typescript
import { TextareaComponent } from 'eos-comp';
```

##### Basic Usage

```typescript
<lib-textarea
  label="Description"
  placeholder="Enter detailed description"
  [rows]="5"
  formControlName="description">
</lib-textarea>
```

##### Visual Representation

```
Textarea Component:
┌────────────────────────────────────────────────────────┐
│  Description                                           │
│  ┌──────────────────────────────────────────────────┐ │
│  │                                                  │ │
│  │ This is a multi-line text area where users can  │ │
│  │ enter longer content. It automatically wraps     │ │
│  │ text and supports scrolling for very long        │ │
│  │ content.                                         │ │
│  │                                                  │ │
│  └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘

Features:
• Configurable row height
• Auto-wrapping text
• Scrollable content
• Full form integration
```

##### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text |
| `placeholder` | `string` | `''` | Placeholder text |
| `rows` | `number` | `3` | Number of visible rows |
| `disabled` | `boolean` | `false` | Disable the textarea |

---

#### Select Component

Dropdown select component with custom options.

##### Import

```typescript
import { SelectComponent, SelectOption } from 'eos-comp';
```

##### Basic Usage

```typescript
import { Component } from '@angular/core';
import { SelectComponent, SelectOption } from 'eos-comp';

@Component({
  selector: 'app-country-form',
  standalone: true,
  imports: [SelectComponent],
  template: `
    <lib-select
      label="Country"
      [options]="countries"
      formControlName="country">
    </lib-select>
  `
})
export class CountryFormComponent {
  countries: SelectOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'in', label: 'India' },
    { value: 'au', label: 'Australia' }
  ];
}
```

##### Visual Representation

```
Select Component (Closed):
┌──────────────────────────────────────────────┐
│  Country                                     │
│  ┌────────────────────────────────────────┐ │
│  │ United States                      ▼  │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘

Select Component (Open):
┌──────────────────────────────────────────────┐
│  Country                                     │
│  ┌────────────────────────────────────────┐ │
│  │ United States                      ▲  │ │
│  └────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────┐ │
│  │ United States        ✓                 │ │
│  │ United Kingdom                         │ │
│  │ Canada                                 │ │
│  │ India                                  │ │
│  │ Australia                              │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

##### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text |
| `options` | `SelectOption[]` | `[]` | Array of dropdown options |
| `disabled` | `boolean` | `false` | Disable the select |

##### SelectOption Interface

```typescript
interface SelectOption {
  value: any;        // The value stored in the form
  label: string;     // Display text in dropdown
}
```

---

#### Toggle Component

Switch/toggle component for boolean values.

##### Import

```typescript
import { ToggleComponent } from 'eos-comp';
```

##### Basic Usage

```typescript
<lib-toggle
  label="Enable notifications"
  formControlName="notifications">
</lib-toggle>

<lib-toggle
  label="Dark mode"
  formControlName="darkMode">
</lib-toggle>

<lib-toggle
  label="Premium feature (disabled)"
  [disabled]="true"
  formControlName="premium">
</lib-toggle>
```

##### Visual Representation

```
Toggle Component (ON):
┌──────────────────────────────────────────────┐
│  Enable notifications                        │
│  ───────●  ON                                │
└──────────────────────────────────────────────┘

Toggle Component (OFF):
┌──────────────────────────────────────────────┐
│  Dark mode                                   │
│  ●───────  OFF                               │
└──────────────────────────────────────────────┘

Toggle Component (Disabled):
┌──────────────────────────────────────────────┐
│  Premium feature (disabled)                  │
│  [●───────]  OFF  [Disabled]                 │
└──────────────────────────────────────────────┘

Features:
• Smooth animations
• Visual ON/OFF states
• Returns boolean value
• Disabled state support
```

##### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text |
| `disabled` | `boolean` | `false` | Disable the toggle |

**Returns:** `boolean` (true/false)

---

#### Radio Group Component

Radio button group for single selection from multiple options.

##### Import

```typescript
import { RadioGroupComponent, RadioOption } from 'eos-comp';
```

##### Basic Usage

```typescript
import { Component } from '@angular/core';
import { RadioGroupComponent, RadioOption } from 'eos-comp';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RadioGroupComponent],
  template: `
    <lib-radio-group
      label="Gender"
      [options]="genderOptions"
      name="gender"
      formControlName="gender">
    </lib-radio-group>

    <lib-radio-group
      label="Preferred Contact Method"
      [options]="contactMethods"
      name="contactMethod"
      formControlName="contactMethod">
    </lib-radio-group>
  `
})
export class UserFormComponent {
  genderOptions: RadioOption[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];

  contactMethods: RadioOption[] = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'sms', label: 'SMS' }
  ];
}
```

##### Visual Representation

```
Radio Group Component:
┌──────────────────────────────────────────────┐
│  Gender                                      │
│  ◉  Male                                     │
│  ○  Female                                   │
│  ○  Other                                    │
│  ○  Prefer not to say                        │
└──────────────────────────────────────────────┘

Radio Group (Different Selection):
┌──────────────────────────────────────────────┐
│  Preferred Contact Method                    │
│  ◉  Email                                    │
│  ○  Phone                                    │
│  ○  SMS                                      │
└──────────────────────────────────────────────┘

Features:
• Single selection only
• Clear visual feedback
• Unique naming per group
• Returns selected value
```

##### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text for the group |
| `options` | `RadioOption[]` | `[]` | Array of radio options |
| `name` | `string` | auto-generated | Radio group name (for HTML grouping) |
| `disabled` | `boolean` | `false` | Disable entire radio group |

##### RadioOption Interface

```typescript
interface RadioOption {
  value: any;        // The value stored in the form
  label: string;     // Display text for the option
  id?: string;       // Optional custom ID
}
```

**Returns:** Single selected value (e.g., `'male'`, `'email'`)

---

#### Checkbox Group Component

Checkbox group for multiple selections.

##### Import

```typescript
import { CheckboxGroupComponent, CheckboxOption } from 'eos-comp';
```

##### Basic Usage

```typescript
import { Component } from '@angular/core';
import { CheckboxGroupComponent, CheckboxOption } from 'eos-comp';

@Component({
  selector: 'app-preferences-form',
  standalone: true,
  imports: [CheckboxGroupComponent],
  template: `
    <lib-checkbox-group
      label="Interests"
      [options]="interests"
      formControlName="selectedInterests">
    </lib-checkbox-group>

    <lib-checkbox-group
      label="Notification Preferences"
      [options]="notificationPrefs"
      formControlName="notifications">
    </lib-checkbox-group>
  `
})
export class PreferencesFormComponent {
  interests: CheckboxOption[] = [
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'reading', label: 'Reading' },
    { value: 'travel', label: 'Travel' },
    { value: 'coding', label: 'Coding' }
  ];

  notificationPrefs: CheckboxOption[] = [
    { value: 'email', label: 'Email notifications' },
    { value: 'sms', label: 'SMS alerts' },
    { value: 'push', label: 'Push notifications' }
  ];
}
```

##### Visual Representation

```
Checkbox Group Component:
┌──────────────────────────────────────────────┐
│  Interests                                   │
│  ☑  Sports                                   │
│  ☐  Music                                    │
│  ☑  Reading                                  │
│  ☑  Travel                                   │
│  ☐  Coding                                   │
└──────────────────────────────────────────────┘

Checkbox Group (Notification Preferences):
┌──────────────────────────────────────────────┐
│  Notification Preferences                    │
│  ☑  Email notifications                      │
│  ☑  SMS alerts                               │
│  ☐  Push notifications                       │
└──────────────────────────────────────────────┘

Features:
• Multiple selections allowed
• Individual checkbox states
• Returns array of selected values
• Clear visual feedback
```

##### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text for the group |
| `options` | `CheckboxOption[]` | `[]` | Array of checkbox options |
| `disabled` | `boolean` | `false` | Disable entire checkbox group |

##### CheckboxOption Interface

```typescript
interface CheckboxOption {
  value: any;        // The value stored in the form
  label: string;     // Display text for the checkbox
  id?: string;       // Optional custom ID
}
```

**Returns:** `Array` of selected values (e.g., `['sports', 'reading', 'travel']`)

---

#### Input With Icon Component

Input component with prefix or suffix icon/text.

##### Import

```typescript
import { InputWithIconComponent } from 'eos-comp';
```

##### Basic Usage

```typescript
<!-- Currency input with left icon -->
<lib-input-with-icon
  label="Salary"
  icon="₹"
  type="number"
  placeholder="Enter amount"
  formControlName="salary">
</lib-input-with-icon>

<!-- Dollar input -->
<lib-input-with-icon
  label="Price"
  icon="$"
  type="number"
  placeholder="0.00"
  formControlName="price">
</lib-input-with-icon>

<!-- Email with right icon -->
<lib-input-with-icon
  label="Email"
  icon="@"
  iconPosition="right"
  placeholder="username"
  formControlName="emailPrefix">
</lib-input-with-icon>

<!-- Percentage input -->
<lib-input-with-icon
  label="Interest Rate"
  icon="%"
  iconPosition="right"
  type="number"
  placeholder="Enter rate"
  formControlName="interestRate">
</lib-input-with-icon>
```

##### Visual Representation

```
Input With Icon (Left Position):
┌──────────────────────────────────────────────┐
│  Salary                                      │
│  ┌────────────────────────────────────────┐ │
│  │ ₹ │ 50000                              │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘

Input With Icon (Right Position):
┌──────────────────────────────────────────────┐
│  Interest Rate                               │
│  ┌────────────────────────────────────────┐ │
│  │ 6.5                              │ %   │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘

Dollar Input:
┌──────────────────────────────────────────────┐
│  Price                                       │
│  ┌────────────────────────────────────────┐ │
│  │ $ │ 125.99                             │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘

Email Input with @ suffix:
┌──────────────────────────────────────────────┐
│  Email                                       │
│  ┌────────────────────────────────────────┐ │
│  │ john.doe                         │ @   │ │
│  └────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘

Features:
• Customizable icon/text
• Left or right positioning
• Currency, percentage, or custom symbols
• Full form integration
• Number and text input support
```

##### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text |
| `placeholder` | `string` | `''` | Placeholder text |
| `icon` | `string` | `'₹'` | Icon or text to display |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of icon |
| `type` | `'text' \| 'number'` | `'text'` | Input type |
| `disabled` | `boolean` | `false` | Disable the input |

---

#### Complete Form Example

Here's a comprehensive example using all form control components:

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {
  TextInputComponent,
  TextareaComponent,
  SelectComponent,
  ToggleComponent,
  RadioGroupComponent,
  CheckboxGroupComponent,
  InputWithIconComponent,
  SelectOption,
  RadioOption,
  CheckboxOption
} from 'eos-comp';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TextInputComponent,
    TextareaComponent,
    SelectComponent,
    ToggleComponent,
    RadioGroupComponent,
    CheckboxGroupComponent,
    InputWithIconComponent
  ],
  template: `
    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      <h2>User Registration</h2>

      <!-- Text Inputs -->
      <lib-text-input
        label="Full Name"
        placeholder="Enter your name"
        formControlName="name">
      </lib-text-input>

      <lib-text-input
        label="Email"
        type="email"
        placeholder="you@example.com"
        formControlName="email">
      </lib-text-input>

      <lib-text-input
        label="Age"
        type="number"
        placeholder="Enter age"
        formControlName="age">
      </lib-text-input>

      <lib-text-input
        label="Birth Date"
        type="date"
        formControlName="birthDate">
      </lib-text-input>

      <!-- Textarea -->
      <lib-textarea
        label="Bio"
        placeholder="Tell us about yourself"
        [rows]="4"
        formControlName="bio">
      </lib-textarea>

      <!-- Select Dropdown -->
      <lib-select
        label="Country"
        [options]="countries"
        formControlName="country">
      </lib-select>

      <!-- Radio Group -->
      <lib-radio-group
        label="Gender"
        [options]="genders"
        formControlName="gender">
      </lib-radio-group>

      <!-- Checkbox Group -->
      <lib-checkbox-group
        label="Interests"
        [options]="interests"
        formControlName="selectedInterests">
      </lib-checkbox-group>

      <!-- Input With Icon -->
      <lib-input-with-icon
        label="Expected Salary"
        icon="₹"
        type="number"
        placeholder="Enter amount"
        formControlName="salary">
      </lib-input-with-icon>

      <!-- Toggle Switch -->
      <lib-toggle
        label="Subscribe to newsletter"
        formControlName="subscribe">
      </lib-toggle>

      <lib-toggle
        label="Accept terms and conditions"
        formControlName="acceptTerms">
      </lib-toggle>

      <button type="submit" [disabled]="!registrationForm.valid">
        Submit Registration
      </button>
    </form>
  `
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  countries: SelectOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'in', label: 'India' },
    { value: 'au', label: 'Australia' }
  ];

  genders: RadioOption[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];

  interests: CheckboxOption[] = [
    { value: 'coding', label: 'Coding' },
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'reading', label: 'Reading' },
    { value: 'travel', label: 'Travel' }
  ];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      birthDate: ['', Validators.required],
      bio: [''],
      country: ['us', Validators.required],
      gender: ['', Validators.required],
      selectedInterests: [[]],
      salary: [''],
      subscribe: [false],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
      // Example output:
      // {
      //   name: 'John Doe',
      //   email: 'john@example.com',
      //   age: 28,
      //   birthDate: '1995-01-15',
      //   bio: 'Software developer...',
      //   country: 'us',
      //   gender: 'male',
      //   selectedInterests: ['coding', 'music', 'travel'],
      //   salary: 50000,
      //   subscribe: true,
      //   acceptTerms: true
      // }
    }
  }
}
```

#### Template-Driven Forms Support

All form control components work with template-driven forms using `[(ngModel)]`:

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextInputComponent, ToggleComponent, SelectComponent, SelectOption } from 'eos-comp';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [FormsModule, TextInputComponent, ToggleComponent, SelectComponent],
  template: `
    <form #myForm="ngForm">
      <lib-text-input
        label="Name"
        name="userName"
        [(ngModel)]="userName">
      </lib-text-input>

      <lib-select
        label="Country"
        name="country"
        [options]="countries"
        [(ngModel)]="selectedCountry">
      </lib-select>

      <lib-toggle
        label="Accept terms"
        name="acceptTerms"
        [(ngModel)]="acceptTerms">
      </lib-toggle>

      <button type="submit">Submit</button>
    </form>

    <div>
      <h3>Form Values:</h3>
      <p>Name: {{ userName }}</p>
      <p>Country: {{ selectedCountry }}</p>
      <p>Accept Terms: {{ acceptTerms }}</p>
    </div>
  `
})
export class SimpleFormComponent {
  userName = '';
  selectedCountry = 'us';
  acceptTerms = false;

  countries: SelectOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'in', label: 'India' }
  ];
}
```

#### Form Control Features

All form control components share these features:

- **ControlValueAccessor Implementation**: Full integration with Angular Forms
- **Reactive Forms Support**: Use with `formControlName`
- **Template-Driven Forms Support**: Use with `[(ngModel)]`
- **Type-Safe Interfaces**: TypeScript interfaces for all option types
- **Disabled State**: All components support disabled state
- **Validation Ready**: Works seamlessly with Angular validators
- **Standalone Components**: No module imports required
- **Consistent Styling**: Matches EOS UI design system
- **Accessibility**: Proper label associations and ARIA attributes

---

## Best Practices

### 1. Component Import Strategy

Since all components are standalone, import only what you need:

```typescript
// Good
import { ButtonComponent, TableComponent } from 'eos-comp';

// Also acceptable
import { ButtonComponent } from 'eos-comp';
import { TableComponent } from 'eos-comp';
```

### 2. Type Safety

Always use TypeScript interfaces for better type safety:

```typescript
import { TableColumn, ButtonType } from 'eos-comp';

// Type-safe column configuration
const columns: TableColumn[] = [
  { label: 'Name', field: 'name', sortable: true }
];
```

### 3. Event Handling

Use strongly typed event handlers:

```typescript
onSortChange(event: { field: string; direction: 'asc' | 'desc' | null }) {
  // Your logic here
}
```

### 4. Responsive Design

Utilize the component properties for responsive behavior:

```typescript
<lib-button
  [fullWidth]="isMobile"
  variant="primary">
  Submit
</lib-button>
```

### 5. Performance Optimization

For large tables, use server-side pagination:

```typescript
<lib-table
  [rows]="currentPageData"
  [total]="totalRecords"
  [page]="currentPage"
  (pageChange)="loadPage($event)">
</lib-table>
```

### 6. Accessibility

Always provide appropriate ARIA attributes:

```typescript
<lib-modal
  [ariaDescribedBy]="'modal-description'"
  [heading]="'Important Notice'">
</lib-modal>
```

---

## Troubleshooting

### Common Issues

#### 1. Peer Dependency Warnings

**Issue:** Warning about missing peer dependencies

**Solution:** Install all required peer dependencies:

```bash
npm install @angular/common@^20.3.0 @angular/core@^20.3.0 @splidejs/splide@^4.1.4 ng-apexcharts@^1.8.0 ag-grid-angular@^31.0.3
```

#### 2. AG-Grid Not Rendering

**Issue:** AG-Grid table not displaying

**Solution:** Ensure you've installed `ag-grid-angular` and imported AG-Grid styles in your `angular.json`:

```json
"styles": [
  "node_modules/ag-grid-community/styles/ag-grid.css",
  "node_modules/ag-grid-community/styles/ag-theme-alpine.css"
]
```

#### 3. Splide Carousel Not Working

**Issue:** Carousel not initializing

**Solution:** Ensure `@splidejs/splide` is installed and the component has finished rendering:

```typescript
ngAfterViewInit() {
  // Carousel initialization happens here
}
```

#### 4. Icons Not Displaying

**Issue:** SVG icons not showing

**Solution:** Ensure you're passing sanitized HTML when using SVG icons:

```typescript
import { DomSanitizer } from '@angular/platform-browser';

constructor(private sanitizer: DomSanitizer) {}

safeSvgIcon = this.sanitizer.bypassSecurityTrustHtml(this.svgIconString);
```

#### 5. Modal Not Closing

**Issue:** Modal doesn't close on backdrop click

**Solution:** Ensure `closeOnBackdrop` is set to `true` (default) and you're handling the `openChange` event:

```typescript
<lib-modal
  [open]="isOpen"
  [closeOnBackdrop]="true"
  (openChange)="isOpen = $event">
</lib-modal>
```

---

## Version Information

- **Library Version:** 0.0.3
- **Angular Version:** ^20.3.0
- **License:** Check package documentation
- **Package Name:** `eos-comp`

### Dependencies

- **@splidejs/splide:** ^4.1.4 - Carousel functionality
- **ng-apexcharts:** ^1.8.0 - Chart components
- **ag-grid-angular:** ^31.0.3 - Advanced grid features

---

## Additional Resources

### Example Projects

Check the library's demo application for live examples of all components:

- Table examples with different configurations
- Form integration examples
- Modal and dialog patterns
- Card layouts and variations

### Support

For issues, feature requests, or contributions:

1. Check the existing documentation
2. Review the component source code
3. Test with the latest version
4. Report issues with clear reproduction steps

### Migration Guide

When upgrading from older versions:

1. Review the changelog for breaking changes
2. Update peer dependencies to compatible versions
3. Test all component integrations
4. Update custom styling if needed

---

## Summary

The EOS UI Component Library provides a comprehensive set of Angular components designed for modern web applications. With support for:

- Advanced data tables with AG-Grid integration
- Flexible modals and dialogs
- Versatile button components with dropdown support
- Rich card components with charts and carousels
- Form components and search functionality
- Header and navigation components
- Accordion components for expandable content

All components are standalone, type-safe, and production-ready. Follow the examples and best practices in this handbook to integrate them effectively into your Angular projects.

---

**Happy Coding with EOS UI Component Library!**
