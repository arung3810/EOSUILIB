# Form Controls Library - Usage Guide

This library provides standalone, reusable form control components that can be embedded individually in any Angular application. All components implement Angular's `ControlValueAccessor` interface, making them fully compatible with both Reactive Forms and Template-Driven Forms.

## Installation

```bash
npm install eos-comp
```

## Available Components

### 1. Text Input Component

A versatile input component that supports text, email, number, and date inputs.

#### Import

```typescript
import { TextInputComponent } from 'eos-comp';
```

#### Usage

```html
<!-- Basic usage -->
<lib-text-input
  label="Name"
  placeholder="Enter your name"
  formControlName="name">
</lib-text-input>

<!-- Email input -->
<lib-text-input
  label="Email"
  type="email"
  placeholder="Enter your email"
  formControlName="email">
</lib-text-input>

<!-- Number input -->
<lib-text-input
  label="Age"
  type="number"
  placeholder="Enter your age"
  formControlName="age">
</lib-text-input>

<!-- Date input -->
<lib-text-input
  label="Birth Date"
  type="date"
  formControlName="birthDate">
</lib-text-input>

<!-- Disabled input -->
<lib-text-input
  label="Disabled Field"
  placeholder="Cannot edit"
  [disabled]="true"
  formControlName="disabledField">
</lib-text-input>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text displayed above the input |
| `placeholder` | `string` | `''` | Placeholder text |
| `type` | `'text' \| 'email' \| 'number' \| 'date'` | `'text'` | Input type |
| `disabled` | `boolean` | `false` | Disable the input |

---

### 2. Textarea Component

Multi-line text input component.

#### Import

```typescript
import { TextareaComponent } from 'eos-comp';
```

#### Usage

```html
<lib-textarea
  label="Description"
  placeholder="Enter description"
  [rows]="5"
  formControlName="description">
</lib-textarea>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text |
| `placeholder` | `string` | `''` | Placeholder text |
| `rows` | `number` | `3` | Number of visible rows |
| `disabled` | `boolean` | `false` | Disable the textarea |

---

### 3. Select Component

Dropdown select component.

#### Import

```typescript
import { SelectComponent, SelectOption } from 'eos-comp';
```

#### Usage

```typescript
// In your component
export class MyComponent {
  countries: SelectOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' }
  ];
}
```

```html
<lib-select
  label="Country"
  [options]="countries"
  formControlName="country">
</lib-select>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text |
| `options` | `SelectOption[]` | `[]` | Array of options |
| `disabled` | `boolean` | `false` | Disable the select |

#### SelectOption Interface

```typescript
interface SelectOption {
  value: any;
  label: string;
}
```

---

### 4. Toggle Component

Switch/toggle component for boolean values.

#### Import

```typescript
import { ToggleComponent } from 'eos-comp';
```

#### Usage

```html
<lib-toggle
  label="Enable notifications"
  formControlName="notifications">
</lib-toggle>

<!-- Disabled toggle -->
<lib-toggle
  label="Premium feature"
  [disabled]="true"
  formControlName="premiumFeature">
</lib-toggle>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text |
| `disabled` | `boolean` | `false` | Disable the toggle |

---

### 5. Radio Group Component

Radio button group component.

#### Import

```typescript
import { RadioGroupComponent, RadioOption } from 'eos-comp';
```

#### Usage

```typescript
// In your component
export class MyComponent {
  genderOptions: RadioOption[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];
}
```

```html
<lib-radio-group
  label="Gender"
  [options]="genderOptions"
  name="gender"
  formControlName="gender">
</lib-radio-group>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text |
| `options` | `RadioOption[]` | `[]` | Array of radio options |
| `name` | `string` | auto-generated | Radio group name |
| `disabled` | `boolean` | `false` | Disable the radio group |

#### RadioOption Interface

```typescript
interface RadioOption {
  value: any;
  label: string;
  id?: string;
}
```

---

### 6. Checkbox Group Component

Checkbox group component for multiple selections.

#### Import

```typescript
import { CheckboxGroupComponent, CheckboxOption } from 'eos-comp';
```

#### Usage

```typescript
// In your component
export class MyComponent {
  interests: CheckboxOption[] = [
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'reading', label: 'Reading' }
  ];
}
```

```html
<lib-checkbox-group
  label="Interests"
  [options]="interests"
  formControlName="selectedInterests">
</lib-checkbox-group>
```

**Note:** This component returns an array of selected values.

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text |
| `options` | `CheckboxOption[]` | `[]` | Array of checkbox options |
| `disabled` | `boolean` | `false` | Disable the checkbox group |

#### CheckboxOption Interface

```typescript
interface CheckboxOption {
  value: any;
  label: string;
  id?: string;
}
```

---

### 7. Input With Icon Component

Input component with an icon/prefix/suffix.

#### Import

```typescript
import { InputWithIconComponent } from 'eos-comp';
```

#### Usage

```html
<!-- Currency input with left icon -->
<lib-input-with-icon
  label="Amount"
  icon="₹"
  type="number"
  placeholder="Enter amount"
  formControlName="amount">
</lib-input-with-icon>

<!-- Input with right icon -->
<lib-input-with-icon
  label="Email"
  icon="@"
  iconPosition="right"
  placeholder="Enter email"
  formControlName="email">
</lib-input-with-icon>
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text |
| `placeholder` | `string` | `''` | Placeholder text |
| `icon` | `string` | `'₹'` | Icon/text to display |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of the icon |
| `type` | `'text' \| 'number'` | `'text'` | Input type |
| `disabled` | `boolean` | `false` | Disable the input |

---

## Complete Example

Here's a complete example of using these components in a Reactive Form:

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
  selector: 'app-my-form',
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

      <lib-textarea
        label="Bio"
        placeholder="Tell us about yourself"
        [rows]="4"
        formControlName="bio">
      </lib-textarea>

      <lib-select
        label="Country"
        [options]="countries"
        formControlName="country">
      </lib-select>

      <lib-radio-group
        label="Gender"
        [options]="genders"
        formControlName="gender">
      </lib-radio-group>

      <lib-checkbox-group
        label="Interests"
        [options]="interests"
        formControlName="selectedInterests">
      </lib-checkbox-group>

      <lib-input-with-icon
        label="Salary"
        icon="₹"
        type="number"
        placeholder="Enter expected salary"
        formControlName="salary">
      </lib-input-with-icon>

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

  genders: RadioOption[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  interests: CheckboxOption[] = [
    { value: 'coding', label: 'Coding' },
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bio: [''],
      country: ['us'],
      gender: ['male'],
      selectedInterests: [[]],
      salary: [''],
      subscribe: [false]
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

## Template-Driven Forms

These components also work with template-driven forms:

```html
<form #myForm="ngForm">
  <lib-text-input
    label="Name"
    placeholder="Enter your name"
    name="name"
    [(ngModel)]="userName">
  </lib-text-input>

  <lib-toggle
    label="Accept terms"
    name="acceptTerms"
    [(ngModel)]="acceptTerms">
  </lib-toggle>
</form>
```

## Styling

All components use the EOS UI library's consistent styling. The components inherit from your application's global styles and can be customized using CSS variables or by overriding the component styles.

## Features

- **Standalone Components**: No module imports needed, just import the component directly
- **ControlValueAccessor**: Full integration with Angular Forms (Reactive & Template-Driven)
- **Type-Safe**: TypeScript interfaces for all option types
- **Accessible**: Proper label associations and disabled states
- **Customizable**: Support for labels, placeholders, and disabled states
- **Validation Ready**: Works seamlessly with Angular's form validation

## Support

For issues or questions, please open an issue in the repository.
