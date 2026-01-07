import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCard } from '../card/card';

@Component({
  selector: 'lib-card-showcase',
  standalone: true,
  imports: [CommonModule, DashboardCard],
  templateUrl: './card-showcase.component.html',
  styleUrls: ['./card-showcase.component.css']
})
export class CardShowcaseComponent {
  // Sample data for different card types
  
  // Dashboard cards data
  attendanceIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 11.5V9.5L21 9V11L15 11.5ZM11 14V12H13V14H11ZM7 14V12H9V14H7ZM15 14V12H17V14H15Z" fill="#FF6B6B"/>
  </svg>`;

  dependentsIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12S12 10.2 12 8S13.8 4 16 4ZM16 14C18.7 14 24 15.3 24 18V20H8V18C8 15.3 13.3 14 16 14ZM8.5 4C10.4 4 12 5.6 12 7.5S10.4 11 8.5 11S5 9.4 5 7.5S6.6 4 8.5 4ZM8.5 13C11.8 13 18 14.6 18 17.8V20H0V17.8C0 14.6 6.2 13 8.5 13Z" fill="#4ECDC4"/>
  </svg>`;

  // 1 View card data
  categoryList = [
    { key: 'Assets', value: '₹ 2,74,26,805', toolTipText: 'Total assets including investments and properties' },
    { key: 'Liabilities', value: '₹ 5,97,600', toolTipText: 'Total liabilities including loans and debts' },
    { key: 'Insurance', value: '₹ 1,50,00,000', toolTipText: 'Total insurance coverage' },
    { key: 'Income', value: '₹ 22,37,078', toolTipText: 'Annual income from all sources' },
    { key: 'Expense', value: '₹ 3,99,999.96', toolTipText: 'Monthly expenses and costs' }
  ];

  // Personal details data
  personalDetailsList = [
    'Male',
    '26 years, Married, 1 kid',
    'Industry Name - Mumbai, Maharashtra',
    'Source -'
  ];

  // Credit card data
  creditCardData = {
    imgUrl: 'https://via.placeholder.com/122x80/FF6B6B/FFFFFF?text=AXIS',
    cardName: 'Axis Platinum Card',
    handleClick: () => console.log('Credit card clicked')
  };

  // Financial Behavior Score data
  currentFbsScore = 63;
  genProfile = 'Gen 2';
  age_group = '26 - 35';
  role = 'FC';

  // MF Holdings data
  mfHoldingsData = {
    title: 'No. of Mutual Funds',
    currentFbsScore: 20,
    para: 'Attention! Consolidate your portfolio on priority',
    small: ''
  };

  avgPortfolioData = {
    title: 'Avg Portfolio Score',
    currentFbsScore: 69,
    para: 'Based on the 1 Finance proprietary research',
    small: 'Medium'
  };

  // MF Holdings Pie Chart data
  pieChartSeries = [78.1, 21.9];
  pieChartColors = ['#B4A4FF', '#E8E1FF'];
  mfHoldingsList = [
    { label: 'Equity', equityPercentage: 78.1, equityValue: 8.5 }
  ];

  // Additional MF Holdings data
  mfAllocationPara = 'Total Current Value';

  // Carousel data
  carousalData = [
    {
      fund1: 'Franklin India Flexi Cap Fund',
      fund2: 'Canara Robeco Large Cap Fund',
      overlap: 56,
      start: 22,
      end: 22
    },
    {
      fund1: 'Franklin India Flexi Cap Fund',
      fund2: 'Nippon India Index Fund - Nifty 50 Plan',
      overlap: 55,
      start: 22.5,
      end: 22.5
    },
    {
      fund1: 'Canara Robeco Large Cap Fund',
      fund2: 'Canara Robeco Value Fund',
      overlap: 45,
      start: 27.5,
      end: 27.5
    },
    {
      fund1: 'HDFC Equity Fund',
      fund2: 'ICICI Prudential Bluechip Fund',
      overlap: 42,
      start: 29,
      end: 29
    },
    {
      fund1: 'SBI Large Cap Fund',
      fund2: 'Axis Bluechip Fund',
      overlap: 38,
      start: 31,
      end: 31
    }
  ];

  onCardClick(cardType: string): void {
    console.log(`${cardType} card clicked`);
  }
}