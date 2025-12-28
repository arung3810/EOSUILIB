import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-accordion-component',
  imports: [CommonModule],
  templateUrl: './accordion-component.html',
  styleUrl: './accordion-component.css',
})
export class AccordionComponent {
  @Input() title: string = '';
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
