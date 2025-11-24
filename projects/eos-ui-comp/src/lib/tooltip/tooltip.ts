import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'lib-tooltip',
  imports: [],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.css',
})
export class Tooltip {
@Input() tooltipText: string = "";

showTooltip: boolean = false;

toggleTooltip(event: Event) {
  event.stopPropagation();
  this.showTooltip = !this.showTooltip;
}

@HostListener('document:click')
onClickOutside() {
  this.showTooltip = false;
}

}
