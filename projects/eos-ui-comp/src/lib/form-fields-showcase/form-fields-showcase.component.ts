import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFields, SelectOption } from '../form-fields/form-fields';

@Component({
  selector: 'lib-form-fields-showcase',
  standalone: true,
  imports: [CommonModule, FormFields],
  templateUrl: './form-fields-showcase.component.html',
  styleUrls: ['./form-fields-showcase.component.css']
})
export class FormFieldsShowcaseComponent {
  countryOptions: SelectOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'in', label: 'India' }
  ];

  genderOptions: SelectOption[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];
}