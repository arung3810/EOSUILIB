import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { NgApexchartsModule } from "ng-apexcharts";
import { PieChartWithLegend, ChartData } from "../pie-chart-with-legend/pie-chart-with-legend";

@Component({
  selector: 'lib-card',
  imports: [CommonModule, NgApexchartsModule, PieChartWithLegend],
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
  @Input() textColor!: string;
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

    // Sanitize regimeIcon when input changes
    if (changes['regimeIcon']?.currentValue && this.regimeIcon) {
      this.safeRegimeIcon =
        this.sanitizer.bypassSecurityTrustHtml(this.regimeIcon);
    }

    // Sanitize taxIncomeItems icons when input changes
    if (changes['taxIncomeItems']?.currentValue) {
      this.sanitizedTaxIncomeItems = this.taxIncomeItems.map(item => ({
        ...item,
        safeIcon: item.icon ? this.sanitizer.bypassSecurityTrustHtml(item.icon) : undefined
      }));
    }

    // Sanitize willCardSvgIcon when input changes
    if (changes['willCardSvgIcon']?.currentValue && this.willCardSvgIcon) {
      this.safeWillCardIcon =
        this.sanitizer.bypassSecurityTrustHtml(this.willCardSvgIcon);
    }

    // Sanitize n3xt3monthIcon when input changes
    if (changes['n3xt3monthIcon']?.currentValue && this.n3xt3monthIcon) {
      this.safeN3xt3monthIcon =
        this.sanitizer.bypassSecurityTrustHtml(this.n3xt3monthIcon);
    }

    // Sanitize nomineeHeaderIcon when input changes
    if (changes['nomineeHeaderIcon']?.currentValue && this.nomineeHeaderIcon) {
      this.safeNomineeHeaderIcon =
        this.sanitizer.bypassSecurityTrustHtml(this.nomineeHeaderIcon);
    }

    // Sanitize financialAnalysisButtonIcon when input changes
    if (changes['financialAnalysisButtonIcon']?.currentValue && this.financialAnalysisButtonIcon) {
      this.safeFinancialAnalysisButtonIcon =
        this.sanitizer.bypassSecurityTrustHtml(this.financialAnalysisButtonIcon);
    }

    // Sanitize behavioralIcon when input changes
    if (changes['behavioralIcon']?.currentValue && this.behavioralIcon) {
      this.safeBehavioralIcon =
        this.sanitizer.bypassSecurityTrustHtml(this.behavioralIcon);
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
  @Input() current_value !: string;
  @Input() MFHoldingsTitle!: string; 
  @Input() MfholdingList2 !: { label: string, equityPercentage: number, equityValue: string }[];

  // Asset Card inputs
  @Input() assetChartData!: ChartData[];
  @Input() assetLegendData!: { label: string, percentage: string, color: string }[];
  @Input() simulationPeriod?: string;
  @Input() showSimulationPeriod?: boolean = true;
  @Input() assetChartType?: 'pie' | 'donut' = 'donut';
  @Input() assetChartWidth?: number = 260;
  @Input() assetChartHeight?: number = 260;
  @Input() assetChartColors?: string[];
  @Input() assetChartShowTooltip?: boolean = true;
  @Input() assetChartDonutSize?: string = '55%';

  // Tax Income Overview Card inputs
  @Input() taxIncomeChartData!: ChartData[];
  @Input() taxIncomeItems!: {
    label: string,
    value: string,
    color: string,
    icon?: string,
    tooltipData?: {
      title: string,
      items: {
        label: string,
        value: string,
        subtext?: string
      }[]
    }
  }[];
  // Sanitized version of taxIncomeItems with safe HTML for icons
  sanitizedTaxIncomeItems: {
    label: string,
    value: string,
    color: string,
    safeIcon?: any,
    tooltipData?: {
      title: string,
      items: {
        label: string,
        value: string,
        subtext?: string
      }[]
    }
  }[] = [];
  @Input() grossIncome?: string;
  @Input() taxIncomeChartWidth?: number = 350;
  @Input() taxIncomeChartHeight?: number = 350;
  @Input() taxIncomeChartColors?: string[] = ['#5B93FF', '#7FCDA4', '#FFD66B'];
  @Input() taxIncomeDonutSize?: string = '65%';
  @Input() taxIncomeChartShowTooltip?: boolean = false;

  // Potential Tax Savings Card inputs
  @Input() taxSavingsAmount?: string;
  @Input() taxSavingsSubtitle?: string;

  // Tax Regime Comparison Card inputs
  @Input() regimeTitle?: string;
  @Input() regimeIcon?: string;
  safeRegimeIcon: any;
  @Input() isRecommended?: boolean = false;
  @Input() regimeTaxAmount?: string;
  @Input() taxableIncome?: string;
  @Input() effectiveTaxRate?: string;

  // Will Card inputs
  @Input() willCardLabel?: string;
  @Input() willCardValue?: string;
  @Input() willCardIcon?: string; // URL to icon image
  @Input() willCardSvgIcon?: string; // SVG icon as string
  safeWillCardIcon: any;

  // FWP Generate Card inputs
  @Input() fwpTitle?: string = 'FWP Generated';
  @Input() fwpSubtitle?: string = 'Last generated on 19 January, 2026';
  @Input() fwpPreviewText?: string = 'Preview';
  @Input() fwpGenerateText?: string = 'Generate FWP';
  @Input() fwpPreviewDisabled?: boolean = false;
  @Input() fwpGenerateDisabled?: boolean = false;
  @Output() fwpPreviewClick = new EventEmitter<void>();
  @Output() fwpGenerateClick = new EventEmitter<void>();

  // n3xt3month Card inputs
  @Input() n3xt3monthTitle?: string;
  @Input() n3xt3monthValue?: string;
  @Input() n3xt3monthIcon?: string; // SVG icon as string
  safeN3xt3monthIcon: any;

  // Nominee Card inputs
  @Input() nomineeTitle?: string = 'Investment Nominees';
  @Input() nomineeSubtitle?: string = 'Nominees';
  @Input() nomineeHeaderIcon?: string; // SVG icon as string
  safeNomineeHeaderIcon: any;
  @Input() nomineeList!: {
    name: string,
    relation: string,
    initials: string,
    avatarColor?: string
  }[];

  // Financial Analysis Card inputs
  @Input() financialAnalysisTitle?: string = 'Life Insurance';
  @Input() financialAnalysisButtonText?: string = 'View Risks';
  @Input() financialAnalysisButtonIcon?: string; // SVG icon as string
  safeFinancialAnalysisButtonIcon: any;
  @Input() financialArrow: boolean = true;
  @Input() financialAnalysisActualLabel?: string = 'Actual Value';
  @Input() financialAnalysisIdealLabel?: string = 'Ideal';
  @Input() financialAnalysisActualValue?: string = '0';
  @Input() financialAnalysisIdealValue?: string = '0.0L';
  @Input() financialAnalysisCurrency?: string = '₹';
  @Input() financialAnalysisTooltipText?: string; // Tooltip text for button
  @Output() financialAnalysisButtonClick = new EventEmitter<void>();

  onFwpPreviewClick(): void {
    if (!this.fwpPreviewDisabled) {
      this.fwpPreviewClick.emit();
    }
  }

  onFwpGenerateClick(): void {
    if (!this.fwpGenerateDisabled) {
      this.fwpGenerateClick.emit();
    }
  }

  onFinancialAnalysisButtonClick(): void {
    this.financialAnalysisButtonClick.emit();
  }

  onClick(): void {
    this.cardClick.emit();
  }

  // lifestage
  @Input() lifeStageTitle!: string;
  @Input() lifeStageContent!: string;
  @Input() lifeStageAgeRange!: string;

  // Behavioral Biases Card inputs
  @Input() behavioralHeader?: string = 'MoneySign®';
  @Input() behavioralTitle?: string;
  @Input() behavioralSubtitle?: string = 'Behavioural Biases';
  @Input() behavioralIcon?: string; // SVG icon as string
  safeBehavioralIcon: any;
  @Input() behavioralBiasesList!: {
    label: string,
    showInfo?: boolean,
    tooltipContent?: string
  }[];
  @Output() biasInfoClick = new EventEmitter<any>();

  onBiasInfoClick(bias: any): void {
    this.biasInfoClick.emit(bias);
  }

  // TER Chart Card inputs
  @Input() terChartTitle?: string = 'Existing TER';
  @Input() terChartPeriods!: {
    label: string,
    value: string
  }[];

  // Advised TER Card inputs
  @Input() advisedTERTitle?: string = 'Advised TER';
  @Input() advisedTERValue?: string;
  @Input() advisedTERColorType?: 'green' | 'red' = 'green'; // Determines if color should be green or red

  // Impact Advise Card inputs
  @Input() impactAdviseTitle?: string = 'Impact With';
  @Input() impactAdviseTitleHighlight?: string = 'Advise';
  @Input() impactAdviseCurrency?: string = '₹';
  @Input() impactAdviseAmount?: string = '4,73,96,33,200';
  @Input() impactAdvisePercentage?: string = '586351.69%';

  // Actions List Card inputs
  @Input() actionsListTitle?: string = 'Actions for this year';
  @Input() actionsListItems!: string[];
  @Input() showAddButton?: boolean = true;
  @Output() actionsAddClick = new EventEmitter<void>();
  @Output() actionEdit = new EventEmitter<number>();
  @Output() actionDelete = new EventEmitter<number>();

  onActionsAddClick(): void {
    this.actionsAddClick.emit();
  }

  onActionEdit(index: number): void {
    this.actionEdit.emit(index);
  }

  onActionDelete(index: number): void {
    this.actionDelete.emit(index);
  }

}