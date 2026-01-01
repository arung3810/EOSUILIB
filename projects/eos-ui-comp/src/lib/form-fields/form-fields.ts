import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-form-fields',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-fields.html',
  styleUrl: './form-fields.css',
})
export class FormFields {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      textInput: [''],
      emailInput: [''],
      numberInput: [''],
      textareaInput: [''],
      toggleLeft: [false],

      disabledText: [{ value: '', disabled: true }],
      dateInput: [''],
      amountInput: [''],
      fruit: ['apple'],
      toggleRight: [{ value: false, disabled: true }]
    });
  }
}
