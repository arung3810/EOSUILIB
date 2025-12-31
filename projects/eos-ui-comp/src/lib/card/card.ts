import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Tooltip } from "../tooltip/tooltip";
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: 'lib-card',
  imports: [Tooltip, CommonModule, NgApexchartsModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class DashboardCard implements OnChanges, AfterViewInit, OnDestroy {
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

  // carousal  
  @ViewChild('portfolioFundCarousel') portfolioFundCarousel!: ElementRef;
  splide: any;
  @Input() carousalList!:{
      fund1: string,
      fund2: string,
      overlap: Number,
      start: Number,
      end: Number
  }[];

  ngAfterViewInit() {
    if (this.cardType === 'carousal' && this.portfolioFundCarousel) {
      this.initilizeFundCarousel();
    }
  }

  ngOnDestroy() {
    if (this.splide) {
      this.splide.destroy();
    }
  }

  initilizeFundCarousel() {
    if (this.splide) {
      this.splide.destroy();
    }

    if (this.carousalList && this.carousalList.length && this.portfolioFundCarousel) {
      this.splide = new Splide(this.portfolioFundCarousel.nativeElement, {
        type: 'slide',
        arrows: false,
        perPage: 3,
        keyboard: false,
        perMove: 3,
        gap: '1.5em',
        pagination: false,
        breakpoints: {
          768: {
            perPage: 1,
            perMove: 1,
          },
          1024: {
            perPage: 2,
            perMove: 2,
          }
        }
      }).mount();

      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        const btnPrev = document.getElementById('btnPrev') as HTMLSpanElement;
        const btnNext = document.getElementById('btnNext') as HTMLSpanElement;

        if (btnPrev && btnNext) {
          // Remove existing event listeners to avoid duplication
          btnNext.replaceWith(btnNext.cloneNode(true));
          btnPrev.replaceWith(btnPrev.cloneNode(true));

          // Reassign the elements after cloning
          const newBtnPrev = document.getElementById('btnPrev') as HTMLSpanElement;
          const newBtnNext = document.getElementById('btnNext') as HTMLSpanElement;

          if (newBtnPrev && newBtnNext) {
            // Event listener for moved event
            this.splide.on('moved', () => {
              this.updateButtonState(newBtnPrev, newBtnNext);
            });
            
            // Initialize button state
            this.updateButtonState(newBtnPrev, newBtnNext);
            
            // Event listeners for button clicks
            newBtnNext.addEventListener('click', () => {
              if (!newBtnNext.classList.contains('disabled')) {
                this.splide.go('>'); // Move to the next set of slides
                this.updateButtonState(newBtnPrev, newBtnNext); // Update button state after moving to the next slide
              }
            });

            newBtnPrev.addEventListener('click', () => {
              if (!newBtnPrev.classList.contains('disabled')) {
                this.splide.go('<'); // Move to the previous set of slides
                this.updateButtonState(newBtnPrev, newBtnNext); // Update button state after moving to the previous slide
              }
            });
          }
        }
      }, 100);
    }
  }

   updateButtonState(newBtnPrev: HTMLSpanElement, newBtnNext: HTMLSpanElement) {
    // Disable left button when at the beginning
    if (this.splide.index === 0) {
      newBtnPrev.style.pointerEvents = 'none';
      newBtnPrev.classList.add('disabled');
    } else {
      newBtnPrev.style.pointerEvents = 'auto';
      newBtnPrev.classList.remove('disabled');
    }
    // Disable right button when at the last slide
    if (this.splide.index >= this.splide.length - this.splide.options.perPage) {
      newBtnNext.style.pointerEvents = 'none';
      newBtnNext.classList.add('disabled');
    } else {
      newBtnNext.style.pointerEvents = 'auto';
      newBtnNext.classList.remove('disabled');
    }
  }

  constructor(private sanitizer: DomSanitizer) {}

   ngOnChanges(changes: SimpleChanges) {
    if (changes['age_group']?.currentValue) {
      this.getPhaseProfile(changes['age_group'].currentValue);
    }

    if (changes['svgIcon']?.currentValue) {
      this.safeSvgIcon =
        this.sanitizer.bypassSecurityTrustHtml(this.svgIcon);
    }

    if (changes['carousalList']?.currentValue && this.portfolioFundCarousel) {
      // Reinitialize carousel when data changes
      setTimeout(() => {
        this.initilizeFundCarousel();
      }, 100);
    }

    if(changes['series']?.currentValue || changes['colors']?.currentValue || changes['stroke']?.currentValue){
      this.chart = {
      series: this.series,
      chart: {
        width: this.width,
        height: this.height,
        type: 'donut',
      },
      colors: this.colors,
      legend: { show: false },
      labels: { show: false },
      stroke: {
        width: this.stroke,
        color: ['#fff'],
        show: true,
      },
      tooltip: { enabled: false },
      dataLabels: { enabled: false },
      plotOptions: {
        pie: {
          startAngle: 0,
          donut: {
            size: '47%',
            dataLabels: {
              enabled: false,
            },
          },
        },
      },
      states: {
        hover: {
          filter: {
            type: 'none',
          }
        },
      }
    };
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
  
  // mfholdings pie card
  chart: any;
  @Input() series!: number[];
  @Input() stroke?: number = 0;
  @Input() width?: number = 100;
  @Input() height?: number = 130;
  @Input() colors!: string[];  //['#FF8B81', '#7FCDA4']
  @Input() mf_allocation_not_fetched !: boolean;
  @Input() current_value !: number;
  @Input() MfholdingList2 !: { label: string, equityPercentage: number, equityValue: number }[];

  onClick(): void {
    this.cardClick.emit();
  }
}