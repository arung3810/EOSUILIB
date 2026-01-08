import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../../dist/eos-comp';

@Component({
  selector: 'lib-accordion-page',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './accordian-page.html',
  styleUrls: ['./accordian-page.css']
})
export class AccordionPage {
  
  // Top Priority accordion data
  topPrioritySubsections = [
    {
      header: 'Insurance',
      content: 'Adding riders or extras to your insurance portfolio'
    },
    {
      header: 'Estate & Will',
      content: 'Evaluating life insurance as an estate planning tool'
    },
    {
      header: 'Taxes',
      content: 'Evaluating tax aspects of property transactions'
    }
  ];

  // Investment accordion data with table
  investmentTableColumns = [
    { key: 'schemeName', label: 'Scheme Name' },
    { key: 'category', label: 'Category' },
    { key: 'schemeType', label: 'Scheme Type' },
    { key: 'currentValue', label: 'Current Value' },
    { key: 'sip', label: 'SIP' }
  ];

  investmentTableData = [
    {
      schemeName: 'Nippon India Banking & Financial Services Fund',
      category: 'Equity',
      schemeType: 'Sector Funds',
      currentValue: '₹ 78,574',
      sip: '₹ 1,000'
    },
    {
      schemeName: 'Franklin India Multi Cap Fund',
      category: 'Equity',
      schemeType: 'Sector Funds',
      currentValue: '₹ 78,574',
      sip: '₹ 1,000'
    },
    {
      schemeName: 'ITI Small Cap Fund',
      category: 'Equity',
      schemeType: 'Sector Funds',
      currentValue: '₹ 78,574',
      sip: '₹ 1,000'
    },
    {
      schemeName: 'Franklin India Flexi Cap Fund',
      category: 'Equity',
      schemeType: 'Sector Funds',
      currentValue: '₹ 78,574',
      sip: '₹ 1,000'
    }
  ];

  // Additional accordion examples
  portfolioSubsections = [
    {
      header: 'Asset Allocation',
      content: 'Diversified portfolio across equity, debt, and hybrid funds'
    },
    {
      header: 'Risk Assessment',
      content: 'Moderate risk profile with balanced growth potential'
    }
  ];

  goalsSubsections = [
    {
      header: 'Retirement Planning',
      content: 'Building corpus for comfortable retirement lifestyle'
    },
    {
      header: 'Child Education',
      content: 'Saving for higher education expenses'
    },
    {
      header: 'Emergency Fund',
      content: 'Maintaining 6-12 months of expenses as emergency fund'
    }
  ];
}