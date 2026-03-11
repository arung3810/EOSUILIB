import { Component, signal } from '@angular/core';
import { ButtonComponent, ModalComponent } from '../../../dist/eos-comp';

@Component({
  selector: 'app-modal-page',
  imports: [ ModalComponent, ButtonComponent ],
  templateUrl: './modal-page.html',
  styleUrl: './modal-page.css',
})
export class ModalPage {
  protected readonly isModalOpen = signal(false);
  protected readonly isSideModalOpen = signal(false);
  protected readonly isSideLeftModalOpen = signal(false);
  protected readonly isCustomSideModalOpen = signal(false);
  protected readonly isUploadModalOpen = signal(false);
  protected readonly isTopModalOpen = signal(false);
  protected readonly isBottomModalOpen = signal(false);
  protected readonly isLeftModalOpen = signal(false);
  protected readonly isRightModalOpen = signal(false);
  protected readonly isSmallModalOpen = signal(false);
  protected readonly isMediumModalOpen = signal(false);
  protected readonly isLargeModalOpen = signal(false);
  protected readonly isExtraLargeModalOpen = signal(false);
  protected readonly isModal1Open = signal(false);
  protected readonly isModal2Open = signal(false);
  protected readonly expandedActions = signal<Set<number>>(new Set([4])); // Action 4 expanded by default

  ModalbtnClick1(event: MouseEvent): void{
    console.log(event, 'clicked 1');
  }

  ModalbtnClick2(event: MouseEvent): void{
    console.log(event, 'clicked 2');
  }

  modalButtonClick(event: MouseEvent): void {
    this.isModalOpen.set(true);
  }

  openSideModal(): void {
    this.isSideModalOpen.set(true);
  }

  openCustomSideModal(): void {
    this.isCustomSideModalOpen.set(true);
  }

  onModalOpenChange(open: boolean): void {
    this.isModalOpen.set(open);
  }

  onSideModalOpenChange(open: boolean): void {
    this.isSideModalOpen.set(open);
  }

  onCustomSideModalOpenChange(open: boolean): void {
    this.isCustomSideModalOpen.set(open);
  }

  toggleAction(actionId: number): void {
    const expanded = new Set(this.expandedActions());
    if (expanded.has(actionId)) {
      expanded.delete(actionId);
    } else {
      expanded.add(actionId);
    }
    this.expandedActions.set(expanded);
  }

  isActionExpanded(actionId: number): boolean {
    return this.expandedActions().has(actionId);
  }

  openUploadModal(): void {
    this.isUploadModalOpen.set(true);
  }

  onUploadModalOpenChange(open: boolean): void {
    this.isUploadModalOpen.set(open);
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      console.log('Files selected:', input.files);
      // Handle file upload logic here
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      console.log('Files dropped:', event.dataTransfer.files);
      // Handle file upload logic here
    }
  }

  openTopModal(): void {
    this.isTopModalOpen.set(true);
  }

  onTopModalOpenChange(open: boolean): void {
    this.isTopModalOpen.set(open);
  }

  openBottomModal(): void {
    this.isBottomModalOpen.set(true);
  }

  onBottomModalOpenChange(open: boolean): void {
    this.isBottomModalOpen.set(open);
  }

  openLeftModal(): void {
    this.isLeftModalOpen.set(true);
  }

  onLeftModalOpenChange(open: boolean): void {
    this.isLeftModalOpen.set(open);
  }

  openRightModal(): void {
    this.isRightModalOpen.set(true);
  }

  onRightModalOpenChange(open: boolean): void {
    this.isRightModalOpen.set(open);
  }

  openSmallModal(): void {
    this.isSmallModalOpen.set(true);
  }

  onSmallModalOpenChange(open: boolean): void {
    this.isSmallModalOpen.set(open);
  }

  openMediumModal(): void {
    this.isMediumModalOpen.set(true);
  }

  onMediumModalOpenChange(open: boolean): void {
    this.isMediumModalOpen.set(open);
  }

  openLargeModal(): void {
    this.isLargeModalOpen.set(true);
  }

  onLargeModalOpenChange(open: boolean): void {
    this.isLargeModalOpen.set(open);
  }

  openExtraLargeModal(): void {
    this.isExtraLargeModalOpen.set(true);
  }

  onExtraLargeModalOpenChange(open: boolean): void {
    this.isExtraLargeModalOpen.set(open);
  }

  openSideLeftModal(): void {
    this.isSideLeftModalOpen.set(true);
  }

  onSideLeftModalOpenChange(open: boolean): void {
    this.isSideLeftModalOpen.set(open);
  }

  openModal1(): void {
    this.isModal1Open.set(true);
  }

  onModal1OpenChange(open: boolean): void {
    this.isModal1Open.set(open);
  }

  openModal2(): void {
    this.isModal2Open.set(true);
  }

  onModal2OpenChange(open: boolean): void {
    this.isModal2Open.set(open);
  }
}
