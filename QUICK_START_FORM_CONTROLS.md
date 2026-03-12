# Quick Start - EOS Form Controls

## Installation

```bash
npm install eos-comp
```

## Quick Examples

### Text Input

```typescript
import { TextInputComponent } from 'eos-comp';

// In template
<lib-text-input
  label="Name"
  placeholder="Enter your name"
  formControlName="name">
</lib-text-input>
```

**Variations:**
- `type="email"` - Email input
- `type="number"` - Number input
- `type="date"` - Date picker
- `[disabled]="true"` - Disabled state

---

### Textarea

```typescript
import { TextareaComponent } from 'eos-comp';

// In template
<lib-textarea
  label="Description"
  placeholder="Enter description"
  [rows]="4"
  formControlName="description">
</lib-textarea>
```

---

### Select Dropdown

```typescript
import { SelectComponent, SelectOption } from 'eos-comp';

// In component
countries: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' }
];

// In template
<lib-select
  label="Country"
  [options]="countries"
  formControlName="country">
</lib-select>
```

---

### Toggle Switch

```typescript
import { ToggleComponent } from 'eos-comp';

// In template
<lib-toggle
  label="Enable notifications"
  formControlName="notifications">
</lib-toggle>
```

Returns: `boolean` (true/false)

---

### Radio Group

```typescript
import { RadioGroupComponent, RadioOption } from 'eos-comp';

// In component
genders: RadioOption[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' }
];

// In template
<lib-radio-group
  label="Gender"
  [options]="genders"
  formControlName="gender">
</lib-radio-group>
```

Returns: Single selected `value`

---

### Checkbox Group

```typescript
import { CheckboxGroupComponent, CheckboxOption } from 'eos-comp';

// In component
interests: CheckboxOption[] = [
  { value: 'sports', label: 'Sports' },
  { value: 'music', label: 'Music' },
  { value: 'reading', label: 'Reading' }
];

// In template
<lib-checkbox-group
  label="Interests"
  [options]="interests"
  formControlName="selectedInterests">
</lib-checkbox-group>
```

Returns: `Array` of selected values (e.g., `['sports', 'music']`)

---

### Input with Icon

```typescript
import { InputWithIconComponent } from 'eos-comp';

// Currency input (left icon)
<lib-input-with-icon
  label="Amount"
  icon="₹"
  type="number"
  placeholder="Enter amount"
  formControlName="amount">
</lib-input-with-icon>

// Email input (right icon)
<lib-input-with-icon
  label="Email"
  icon="@"
  iconPosition="right"
  placeholder="Enter email"
  formControlName="email">
</lib-input-with-icon>
```

---

## Complete Form Example

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  TextInputComponent,
  SelectComponent,
  ToggleComponent,
  SelectOption
} from 'eos-comp';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TextInputComponent,
    SelectComponent,
    ToggleComponent
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <lib-text-input
        label="Name"
        placeholder="Enter your name"
        formControlName="name">
      </lib-text-input>

      <lib-text-input
        label="Email"
        type="email"
        placeholder="Enter your email"
        formControlName="email">
      </lib-text-input>

      <lib-select
        label="Country"
        [options]="countries"
        formControlName="country">
      </lib-select>

      <lib-toggle
        label="Subscribe to newsletter"
        formControlName="subscribe">
      </lib-toggle>

      <button type="submit">Submit</button>
    </form>
  `
})
export class MyFormComponent {
  form: FormGroup;

  countries: SelectOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'in', label: 'India' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      country: ['us'],
      subscribe: [false]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    // Output: { name: 'John', email: 'john@example.com', country: 'us', subscribe: true }
  }
}
```

---

## Template-Driven Forms

Works with `[(ngModel)]` too:

```html
<lib-text-input
  label="Name"
  name="name"
  [(ngModel)]="userName">
</lib-text-input>

<lib-toggle
  label="Accept terms"
  name="terms"
  [(ngModel)]="acceptTerms">
</lib-toggle>
```

---

## Common Props (All Components)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `''` | Label text above control |
| `disabled` | `boolean` | `false` | Disable the control |
| `formControlName` | `string` | - | Reactive Forms binding |

---

## View Live Demo

Run the development server and visit `/inputfields`:

```bash
npm start
```

Navigate to: `http://localhost:4200/inputfields`

---

## Need More Info?

📖 See [FORM_CONTROLS_USAGE.md](./FORM_CONTROLS_USAGE.md) for detailed documentation

📋 See [FORM_CONTROLS_SUMMARY.md](./FORM_CONTROLS_SUMMARY.md) for implementation details
