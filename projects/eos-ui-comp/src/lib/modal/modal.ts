import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  OnDestroy,
  OnInit,
} from '@angular/core';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl';
type ModalPosition = 'left' | 'right' | 'center';

@Component({
  selector: 'lib-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  private static modalStack: ModalComponent[] = [];
  private _open = false;
  private _isClosing = false;

  @Input()
  set open(value: boolean) {
    const previousValue = this._open;
    this._open = value;

    if (value && !previousValue) {
      // Modal is opening
      this._isClosing = false;
      this.disableBodyScroll();
      this.addToStack();
    } else if (!value && previousValue) {
      // Modal is closing
      this.removeFromStack();
    }
  }

  get open(): boolean {
    return this._open;
  }

  get isClosing(): boolean {
    return this._isClosing;
  }

  @Input() heading?: string;
  @Input() title?: string;
  @Input() message?: string;
  @Input() button1?: string;
  @Input() button2?: string;
  @Input() closeOnBackdrop = true;
  @Input() closeOnEscape = true;
  @Input() size: ModalSize = 'md';
  @Input() position: ModalPosition = 'center';
  @Input() hideCloseButton = false;
  @Input() showHeader = true;
  @Input() showFooter = false;
  @Input() ariaDescribedBy?: string;

  @Output() click1 = new EventEmitter<MouseEvent>();
  @Output() click2 = new EventEmitter<MouseEvent>();
  @Output() openChange = new EventEmitter<boolean>();
  @Output() closed = new EventEmitter<void>();

  get isSideModal(): boolean {
    return this.position === 'left' || this.position === 'right';
  }

  get isCenterModal(): boolean {
    return this.position === 'center';
  }

  close(): void {
    if (!this._open || this._isClosing) {
      return;
    }

    this._isClosing = true;

    // Wait for animation to complete before actually closing
    setTimeout(() => {
      this._open = false;
      this._isClosing = false;
      this.enableBodyScroll();
      this.openChange.emit(false);
      this.closed.emit();
    }, 300); // Match the animation duration
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
    // Only close if this is the topmost modal in the stack
    if (this._open && this.closeOnEscape && this.isTopmost()) {
      this.close();
    }
  }

  private disableBodyScroll(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  private enableBodyScroll(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  private addToStack(): void {
    if (!ModalComponent.modalStack.includes(this)) {
      ModalComponent.modalStack.push(this);
    }
  }

  private removeFromStack(): void {
    const index = ModalComponent.modalStack.indexOf(this);
    if (index > -1) {
      ModalComponent.modalStack.splice(index, 1);
    }
  }

  private isTopmost(): boolean {
    return ModalComponent.modalStack.length > 0 &&
           ModalComponent.modalStack[ModalComponent.modalStack.length - 1] === this;
  }

  ngOnInit(): void {
    // Add to stack if already open on init
    if (this._open) {
      this.addToStack();
    }
  }

  ngOnDestroy(): void {
    // Ensure body scroll is re-enabled when component is destroyed
    this.enableBodyScroll();
    // Remove from stack when destroyed
    this.removeFromStack();
  }
}