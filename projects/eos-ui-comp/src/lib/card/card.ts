import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Tooltip } from "../tooltip/tooltip";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-card',
  imports: [Tooltip, CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class DashboardCard implements OnChanges{
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() value1!: string | number;
  @Input() svgIcon!: string;
  @Input() cardType: string = 'dashboard';
  @Input() taskList: string[] = [];
  // 1 view
  @Input() vua!: string;
  @Input() netWorth!: string;
  @Input() categoryList!: { key: string, value: string, toolTipText: string }[];

  // mfholdings
  @Input() para!: string;
  @Input() small?: string;

  // // fbs
  @Input() currentFbsScore!: number;
  @Input() gen_last_updated_at: string | null = null;
  @Input() genProfile!: any;
  @Input() role!: string;
  @Input() age_group!: string;
  getGenerationName!: string;
  isGenModalVisible = false;
  genPhase: any;

  @Output() cardClick = new EventEmitter<void>();
  safeSvgIcon: any;

  constructor(private sanitizer: DomSanitizer) {
   }

   ngOnChanges(changes: SimpleChanges) {

    if (changes['age_group']?.currentValue) {
      this.getPhaseProfile(changes['age_group'].currentValue);
    }

    if (changes['svgIcon']?.currentValue) {
      this.safeSvgIcon =
        this.sanitizer.bypassSecurityTrustHtml(this.svgIcon);
    }
  }

  @Input() creditCard!: {
    imgUrl: string;
    cardName: string;
    handleClick: () => void;
  };

  getOnlyDate(): string {
    const match = this.gen_last_updated_at?.match(/^\d{2}\/\d{2}\/\d{4}/);
    return match ? match[0] : '';
  }

    getPhaseProfile(value: string) {      
    if (value === '26 - 35') {
      this.genPhase = "Building Phase";
    } else if (value === '36 - 45') {
      this.genPhase = "Growth Phase";
    } else if (value === '46 - 55') {
      this.genPhase = "Sustainability Phase";
    } else if (value === '56 - 60') {
      this.genPhase = "Pre-Retirement Phase";
    }
  }

  get activeIndex(): number {
    if (this.currentFbsScore <= 20) return 0;
    if (this.currentFbsScore <= 40) return 1;
    if (this.currentFbsScore <= 60) return 2;
    if (this.currentFbsScore <= 80) return 3;
    return 4;
  }

  openGenerationModal() {
    // Convert "Gen 2" → "Generation 2"
    const genName = this.genProfile?.replace('Gen', 'Generation').trim();
    this.getGenerationName = genName;
    this.isGenModalVisible = true;
  }

  onClick(): void {
    this.cardClick.emit();
  }
}