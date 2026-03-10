import { Component, ViewChild, TemplateRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../../dist/eos-comp';

@Component({
  selector: 'app-table-page',
  imports: [ TableComponent, CommonModule ],
  templateUrl: './table-page.html',
  styleUrl: './table-page.css',
})
export class TablePage implements AfterViewInit {
  @ViewChild('actionButtonTemplate', { static: false }) actionButtonTemplate!: TemplateRef<any>;

  constructor(private cdr: ChangeDetectorRef) {}

  // Update policyColumns after view init to use the template
  ngAfterViewInit() {
    // Update the customTemplate to use the TemplateRef
    const actionColumn = this.findColumnByField(this.policyColumns, 'suggestedAction');
    if (actionColumn && this.actionButtonTemplate) {
      actionColumn.customTemplate = this.actionButtonTemplate;
      // Trigger change detection to update the view
      this.cdr.detectChanges();
    }
  }

  // Tax Comparison Demo Data
  taxComparisonData = [
    {
      label: 'Gross Income',
      oldRegime: '₹ 30,13,221',
      newRegime: '₹ 30,13,221',
      isHighlighted: false
    },
    {
      label: 'Non-Taxable Component',
      oldRegime: '₹ 1,92,000',
      newRegime: '₹ 1,92,000',
      isHighlighted: false
    },
    {
      label: 'Standard Deduction',
      oldRegime: '₹ 50,000',
      newRegime: '₹ 75,000',
      isHighlighted: false
    },
    {
      label: 'Deductions',
      oldRegime: '₹ 37,000',
      newRegime: '₹ 3,000',
      isHighlighted: false
    },
    {
      label: 'Taxable Income',
      oldRegime: '₹ 27,28,220',
      newRegime: '₹ 27,37,220',
      isHighlighted: true
    },
    {
      label: 'Tax Liability',
      oldRegime: '₹ 6,56,204',
      newRegime: '₹ 4,17,212',
      isHighlighted: true
    }
  ];

  taxComparisonColumns = [
    {
      label: 'Tax Comparison',
      field: 'label'
    },
    {
      label: 'Old Regime',
      field: 'oldRegime'
    },
    {
      label: 'New Regime (opted)',
      field: 'newRegime'
    }
  ];

  // Financial Scoring Metrics Demo Data
  financialData = [
    {
      scoringMetric: 'Emergency Funds',
      idealValue: '₹ 1,22,87,666',
      actualValue: '₹ 43,21,000',
      financialScore: 35
    },
    {
      scoringMetric: 'Health Insurance',
      idealValue: '₹ 5,00,000',
      actualValue: '₹ 8,00,00,000',
      financialScore: 75
    },
    {
      scoringMetric: 'Life Insurance',
      idealValue: '₹ 0',
      actualValue: '₹ 8,01,25,000',
      financialScore: 75
    }
  ];

  financialColumns = [
    {
      label: 'Scoring Metrics',
      field: 'scoringMetric',
      sortable: false
    },
    {
      label: 'Ideal Value',
      field: 'idealValue',
      sortable: false
    },
    {
      label: 'Actual Value',
      field: 'actualValue',
      sortable: false
    },
    {
      label: 'Financial Score',
      field: 'financialScore',
      sortable: true
    }
  ];

  // Multi-level header example - Liability Distribution Table (like your image)
  liabilityData = [
    {
      liabilityType: 'Good',
      outstanding: '₹ 3,79,00,000',
      emi: '₹ 1,42,800',
      loanSize: '₹ 20,88,410 to ₹ 52,22,407',
      emiRange: '₹ 18,958 to ₹ 47,408'
    },
    {
      liabilityType: 'Bad',
      outstanding: '₹ 4,73,00,000',
      emi: '₹ 17,63,186',
      loanSize: '₹ 0 to ₹ 4,44,987',
      emiRange: '₹ 0 to ₹ 9,592'
    },
    {
      liabilityType: 'Total',
      outstanding: '₹ 8,52,00,000',
      emi: '₹ 19,05,986',
      loanSize: '₹ 20,88,410 to ₹ 56,67,394',
      emiRange: '₹ 18,958 to ₹ 57,000'
    }
  ];

  // Policy Details Table Data
  policyData = [
    {
      policyName: "LIC's Nivesh Plus",
      planType: 'ULIPS',
      startDate: '21-01-2022',
      policyTenure: '25 yrs',
      annualPremium: '₹ 1,00,000',
      lifeCover: '₹ 1,25,000',
      premiumPaidTillDate: '₹ 1,00,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'HDFC SL ProGrowth Super II',
      planType: 'ULIPS',
      startDate: '25-01-2024',
      policyTenure: '23 yrs',
      annualPremium: '₹ 96,000',
      lifeCover: '₹ 80,00,000',
      premiumPaidTillDate: '₹ 24,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'HDFC SL ProGrowth Super II',
      planType: 'ULIPS',
      startDate: '25-03-2022',
      policyTenure: '25 yrs',
      annualPremium: '₹ 96,000',
      lifeCover: '₹ 80,00,000',
      premiumPaidTillDate: '₹ 24,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'HDFC SL ProGrowth Super II',
      planType: 'ULIPS',
      startDate: '25-04-2022',
      policyTenure: '25 yrs',
      annualPremium: '₹ 96,000',
      lifeCover: '₹ 80,00,000',
      premiumPaidTillDate: '₹ 24,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'HDFC SL ProGrowth Super II',
      planType: 'ULIPS',
      startDate: '25-05-2022',
      policyTenure: '25 yrs',
      annualPremium: '₹ 96,000',
      lifeCover: '₹ 80,00,000',
      premiumPaidTillDate: '₹ 24,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'HDFC SL ProGrowth Super II',
      planType: 'ULIPS',
      startDate: '25-06-2022',
      policyTenure: '25 yrs',
      annualPremium: '₹ 96,000',
      lifeCover: '₹ 80,00,000',
      premiumPaidTillDate: '₹ 24,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'HDFC SL ProGrowth Super II',
      planType: 'ULIPS',
      startDate: '25-07-2022',
      policyTenure: '25 yrs',
      annualPremium: '₹ 96,000',
      lifeCover: '₹ 80,00,000',
      premiumPaidTillDate: '₹ 24,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'HDFC SL ProGrowth Super II',
      planType: 'ULIPS',
      startDate: '25-08-2022',
      policyTenure: '25 yrs',
      annualPremium: '₹ 96,000',
      lifeCover: '₹ 80,00,000',
      premiumPaidTillDate: '₹ 24,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'HDFC SL ProGrowth Super II',
      planType: 'ULIPS',
      startDate: '25-09-2022',
      policyTenure: '25 yrs',
      annualPremium: '₹ 96,000',
      lifeCover: '₹ 80,00,000',
      premiumPaidTillDate: '₹ 24,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'HDFC SL ProGrowth Super II',
      planType: 'ULIPS',
      startDate: '25-10-2022',
      policyTenure: '25 yrs',
      annualPremium: '₹ 96,000',
      lifeCover: '₹ 80,00,000',
      premiumPaidTillDate: '₹ 24,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'HDFC SL ProGrowth Super II',
      planType: 'ULIPS',
      startDate: '25-11-2022',
      policyTenure: '25 yrs',
      annualPremium: '₹ 96,000',
      lifeCover: '₹ 80,00,000',
      premiumPaidTillDate: '₹ 24,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'HDFC SL ProGrowth Super II',
      planType: 'ULIPS',
      startDate: '25-12-2022',
      policyTenure: '25 yrs',
      annualPremium: '₹ 96,000',
      lifeCover: '₹ 80,00,000',
      premiumPaidTillDate: '₹ 24,000',
      premiumPayable: '₹ 0',
      suggestedAction: 'CONTINUE TILL LOCK-IN',
      isTotal: false
    },
    {
      policyName: 'Total',
      planType: '',
      startDate: '',
      policyTenure: '',
      annualPremium: '₹ 11,56,000',
      lifeCover: '₹ 8,81,25,000',
      premiumPaidTillDate: '₹ 3,64,000',
      premiumPayable: '₹ 0',
      suggestedAction: '',
      isTotal: true
    }
  ];

  // Policy Details Table Columns
  policyColumns = [
    {
      label: 'Policy Details',
      field: '',
      sortable: false,
      subHeaders: [
        {
          label: 'Policy Name',
          field: 'policyName',
          sortable: false
        },
        {
          label: 'Plan Type',
          field: 'planType',
          sortable: false
        },
        {
          label: 'Start Date',
          field: 'startDate',
          sortable: false
        },
        {
          label: 'Policy Tenure',
          field: 'policyTenure',
          sortable: false
        },
        {
          label: 'Annual Premium',
          field: 'annualPremium',
          sortable: false
        },
        {
          label: 'Life Cover',
          field: 'lifeCover',
          sortable: false
        }
      ]
    },
    {
      label: 'Policy Evaluation',
      field: '',
      sortable: false,
      subHeaders: [
        {
          label: 'Premium Paid Till Date',
          field: 'premiumPaidTillDate',
          sortable: false
        },
        {
          label: 'Premium Payable',
          field: 'premiumPayable',
          sortable: false
        },
        {
          label: 'Suggested Action',
          field: 'suggestedAction',
          sortable: false,
          cellType: 'custom' as const,
          customTemplate: this.actionButtonTemplate
        }
      ]
    }
  ];

  // Multi-level columns configuration
  liabilityColumns = [
    {
      label: 'Liability Type',
      field: 'liabilityType',
      sortable: false,
      rowspan: 2 // This column spans 2 rows (no subheaders)
    },
    {
      label: 'Current Liability Distribution',
      field: '',
      sortable: false,
      subHeaders: [
        {
          label: 'Outstanding',
          field: 'outstanding',
          sortable: false
        },
        {
          label: 'EMI',
          field: 'emi',
          sortable: true
        }
      ]
    },
    {
      label: 'Suggested Range',
      field: '',
      sortable: false,
      subHeaders: [
        {
          label: 'Loan Size',
          field: 'loanSize',
          sortable: false
        },
        {
          label: 'EMI',
          field: 'emiRange',
          sortable: false
        }
      ]
    }
  ];

  // Meeting Data Demo
  tableData = [
    {
      clientName: 'Animesh Hardia',
      meeting: 'Discovery',
      type: 'Online',
      attendance: ['Present', 'Missed'],
      host: 'TEST USER 4 CO',
      dateTime: 'Dec 11, 2023, 09:00PM - 09:30PM',
      Time: 'Dec 11, 2023, 09:00PM - 09:30PM',
      showTooltip: true,
      tooltipText: 'Discovery meeting details'
    },
    {
      clientName: 'Arun gupta',
      meeting: 'Discovery',
      type: 'Online',
      attendance: ['Present', 'Missed','sdfd'],
      host: 'TEST USER 4 CO',
      dateTime: 'Dec 11, 2023, 09:00PM - 09:30PM',
      Time: 'Dec 11, 2023, 09:00PM - 09:30PM',
      showTooltip: false,
      tooltipText: 'Discovery meeting'
    }
  ];
  
  columns = [
    { 
      label: 'Client Name', 
      field: 'clientName', 
      icons: ['tune','filter'], 
      tuneOptions: ['c1','c2','c3'],
      sortable: true,
      valueMapper: (value: string) => value ? value.toUpperCase() : value
    },
    { 
      label: 'Meeting', 
      field: 'meeting', 
      icons: ['tune'], 
      tuneOptions: [1,2,3],
      cellType: 'tooltip' as const,
      sortable: true
    },
    { 
      label: 'Type', 
      field: 'type',
      sortable: true,
      valueMapper: (value: string) => value // Example: Add emoji
    },
    { 
      label: 'Attendance', 
      cellType: 'dropdown' as const,
      field: 'attendance', // This field contains the options array
      dropdownOptions: true, // When true, uses row[field] as options
    },
    { 
      label: 'Meeting Host', 
      field: 'host', 
      icons: ['filter'],
      sortable: true
    },
    { 
      label: 'Date & Time', 
      field: 'dateTime', 
      icons: ['filter'],
      sortable: true,
      valueMapper: (value: string) => {
        // Example: Format date string
        if (value && value.includes(',')) {
          const [date, time] = value.split(',');
          return `${date.trim()} | ${time.trim()}`;
        }
        return value;
      }
    },
    { 
      label: 'Time', 
      field: 'Time', 
      icons: ['filter'],
      sortable: true,
      valueMapper: (value: string) => {
        // Example: Format date string
        if (value && value.includes(',')) {
          const [date, time] = value.split(',');
          return `${date.trim()} | ${time.trim()}`;
        }
        return value;
      }
    }
  ];
  
  // Pagination for meeting data
  currentPage = 1;
  pageSize = 5;
  totalRows = this.tableData?.length;

  // Pagination for financial data
  financialPage = 1;
  financialPageSize = 10;
  financialTotalRows = this.financialData?.length;

  // Calculate average score dynamically
  get averageScore(): number {
    if (this.financialData.length === 0) return 0;
    const total = this.financialData.reduce((sum, item) => sum + item.financialScore, 0);
    return Math.round((total / this.financialData.length) * 100) / 100;
  }

  // Custom footer values example - only show values for specific columns
  customFooterValues = {
    // idealValue: '₹ 1,27,87,666', // Total Ideal Value
    // actualValue: '₹ 11,22,46,000', // Total Actual Value
    financialScore: '61.67' // Average Financial Score
    // Note: scoringMetric is not included, so it will only show the footerLabel
  };

  onPageChange(page: number): void {
    this.currentPage = page;
    console.log('Page changed to:', page);
  }

  onFinancialPageChange(page: number): void {
    this.financialPage = page;
    console.log('Financial page changed to:', page);
  }

  onSortChange(event: any): void {
    console.log('Sort changed:', event);
    // You can handle server-side sorting here if needed
    // event has: { field: string; direction: 'asc' | 'desc' | null }
  }

  onFinancialSortChange(event: any): void {
    console.log('Financial sort changed:', event);
  }
  
  searchValue: string = '';
  
  onSearchChange(value: string) {
  console.log('Search input:', value);
  }
  
  onSearchButtonClick() {
  console.log('Button clicked!');
  }

  // Handle action button click
  onActionButtonClick(row: any) {
    console.log('Action button clicked for policy:', row);
    alert(`Action for policy: ${row.policyName}\nSuggested Action: ${row.suggestedAction}`);
  }

  // Helper to find a column by field (handles nested subHeaders)
  private findColumnByField(columns: any[], field: string): any {
    for (const col of columns) {
      if (col.field === field) {
        return col;
      }
      if (col.subHeaders) {
        const found = this.findColumnByField(col.subHeaders, field);
        if (found) return found;
      }
    }
    return null;
  }
}
