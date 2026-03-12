import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface RadioOption {
  value: any;
  label: string;
  id?: string;
}

@Component({
  selector: 'lib-radio-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }
  ]
})
export class RadioGroupComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() options: RadioOption[] = [];
  @Input() name: string = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
  @Input() disabled: boolean = false;

  value: any = null;
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
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

  onRadioChange(value: any): void {
    this.value = value;
    this.onChange(this.value);
    this.onTouched();
  }

  getOptionId(option: RadioOption, index: number): string {
    return option.id || `${this.name}-${index}`;
  }
}
