import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-date-picker-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './date-picker-component.html',
  styleUrl: './date-picker-component.css',
})
export class DatePickerComponent {

  showModal = false;
  selectedDate: string = '';

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  applyDate() {
    this.closeModal();
  }

}
