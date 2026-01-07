import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, DropdownItem } from '../button/button.component';

@Component({
  selector: 'lib-button-showcase',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.css']
})
export class ButtonShowcaseComponent {
  dropdownItems: DropdownItem[] = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ];

  onButtonClick(event: MouseEvent): void {
    console.log('Button clicked:', event);
  }

  onDropdownClick(event: MouseEvent): void {
    console.log('Dropdown clicked:', event);
  }
}