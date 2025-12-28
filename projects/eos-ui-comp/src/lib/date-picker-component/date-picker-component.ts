import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-date-picker-component',
  imports: [],
  templateUrl: './date-picker-component.html',
  styleUrl: './date-picker-component.css',
})
export class DatePickerComponent implements OnInit {
  selectedDate: string = '';

  @Output() dateChange = new EventEmitter<string>();

  ngOnInit(): void {
    // Initialize with current date in yyyy-MM-dd format
    const today = new Date();
    this.selectedDate = this.formatDate(today);
    this.dateChange.emit(this.selectedDate);
  }

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
    this.dateChange.emit(this.selectedDate);
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

}
