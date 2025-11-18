import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'lib-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],
})
export class ModalComponent {
  private _open = false;

  @Input()
  set open(value: boolean) {
    this._open = value;
  }

  get open(): boolean {
    return this._open;
  }

  @Input() title?: string;
  @Input() message?: string;
  @Input() button1?: string;
  @Input() button2?: string;
  @Input() closeOnBackdrop = true;
  @Input() size: ModalSize = 'md';
  @Input() hideCloseButton = false;
  @Input() ariaDescribedBy?: string;

  @Output() click1 = new EventEmitter<MouseEvent>();
  @Output() click2 = new EventEmitter<MouseEvent>();
  @Output() openChange = new EventEmitter<boolean>();
  @Output() closed = new EventEmitter<void>();

  get dialogRole(): string {
    return 'dialog';
  }

  get sizeClass(): string {
    return `modal-${this.size}`;
  }

  close(): void {
    if (!this._open) {
      return;
    }

    this._open = false;
    this.openChange.emit(false);
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (!this.closeOnBackdrop || !this._open) {
      return;
    }

    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  handleClick1(event: MouseEvent): void {
    this.click1.emit(event);
  }
  
  handleClick2(event: MouseEvent): void {
    this.click2.emit(event);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this._open) {
      this.close();
    }
  }
}