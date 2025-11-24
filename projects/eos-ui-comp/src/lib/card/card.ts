import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class DashboardCard {
  @Input() title!: string;          
  @Input() value!: string | number; 
  @Input() value1!: string | number; 
  @Input() svgIcon!: string;        
  @Input() cardType: string = 'dashboard';        
  @Input() taskList: string[] = [];        
  @Output() cardClick = new EventEmitter<void>();
  safeSvgIcon: any;

  constructor(private sanitizer: DomSanitizer){}

  onClick(): void {
    console.log('sds');
    this.cardClick.emit();
  }

  ngOnChanges() {
    if (this.svgIcon) {
      this.safeSvgIcon = this.sanitizer.bypassSecurityTrustHtml(this.svgIcon);
    }
  }
}
