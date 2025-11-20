import { Component, Input, Output, EventEmitter, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface DropdownItem {
  label: string;
  [key: string]: any;
}

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})  
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input({ transform: booleanAttribute }) disabled = false;
  @Input({ transform: booleanAttribute }) loading = false;
  @Input({ transform: booleanAttribute }) fullWidth = false;
  @Output() clicked = new EventEmitter<MouseEvent>();
  @Input({ transform: booleanAttribute }) dropdown = false;
  @Input({ transform: booleanAttribute }) openOnHover = false;
  @Input({ transform: booleanAttribute }) openOnClick = false;
  @Input() prefixIcon = '';
  @Input() suffixIcon = '';
  @Input() dropdownList: DropdownItem[] = [];

  dropdownOpen = false;

  openDropdown() {
    if(this.dropdown)
    this.dropdownOpen = true;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }
  
  toggleDropdown() {
    if (this.dropdown) {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }

  getButtonClasses(): string {
    const classes = [
      `button-${this.variant}`,
      `button-${this.size}`
    ];

    if (this.fullWidth) {
      classes.push('button-full-width');
    }

    return classes.join(' ');
  }

  handleClick(event: MouseEvent): void {
    if (!this.disabled && !this.loading) {
      if (this.dropdown && this.openOnClick) {
        this.toggleDropdown();
      }
      this.clicked.emit(event);
    }
  }

  onDropdownItemClick(item: DropdownItem, event: MouseEvent): void {
    event.stopPropagation();
    // Emit item click event if needed
    // You can add an @Output() for dropdown item clicks here
    this.closeDropdown();
  }
}