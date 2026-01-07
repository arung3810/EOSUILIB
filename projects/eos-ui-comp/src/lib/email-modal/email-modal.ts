import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-email-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './email-modal.html',
  styleUrls: ['./email-modal.css'],
})
export class EmailModalComponent {
  @Input() open = false;
  @Input() title = 'Update your Email Id';
  @Input() subtitle = 'Confirm the required details to complete the process';
  @Input() emailLabel = 'New Email ID';
  @Input() emailValue = '';
  @Input() cancelButtonText = 'Cancel';
  @Input() sendButtonText = 'Send';
  @Input() closeOnBackdrop = true;

  @Output() openChange = new EventEmitter<boolean>();
  @Output() cancel = new EventEmitter<void>();
  @Output() send = new EventEmitter<string>();
  @Output() closed = new EventEmitter<void>();

  currentEmail = '';

  ngOnInit() {
    this.currentEmail = this.emailValue;
  }

  close(): void {
    if (!this.open) {
      return;
    }
    this.open = false;
    this.openChange.emit(false);
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (!this.closeOnBackdrop || !this.open) {
      return;
    }
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  onCancel(): void {
    this.cancel.emit();
    this.close();
  }

  onSend(): void {
    this.send.emit(this.currentEmail);
    this.close();
  }

  onCloseClick(): void {
    this.close();
  }
}