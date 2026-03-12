import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusFormComponent } from '../bonus-form/bonus-form';

@Component({
  selector: 'lib-bonus-form-showcase',
  standalone: true,
  imports: [CommonModule, BonusFormComponent],
  templateUrl: './bonus-form-showcase.component.html',
  styleUrls: ['./bonus-form-showcase.component.css']
})
export class BonusFormShowcaseComponent {
}
