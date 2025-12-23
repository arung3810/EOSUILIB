import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-search',
  templateUrl: './search.html',
  imports:[ CommonModule ],
  styleUrls: ['./search.css'],
})
export class Search {
  @Input() placeholder!: string;
  @Input() type: string = 'text';
  @Input() svgIcon?: string; // optional icon HTML
  @Input() btnName?: string; // optional button text
  @Input() half: string = "true";
  @Output() inputChange = new EventEmitter<string>();
  @Output() buttonClick = new EventEmitter<void>();

  value: string = '';

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.inputChange.emit(this.value);
  }

  handleButtonClick() {
    this.buttonClick.emit();
  }
}
