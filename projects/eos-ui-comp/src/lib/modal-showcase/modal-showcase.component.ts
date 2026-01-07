import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal';
import { EmailModalComponent } from '../email-modal/email-modal';
// import { WellaModalComponent } from '../wella-modal/wella-modal';

@Component({
  selector: 'lib-modal-showcase',
  standalone: true,
  imports: [CommonModule, ModalComponent, EmailModalComponent],
  templateUrl: './modal-showcase.component.html',
  styleUrls: ['./modal-showcase.component.css']
})
export class ModalShowcaseComponent {
  isDeleteModalOpen = false;
  isConfirmModalOpen = false;
  isInfoModalOpen = false;
  isWarningModalOpen = false;
  isEmailModalOpen = false;
  isWellaModalOpen = false;

  // Delete Modal
  openDeleteModal(): void {
    this.isDeleteModalOpen = true;
  }

  onDeleteYes(event: MouseEvent): void {
    console.log('Delete confirmed');
    this.isDeleteModalOpen = false;
  }

  onDeleteNo(event: MouseEvent): void {
    console.log('Delete cancelled');
    this.isDeleteModalOpen = false;
  }

  // Confirm Modal
  openConfirmModal(): void {
    this.isConfirmModalOpen = true;
  }

  onConfirmYes(event: MouseEvent): void {
    console.log('Action confirmed');
    this.isConfirmModalOpen = false;
  }

  onConfirmNo(event: MouseEvent): void {
    console.log('Action cancelled');
    this.isConfirmModalOpen = false;
  }

  // Info Modal
  openInfoModal(): void {
    this.isInfoModalOpen = true;
  }

  onInfoOk(event: MouseEvent): void {
    console.log('Info acknowledged');
    this.isInfoModalOpen = false;
  }

  onInfoClose(event: MouseEvent): void {
    this.isInfoModalOpen = false;
  }

  // Warning Modal
  openWarningModal(): void {
    this.isWarningModalOpen = true;
  }

  onWarningProceed(event: MouseEvent): void {
    console.log('Warning acknowledged, proceeding');
    this.isWarningModalOpen = false;
  }

  onWarningCancel(event: MouseEvent): void {
    console.log('Warning cancelled');
    this.isWarningModalOpen = false;
  }

  // Email Modal
  openEmailModal(): void {
    this.isEmailModalOpen = true;
  }

  onEmailSend(email: string): void {
    console.log('Email sent to:', email);
    this.isEmailModalOpen = false;
  }

  onEmailCancel(): void {
    console.log('Email update cancelled');
    this.isEmailModalOpen = false;
  }

  // Wella Modal
  openWellaModal(): void {
    this.isWellaModalOpen = true;
  }

  onWellaClose(): void {
    console.log('Wella modal closed');
    this.isWellaModalOpen = false;
  }
}