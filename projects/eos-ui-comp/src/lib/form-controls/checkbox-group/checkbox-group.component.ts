import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface CheckboxOption {
  value: any;
  label: string;
  id?: string;
}

@Component({
  selector: 'lib-checkbox-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox-group.component.html',
  styleUrl: './checkbox-group.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    }
  ]
})
export class CheckboxGroupComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() options: CheckboxOption[] = [];
  @Input() disabled: boolean = false;

  selectedValues: any[] = [];
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(values: any[]): void {
    this.selectedValues = values || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  isChecked(value: any): boolean {
    return this.selectedValues.includes(value);
  }

  onCheckboxChange(value: any, checked: boolean): void {
    if (checked) {
      this.selectedValues = [...this.selectedValues, value];
    } else {
      this.selectedValues = this.selectedValues.filter(v => v !== value);
    }
    this.onChange(this.selectedValues);
    this.onTouched();
  }

  getOptionId(option: CheckboxOption, index: number): string {
    return option.id || `checkbox-${index}`;
  }
}
