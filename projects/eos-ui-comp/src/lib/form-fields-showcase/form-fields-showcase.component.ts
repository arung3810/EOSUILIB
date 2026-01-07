import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFields } from '../form-fields/form-fields';

@Component({
  selector: 'lib-form-fields-showcase',
  standalone: true,
  imports: [CommonModule, FormFields],
  templateUrl: './form-fields-showcase.component.html',
  styleUrls: ['./form-fields-showcase.component.css']
})
export class FormFieldsShowcaseComponent {
}