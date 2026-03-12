import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../../../projects/eos-ui-comp/src/lib/form-controls/text-input/text-input.component';
import { TextareaComponent } from '../../../projects/eos-ui-comp/src/lib/form-controls/textarea/textarea.component';
import { SelectComponent, SelectOption } from '../../../projects/eos-ui-comp/src/lib/form-controls/select/select.component';
import { ToggleComponent } from '../../../projects/eos-ui-comp/src/lib/form-controls/toggle/toggle.component';
import { RadioGroupComponent, RadioOption } from '../../../projects/eos-ui-comp/src/lib/form-controls/radio-group/radio-group.component';
import { CheckboxGroupComponent, CheckboxOption } from '../../../projects/eos-ui-comp/src/lib/form-controls/checkbox-group/checkbox-group.component';
import { InputWithIconComponent } from '../../../projects/eos-ui-comp/src/lib/form-controls/input-with-icon/input-with-icon.component';

@Component({
  selector: 'app-formfield-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    TextareaComponent,
    SelectComponent,
    ToggleComponent,
    RadioGroupComponent,
    CheckboxGroupComponent,
    InputWithIconComponent
  ],
  templateUrl: './formfield-page.html',
  styleUrl: './formfield-page.css',
})
export class FormfieldPage {
  demoForm: FormGroup;
  formValues: any = {};

  // Options for select dropdown
  countryOptions: SelectOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'in', label: 'India' }
  ];

  // Options for fruit select
  fruitOptions: SelectOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'mango', label: 'Mango' }
  ];

  // Options for radio group
  genderOptions: RadioOption[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  // Options for programming languages radio
  languageOptions: RadioOption[] = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' }
  ];

  // Options for checkbox group
  interestOptions: CheckboxOption[] = [
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'reading', label: 'Reading' },
    { value: 'coding', label: 'Coding' }
  ];

  // Options for skills checkbox
  skillOptions: CheckboxOption[] = [
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' }
  ];

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      // Text inputs
      name: [''],
      email: [''],
      phone: [''],
      age: [''],
      birthDate: [''],
      website: [''],

      // Disabled text input
      disabledField: [{ value: 'This field is disabled', disabled: true }],

      // Textarea
      bio: [''],
      comments: [''],

      // Select
      country: ['us'],
      fruit: ['apple'],

      // Toggle
      notifications: [false],
      marketing: [true],
      disabledToggle: [{ value: false, disabled: true }],

      // Radio
      gender: ['male'],
      language: ['javascript'],

      // Checkbox
      interests: [['coding']],
      skills: [['html', 'css']],

      // Input with icon
      salary: [''],
      price: [''],
      discount: ['']
    });

    // Subscribe to form changes to show current values
    this.demoForm.valueChanges.subscribe(values => {
      this.formValues = values;
    });

    // Set initial values
    this.formValues = this.demoForm.value;
  }

  resetForm() {
    this.demoForm.reset({
      country: 'us',
      fruit: 'apple',
      notifications: false,
      marketing: true,
      gender: 'male',
      language: 'javascript',
      interests: ['coding'],
      skills: ['html', 'css'],
      disabledField: 'This field is disabled'
    });
  }

  submitForm() {
    console.log('Form Values:', this.demoForm.value);
    alert('Form submitted! Check console for values.');
  }
}
