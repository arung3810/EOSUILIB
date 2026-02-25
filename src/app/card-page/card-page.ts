import { Component } from '@angular/core';
import { DashboardCard } from '../../../dist/eos-comp';
import { PieChartWithLegend, ChartData } from '../../../projects/eos-ui-comp/src/public-api';

@Component({
  selector: 'app-card-page',
  imports: [ DashboardCard, PieChartWithLegend ],
  templateUrl: './card-page.html',
  styleUrl: './card-page.css',
})
export class CardPage {

  onDashboardClick(){
    console.log('dasboard click');
  }

  // FWP Generate Card handlers
  onFwpPreview() {
    console.log('FWP Preview clicked');
  }

  onFwpGenerate() {
    console.log('FWP Generate clicked');
  }

  categoryList = [
    {
      key:'Assets',
      toolTipText: "",
      value:'₹ 2,74,26,805'
    },
    {
      key:'Liabilities',
      toolTipText: "Loan Details Auto-Updated",
      value:'₹ 5,97,600'
    },
    {
      key:'Insurance',
      toolTipText: "",
      value:'₹ 1,50,00,000'
    },
    {
      key:'Income',
      toolTipText: "Loan Details Auto-Updated",
      value:'₹ 22,37,078'
    },
    {
      key:'Expense',
      toolTipText: "Salary Income",
      value:'₹ 3,99,999.96'
    }
  ]
  
  creditCardObj = {
    imgUrl: 'https://imaages-hosting-1fin.s3.ap-south-1.amazonaws.com/assets/fund-logos/Credit-Card-Logos/Axis.png',
    cardName: 'Axis Platinum Card',
    handleClick: () => this.onCardClick()
  };
  onCardClick() {
    console.log('Credit card clicked!');
  }

  carousalTestData = [
    {
      "fund1": "Nippon India Index Fund - Nifty 50 Plan",
      "fund2": "Canara Robeco Large Cap Fund",
      "overlap": 71,
      "start": 14.5,
      "end": 14.5
    },
    {
      "fund1": "Franklin India Opportunities Fund",
      "fund2": "Franklin India Multi Cap Fund",
      "overlap": 63,
      "start": 18.5,
      "end": 18.5
    },
    {
      "fund1": "Franklin India Flexi Cap Fund",
      "fund2": "Canara Robeco Large Cap Fund",
      "overlap": 56,
      "start": 22,
      "end": 22
    },
    {
      "fund1": "Franklin India Flexi Cap Fund",
      "fund2": "Nippon India Index Fund - Nifty 50 Plan",
      "overlap": 55,
      "start": 22.5,
      "end": 22.5
    },
    {
      "fund1": "Canara Robeco Large Cap Fund",
      "fund2": "Canara Robeco Value Fund",
      "overlap": 45,
      "start": 23,
      "end": 23
    }
    ];
    
    mfholdingpielist =[
    { 
      label: "Equity", 
      equityPercentage: 97, 
      equityValue: 8.1 
    }
    ]

    list = ["Male", "26 years,Married, 1 kid","Industry Name -,Mumbai, Maharashtra","Source -"]

    // Pie Chart Data
    pieChartData: ChartData[] = [
      { label: 'Category A', value: 38, color: '#5B93FF' },
      { label: 'Category B', value: 31, color: '#FFD66B' },
      { label: 'Category C', value: 25, color: '#7FCDA4' },
      { label: 'Category D', value: 6, color: '#FF8B81' }
    ];

    // Donut Chart Data
    donutChartData: ChartData[] = [
      { label: 'Equity', value: 45 },
      { label: 'Debt', value: 30 },
      { label: 'Gold', value: 15 },
      { label: 'Cash', value: 10 }
    ];

    // Asset Card Data - Existing Assets
    existingAssetsChartData: ChartData[] = [
      { label: 'Equity', value: 38, color: '#5B93FF' },
      { label: 'Real Estate', value: 25, color: '#7FCDA4' },
      { label: 'Commodity', value: 6, color: '#FFB4AB' },
      { label: 'Debt', value: 31, color: '#FFD66B' }
    ];

    existingAssetsLegendData = [
      { label: 'Equity:', percentage: '38%', color: '#5B93FF' },
      { label: 'Real Estate:', percentage: '25%', color: '#7FCDA4' },
      { label: 'Commodity:', percentage: '6%', color: '#FFB4AB' },
      { label: 'Debt:', percentage: '31%', color: '#FFD66B' },
      { label: 'Alternative Investments:', percentage: '0%', color: '#FF8B81' }
    ];

    // Asset Card Data - Advised Assets
    advisedAssetsChartData: ChartData[] = [
      { label: 'Equity', value: 37, color: '#5B93FF' },
      { label: 'Real Estate', value: 26, color: '#7FCDA4' },
      { label: 'Commodities', value: 7, color: '#FFB4AB' },
      { label: 'Debt', value: 29, color: '#FFD66B' },
      { label: 'Alternative Investments', value: 1, color: '#FF8B81' }
    ];

    advisedAssetsLegendData = [
      { label: 'Equity:', percentage: '37%', color: '#5B93FF' },
      { label: 'Real Estate:', percentage: '26%', color: '#7FCDA4' },
      { label: 'Commodities:', percentage: '7%', color: '#FFB4AB' },
      { label: 'Debt:', percentage: '29%', color: '#FFD66B' },
      { label: 'Alternative Investments:', percentage: '1%', color: '#FF8B81' }
    ];

    // Tax Income Overview Data
    // This chart data is used to render the donut chart in the taxIncomeOverview card
    taxIncomeChartData: ChartData[] = [
      { label: 'Salary Income', value: 71.43, color: '#5B93FF' },
      { label: 'Business Income', value: 16.60, color: '#7FCDA4' },
      { label: 'Additional Income', value: 12.06, color: '#FFD66B' }
    ];

    /**
     * Tax Income Items with Tooltip Feature
     *
     * The taxIncomeItems array displays income breakdown details with optional tooltips.
     *
     * Structure:
     * - label: The income category name (required)
     * - value: The income amount (required)
     * - color: Color code matching the chart segment (required)
     * - icon: Optional SVG icon markup displayed next to the label
     * - tooltipData: Optional tooltip details shown on hover
     *   - title: Tooltip header text
     *   - items: Array of breakdown items
     *     - label: Item name
     *     - value: Item amount
     *     - subtext: Optional additional description
     *
     * Example Usage:
     * All three items below demonstrate the tooltip feature as guided in card-page.html:
     * 1. "Salary Income" - Breakdown of salary components
     * 2. "Business Income" - Breakdown of business income sources
     * 3. "Additional Income" - Breakdown of additional income sources with subtexts
     */
    taxIncomeItems = [
      {
        label: 'Salary Income',
        value: '₹ 21,50,000',
        color: '#5B93FF',
      },
      {
        label: 'Business Income',
        value: '₹ 5,00,000',
        color: '#7FCDA4',
      },
      {
        label: 'Additional Income',
        value: '₹ 3,63,221',
        color: '#FFD66B',
        // Optional: Add an info icon next to the label (SVG markup as string)
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>`,
        // Optional: Add detailed breakdown shown in tooltip on hover
        tooltipData: {
          title: 'Total: ₹ 3,63,221', // Tooltip header
          items: [
            {
              label: 'Rental income',
              value: '₹ 20,000',
              subtext: '(70% Taxable - ₹ 14,000)' // Optional: Additional context
            },
            {
              label: 'Dividend Income',
              value: '₹ 0'
            },
            {
              label: 'Interest from Savings Account',
              value: '₹ 3,00,000'
            },
            {
              label: 'Interest from FD and Others',
              value: '₹ 43,221'
            },
            {
              label: 'Others',
              value: '₹ 0'
            }
          ]
        }
      }
    ];

    attendanceSvg = `
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#FFDDDA"></rect><path _ngcontent-ng-cli-universal-c3109344089="" fill-rule="evenodd" clip-rule="evenodd" d="M19.0217 25.8698C19.0217 25.8698 18.0435 25.8698 18.0435 24.8916C18.0435 23.9133 19.0217 20.9785 22.9348 20.9785C26.8478 20.9785 27.8261 23.9133 27.8261 24.8916C27.8261 25.8698 26.8478 25.8698 26.8478 25.8698H19.0217Z" fill="#F35B4D">
              </path>
              <path _ngcontent-ng-cli-universal-c3109344089="" fill-rule="evenodd" clip-rule="evenodd" d="M22.9348 20.0004C24.5556 20.0004 25.8696 18.6865 25.8696 17.0656C25.8696 15.4448 24.5556 14.1309 22.9348 14.1309C21.3139 14.1309 20 15.4448 20 17.0656C20 18.6865 21.3139 20.0004 22.9348 20.0004Z" fill="#F35B4D">
              </path>
              <path _ngcontent-ng-cli-universal-c3109344089="" fill-rule="evenodd" clip-rule="evenodd" d="M17.2768 25.8688C17.1391 25.5909 17.0651 25.2615 17.0651 24.8906C17.0651 23.5646 17.7294 22.2009 18.959 21.2514C18.4211 21.0794 17.794 20.9775 17.0651 20.9775C13.1521 20.9775 12.1738 23.9123 12.1738 24.8906C12.1738 25.8688 13.1521 25.8688 13.1521 25.8688H17.2768Z" fill="#F35B4D"></path>
              <path _ngcontent-ng-cli-universal-c3109344089="" fill-rule="evenodd" clip-rule="evenodd" d="M16.5761 19.9997C17.9268 19.9997 19.0218 18.9047 19.0218 17.5541C19.0218 16.2034 17.9268 15.1084 16.5761 15.1084C15.2254 15.1084 14.1305 16.2034 14.1305 17.5541C14.1305 18.9047 15.2254 19.9997 16.5761 19.9997Z" fill="#F35B4D"></path>
          </svg>
`;

    // Tax Savings Card Data
    taxSavingsAmount = '64,584';
    taxSavingsSubtitle = 'On additional Investment of ₹ 2,07,000';

    // Tax Regime Icon
    regimeIconSvg = `
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Big taxes">
      <path id="Vector" d="M10 17.5H3C2.86739 17.5 2.74021 17.5527 2.64645 17.6464C2.55268 17.7402 2.5 17.8674 2.5 18C2.5 18.1326 2.55268 18.2598 2.64645 18.3536C2.74021 18.4473 2.86739 18.5 3 18.5H10C10.1326 18.5 10.2598 18.4473 10.3536 18.3536C10.4473 18.2598 10.5 18.1326 10.5 18C10.5 17.8674 10.4473 17.7402 10.3536 17.6464C10.2598 17.5527 10.1326 17.5 10 17.5Z" fill="#5641AA"></path><path _ngcontent-ng-cli-universal-c1801114545="" id="Vector_2" d="M10 20H3C2.86739 20 2.74021 20.0527 2.64645 20.1464C2.55268 20.2402 2.5 20.3674 2.5 20.5C2.5 20.6326 2.55268 20.7598 2.64645 20.8536C2.74021 20.9473 2.86739 21 3 21H10C10.1326 21 10.2598 20.9473 10.3536 20.8536C10.4473 20.7598 10.5 20.6326 10.5 20.5C10.5 20.3674 10.4473 20.2402 10.3536 20.1464C10.2598 20.0527 10.1326 20 10 20Z" fill="#5641AA"></path><path _ngcontent-ng-cli-universal-c1801114545="" id="Vector_3" d="M10 15H3C2.86739 15 2.74021 15.0527 2.64645 15.1464C2.55268 15.2402 2.5 15.3674 2.5 15.5C2.5 15.6326 2.55268 15.7598 2.64645 15.8536C2.74021 15.9473 2.86739 16 3 16H10C10.1326 16 10.2598 15.9473 10.3536 15.8536C10.4473 15.7598 10.5 15.6326 10.5 15.5C10.5 15.3674 10.4473 15.2402 10.3536 15.1464C10.2598 15.0527 10.1326 15 10 15Z" fill="#5641AA"></path><path _ngcontent-ng-cli-universal-c1801114545="" id="Vector_4" d="M3 13.5H7C7.13261 13.5 7.25979 13.4473 7.35355 13.3536C7.44732 13.2598 7.5 13.1326 7.5 13C7.5 12.8674 7.44732 12.7402 7.35355 12.6464C7.25979 12.5527 7.13261 12.5 7 12.5H3C2.86739 12.5 2.74021 12.5527 2.64645 12.6464C2.55268 12.7402 2.5 12.8674 2.5 13C2.5 13.1326 2.55268 13.2598 2.64645 13.3536C2.74021 13.4473 2.86739 13.5 3 13.5Z" fill="#5641AA"></path><path _ngcontent-ng-cli-universal-c1801114545="" id="Vector_5" d="M22 17C22 15.7605 21.5396 14.5651 20.7081 13.6459C19.8766 12.7266 18.7333 12.149 17.5 12.025V5H21C21.1326 5 21.2598 4.94732 21.3536 4.85355C21.4473 4.75979 21.5 4.63261 21.5 4.5V2.5C21.5 1.83696 21.2366 1.20107 20.7678 0.732233C20.2989 0.263392 19.663 0 19 0L2.5 0C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5V23.5C0 23.6326 0.0526784 23.7598 0.146447 23.8536C0.240215 23.9473 0.367392 24 0.5 24H17C17.1326 24 17.2598 23.9473 17.3536 23.8536C17.4473 23.7598 17.5 23.6326 17.5 23.5V22C18.7376 21.8756 19.8844 21.2944 20.7165 20.3699C21.5486 19.4453 22.0062 18.2438 22 17ZM20.5 2.5V4H17.5V2.5C17.5 2.10218 17.658 1.72064 17.9393 1.43934C18.2206 1.15804 18.6022 1 19 1C19.3978 1 19.7794 1.15804 20.0607 1.43934C20.342 1.72064 20.5 2.10218 20.5 2.5ZM1 23V2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H17C16.315 1.905 16.5 1.5 16.5 12.025C15.2382 12.1144 14.0573 12.6787 13.195 13.6042C12.3328 14.5297 11.8533 15.7476 11.8533 17.0125C11.8533 18.2774 12.3328 19.4953 13.195 20.4208C14.0573 21.3463 15.2382 21.9106 16.5 22V23H1ZM17 21C16.2089 21 15.4355 20.7654 14.7777 20.3259C14.1199 19.8864 13.6072 19.2616 13.3045 18.5307C13.0017 17.7998 12.9225 16.9956 13.0769 16.2196C13.2312 15.4437 13.6122 14.731 14.1716 14.1716C14.731 13.6122 15.4437 13.2312 16.2196 13.0769C16.9956 12.9225 17.7998 13.0017 18.5307 13.3045C19.2616 13.6072 19.8864 14.1199 20.3259 14.7777C20.7654 15.4355 21 16.2089 21 17C21 18.0609 20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21Z" fill="#5641AA"></path><path _ngcontent-ng-cli-universal-c1801114545="" id="Vector_6" d="M3.5 5.5H4.5V9C4.5 9.13261 4.55268 9.25979 4.64645 9.35355C4.74021 9.44732 4.86739 9.5 5 9.5C5.13261 9.5 5.25979 9.44732 5.35355 9.35355C5.44732 9.25979 5.5 9.13261 5.5 9V5.5H6.5C6.63261 5.5 6.75979 5.44732 6.85355 5.35355C6.94732 5.25979 7 5.13261 7 5C7 4.86739 6.94732 4.74021 6.85355 4.64645C6.75979 4.55268 6.63261 4.5 6.5 4.5H3.5C3.36739 4.5 3.24021 4.55268 3.14645 4.64645C3.05268 4.74021 3 4.86739 3 5C3 5.13261 3.05268 5.25979 3.14645 5.35355C3.24021 5.44732 3.36739 5.5 3.5 5.5Z" fill="#5641AA"></path><path _ngcontent-ng-cli-universal-c1801114545="" id="Vector_7" d="M9.47 4.82502C9.43496 4.72849 9.37106 4.64509 9.28697 4.58616C9.20288 4.52722 9.10268 4.49561 9 4.49561C8.89731 4.49561 8.79711 4.52722 8.71303 4.58616C8.62894 4.64509 8.56503 4.72849 8.53 4.82502L7.03 8.82502C6.98358 8.94967 6.98859 9.08765 7.04391 9.20861C7.09924 9.32958 7.20035 9.42361 7.325 9.47002C7.44965 9.51643 7.58763 9.51143 7.70859 9.4561C7.82955 9.40078 7.92358 9.29967 7.97 9.17502L8.22 8.50002H9.78L10.03 9.17502C10.0764 9.29967 10.1704 9.40078 10.2914 9.4561C10.4124 9.51143 10.5503 9.51643 10.675 9.47002C10.7996 9.42361 10.9008 9.32958 10.9561 9.20861C11.0114 9.08765 11.0164 8.94967 10.97 8.82502L9.47 4.82502ZM8.595 7.50002L9 6.42502L9.405 7.50002H8.595Z" fill="#5641AA"></path><path _ngcontent-ng-cli-universal-c1801114545="" id="Vector_8" d="M12.445 9.22493L13 8.11993L13.555 9.22493C13.6201 9.3331 13.7237 9.41265 13.845 9.4476C13.9663 9.48255 14.0964 9.47031 14.2091 9.41334C14.3217 9.35638 14.4087 9.2589 14.4524 9.14048C14.4962 9.02206 14.4936 8.89147 14.445 8.77493L13.56 6.99993L14.445 5.22493C14.4936 5.10838 14.4962 4.97779 14.4524 4.85937C14.4087 4.74095 14.3217 4.64347 14.2091 4.58651C14.0964 4.52954 13.9663 4.51731 13.845 4.55226C13.7237 4.5872 13.6201 4.66675 13.555 4.77493L13 5.87993L12.445 4.77493C12.3799 4.66675 12.2763 4.5872 12.155 4.55226C12.0337 4.51731 11.9037 4.52954 11.791 4.58651C11.6783 4.64347 11.5914 4.74095 11.5476 4.85937C11.5038 4.97779 11.5065 5.10838 11.555 5.22493L12.44 6.99993L11.555 8.77493C11.5065 8.89147 11.5038 9.02206 11.5476 9.14048C11.5914 9.2589 11.6783 9.35638 11.791 9.41334C11.9037 9.47031 12.0337 9.48255 12.155 9.4476C12.2763 9.41265 12.3799 9.3331 12.445 9.22493Z" fill="#5641AA"></path><path _ngcontent-ng-cli-universal-c1801114545="" id="Vector_9" d="M15.5 16.5C16.0523 16.5 16.5 16.0523 16.5 15.5C16.5 14.9477 16.0523 14.5 15.5 14.5C14.9477 14.5 14.5 14.9477 14.5 15.5C14.5 16.0523 14.9477 16.5 15.5 16.5Z" fill="#5641AA"></path><path _ngcontent-ng-cli-universal-c1801114545="" id="Vector_10" d="M18.5 19.5C19.0523 19.5 19.5 19.0523 19.5 18.5C19.5 17.9477 19.0523 17.5 18.5 17.5C17.9477 17.5 17.5 17.9477 17.5 18.5C17.5 19.0523 17.9477 19.5 18.5 19.5Z" fill="#5641AA"></path><path _ngcontent-ng-cli-universal-c1801114545="" id="Vector_11" d="M18.21 14.69L15.01 18.69C14.9519 18.7635 14.9156 18.8519 14.9053 18.9451C14.895 19.0382 14.9111 19.1324 14.9518 19.2169C14.9924 19.3013 15.056 19.3727 15.1353 19.4227C15.2145 19.4728 15.3063 19.4995 15.4 19.5C15.745 19.5 15.58 19.58 18.99 15.315C19.068 15.2111 19.1026 15.081 19.0863 14.9521C19.07 14.8232 19.0043 14.7057 18.9029 14.6245C18.8015 14.5432 18.6725 14.5046 18.5432 14.5169C18.4138 14.5291 18.2943 14.5912 18.21 14.69Z" fill="#5641AA"></path></g></svg>
    `;

    // New Regime Data
    newRegimeTitle = 'New Regime';
    newRegimeTaxAmount = '3,52,628';
    newRegimeTaxableIncome = '₹ 25,30,221';
    newRegimeEffectiveTaxRate = '11.7%';

    // Old Regime Data
    oldRegimeTitle = 'Old Regime';
    oldRegimeTaxAmount = '4,74,308';
    oldRegimeTaxableIncome = '₹ 21,45,221';
    oldRegimeEffectiveTaxRate = '15.74%';

    // Will Card Icons
    investmentSvgIcon = `
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#DEEDFF"/>
        <rect width="20" height="18" transform="translate(10 11)" fill="#E8EEF6"/>
        <path d="M20 11.5625C20.8279 11.5626 22.2122 11.842 23.5156 12.1523C24.8485 12.4697 26.1916 12.8439 26.9814 13.0703C27.6403 13.2593 28.1385 13.7705 28.2344 14.4014C28.9507 19.1235 27.29 22.6233 25.2754 24.9385C24.2719 26.0916 23.1808 26.9506 22.2529 27.5254C21.7894 27.8125 21.3599 28.0327 20.9951 28.1836C20.6581 28.323 20.2973 28.4374 20 28.4375C19.7026 28.4375 19.3411 28.323 19.0039 28.1836C18.6391 28.0327 18.2095 27.8125 17.7461 27.5254C16.8182 26.9506 15.7271 26.0916 14.7236 24.9385C12.709 22.6233 11.0483 19.1235 11.7646 14.4014C11.8606 13.7703 12.3595 13.2592 13.0186 13.0703C13.8084 12.8439 15.1508 12.4697 16.4834 12.1523C17.787 11.8419 19.1722 11.5625 20 11.5625ZM23.5664 17.915C23.3223 17.6954 22.9267 17.6954 22.6826 17.915L19.375 20.8916L17.9414 19.6025C17.6973 19.3829 17.3017 19.3829 17.0576 19.6025C16.8138 19.8222 16.8138 20.1778 17.0576 20.3975L18.9326 22.085C19.0498 22.1904 19.2092 22.25 19.375 22.25C19.5406 22.2499 19.6993 22.1904 19.8164 22.085L23.5664 18.71C23.8104 18.4903 23.8104 18.1347 23.5664 17.915Z" fill="#257EEB"/>
      </svg>
    `;

    insuranceSvgIcon = `
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L0 4V8.09C0 12.56 3.36 16.74 10 18C16.64 16.74 20 12.56 20 8.09V4L10 0ZM10 9H18C17.67 12.71 15.2 15.97 10 17.19V9H2V5.3L10 2.18V9Z" fill="#16A349"/>
      </svg>
    `;

    nomineeSvgIcon = `
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z" fill="#16A349"/>
        <path d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="#16A349"/>
        <path d="M6 9C4.67392 9 3.40215 9.52678 2.46447 10.4645C1.52678 11.4021 1 12.6739 1 14V16H11V14C11 12.6739 10.4732 11.4021 9.53553 10.4645C8.59785 9.52678 7.32608 9 6 9Z" fill="#16A349"/>
        <path d="M14 9C12.67 9 11.41 9.53 10.47 10.47C10.16 10.78 9.9 11.12 9.68 11.5C10.44 12.06 11.03 12.81 11.38 13.68C11.59 14.21 11.73 14.78 11.81 15.38L11.87 16H19V14C19 12.6739 18.4732 11.4021 17.5355 10.4645C16.5979 9.52678 15.3261 9 14 9Z" fill="#16A349"/>
      </svg>
    `;

    // n3xt3month Card Data
    n3xt3monthTitle = 'Surplus for the Period';
    n3xt3monthValue = '₹1,43,818';
    n3xt3monthIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0238 20.9994H6.34878V8.19939L13.2988 0.99939L14.1238 1.64939C14.3071 1.78272 14.4279 1.93272 14.4863 2.09939C14.5446 2.26606 14.5738 2.45772 14.5738 2.67439V2.92439L13.4488 8.19939H21.4988C21.8821 8.19939 22.2279 8.35356 22.5363 8.66189C22.8446 8.97022 22.9988 9.31606 22.9988 9.69939V11.7494C22.9988 11.9327 22.9779 12.1452 22.9363 12.3869C22.8946 12.6286 22.8321 12.8411 22.7488 13.0244L19.8488 19.7244C19.6988 20.0744 19.4529 20.3744 19.1113 20.6244C18.7696 20.8744 18.4071 20.9994 18.0238 20.9994ZM4.84878 8.19939V20.9994H1.99878V8.19939H4.84878Z" fill="#26A670"/>
    </svg>`;

    // Nominee Card Data
    nomineeTitle = 'Investment Nominees';
    nomineeSubtitle = 'Nominees';
    nomineeHeaderIcon = `
       <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z" fill="#16A349"/>
        <path d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="#16A349"/>
        <path d="M6 9C4.67392 9 3.40215 9.52678 2.46447 10.4645C1.52678 11.4021 1 12.6739 1 14V16H11V14C11 12.6739 10.4732 11.4021 9.53553 10.4645C8.59785 9.52678 7.32608 9 6 9Z" fill="#16A349"/>
        <path d="M14 9C12.67 9 11.41 9.53 10.47 10.47C10.16 10.78 9.9 11.12 9.68 11.5C10.44 12.06 11.03 12.81 11.38 13.68C11.59 14.21 11.73 14.78 11.81 15.38L11.87 16H19V14C19 12.6739 18.4732 11.4021 17.5355 10.4645C16.5979 9.52678 15.3261 9 14 9Z" fill="#16A349"/>
      </svg>
    `;

    nomineeList = [
      {
        name: 'Arun test',
        relation: 'self',
        initials: 'AT',
        avatarColor: '#26a670'
      },
      {
        name: 'Siraj Rasam',
        relation: 'Brother',
        initials: 'SR',
        avatarColor: '#26a670'
      },
      {
        name: 'Rahul Sharma',
        relation: 'Lead',
        initials: 'RS',
        avatarColor: '#26a670'
      },
      {
        name: 'qwerty',
        relation: 'asdf',
        initials: 'Q',
        avatarColor: '#26a670'
      }
    ];
}
