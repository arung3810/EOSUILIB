import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Tooltip } from "../tooltip/tooltip";
@Component({
  selector: 'lib-card',
  imports: [Tooltip],
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
  // 1 view
  @Input() vua!: string;
  @Input() netWorth!: string;
  @Input() categoryList!: { key : string, value: string, toolTipText: string }[];

  @Output() cardClick = new EventEmitter<void>();
  safeSvgIcon: any;

  constructor(private sanitizer: DomSanitizer){}

  @Input() creditCard!: {
    imgUrl: string;
    cardName: string;
    handleClick: () => void;
  };

  onClick(): void {
    this.cardClick.emit();
  }

  ngOnChanges() {
    if (this.svgIcon) {
      this.safeSvgIcon = this.sanitizer.bypassSecurityTrustHtml(this.svgIcon);
    }
  }
}