import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

export type FieldType = 'text' | 'email' | 'number' | 'textarea' | 'date' | 'select' | 'toggle' | 'radio' | 'checkbox';
export type FieldSize = 'small' | 'medium' | 'large';

export interface SelectOption {
  value: string | number;
  label: string;
}

@Component({
  selector: 'lib-form-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-fields.html',
  styleUrls: ['./form-fields.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFields),
      multi: true
    }
  ]
})
export class FormFields implements ControlValueAccessor {
  @Input() type: FieldType = 'text';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() required = false;
  @Input() size: FieldSize = 'medium';
  @Input() options: SelectOption[] = [];
  @Input() rows = 3; // For textarea
  @Input() prefix = ''; // For currency/prefix text
  @Input() suffix = ''; // For suffix text
  @Input() errorMessage = '';
  @Input() helperText = '';
  @Input() fullWidth = true;
  @Input() toggleLabel = '';
  @Input() radioOptions: SelectOption[] = [];
  @Input() checkboxLabel = '';

  @Output() valueChange = new EventEmitter<any>();
  @Output() blur = new EventEmitter<FocusEvent>();
  @Output() focus = new EventEmitter<FocusEvent>();

  value: any = '';
  isFocused = false;
  isTouched = false;

  // ControlValueAccessor implementation
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

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

  onInputChange(event: any): void {
    const value = event.target ? event.target.value : event;
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  onToggleChange(event: any): void {
    this.value = event.target.checked;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  onBlur(event: FocusEvent): void {
    this.isFocused = false;
    this.isTouched = true;
    this.onTouched();
    this.blur.emit(event);
  }

  onFocus(event: FocusEvent): void {
    this.isFocused = true;
    this.focus.emit(event);
  }

  get sizeClass(): string {
    return `field-${this.size}`;
  }

  get hasError(): boolean {
    return !!this.errorMessage && this.isTouched;
  }
}
