import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-dashboard-card',
  imports: [],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.css',
})
export class DashboardCard {
  @Input() title!: string;          
  @Input() value!: string | number; 
  @Input() svgIcon!: string;        
  @Output() cardClick = new EventEmitter<void>();
  safeSvgIcon: any;

  constructor(private sanitizer: DomSanitizer){}

  onClick(): void {
    this.cardClick.emit();
  }

  ngOnChanges() {
    if (this.svgIcon) {
      this.safeSvgIcon = this.sanitizer.bypassSecurityTrustHtml(this.svgIcon);
    }
  }
}
