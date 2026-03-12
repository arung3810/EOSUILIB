import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-wella-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wella-modal.html',
  styleUrls: ['./wella-modal.css']
})
export class WellaModalComponent {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
