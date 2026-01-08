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

ModalbtnClick1(event: MouseEvent): void{
  console.log(event, 'clicked 1');
}

ModalbtnClick2(event: MouseEvent): void{
  console.log(event, 'clicked 2');
}

modalButtonClick(event: MouseEvent): void {
  this.isModalOpen.set(true);
}

onModalOpenChange(open: boolean): void {
  this.isModalOpen.set(open);
}
}
