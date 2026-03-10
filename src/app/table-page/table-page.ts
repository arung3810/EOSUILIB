import { Component, ViewChild, TemplateRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../../dist/eos-comp';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-table-page',
  imports: [ TableComponent, CommonModule ],
  templateUrl: './table-page.html',
  styleUrl: './table-page.css',
})
export class TablePage implements AfterViewInit {
  @ViewChild('actionButtonTemplate', { static: false }) actionButtonTemplate!: TemplateRef<any>;
  @ViewChild('headerRightTemplate', { static: false }) headerRightTemplate!: TemplateRef<any>;

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
      field: 'label',
      align: 'left' as const
    },
    {
      label: 'Old Regime',
      field: 'oldRegime',
      align: 'right' as const
    },
    {
      label: 'New Regime (opted)',
      field: 'newRegime',
      align: 'right' as const
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
      sortable: false,
      align: 'left' as const
    },
    {
      label: 'Ideal Value',
      field: 'idealValue',
      sortable: false,
      align: 'right' as const
    },
    {
      label: 'Actual Value',
      field: 'actualValue',
      sortable: false,
      align: 'right' as const
    },
    {
      label: 'Financial Score',
      field: 'financialScore',
      sortable: true,
      align: 'center' as const
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
      align: 'center' as const,
      subHeaders: [
        {
          label: 'Policy Name',
          field: 'policyName',
          sortable: false,
          align: 'left' as const
        },
        {
          label: 'Plan Type',
          field: 'planType',
          sortable: false,
          align: 'center' as const
        },
        {
          label: 'Start Date',
          field: 'startDate',
          sortable: false,
          align: 'center' as const
        },
        {
          label: 'Policy Tenure',
          field: 'policyTenure',
          sortable: false,
          align: 'center' as const
        },
        {
          label: 'Annual Premium',
          field: 'annualPremium',
          sortable: false,
          align: 'right' as const
        },
        {
          label: 'Life Cover',
          field: 'lifeCover',
          sortable: false,
          align: 'right' as const
        }
      ]
    },
    {
      label: 'Policy Evaluation',
      field: '',
      sortable: false,
      align: 'center' as const,
      subHeaders: [
        {
          label: 'Premium Paid Till Date',
          field: 'premiumPaidTillDate',
          sortable: false,
          align: 'right' as const
        },
        {
          label: 'Premium Payable',
          field: 'premiumPayable',
          sortable: false,
          align: 'right' as const
        },
        {
          label: 'Suggested Action',
          field: 'suggestedAction',
          sortable: false,
          cellType: 'custom' as const,
          customTemplate: this.actionButtonTemplate,
          align: 'center' as const
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
      rowspan: 2, // This column spans 2 rows (no subheaders)
      align: 'left' as const
    },
    {
      label: 'Current Liability Distribution',
      field: '',
      sortable: false,
      align: 'center' as const,
      subHeaders: [
        {
          label: 'Outstanding',
          field: 'outstanding',
          sortable: false,
          align: 'right' as const
        },
        {
          label: 'EMI',
          field: 'emi',
          sortable: true,
          align: 'right' as const
        }
      ]
    },
    {
      label: 'Suggested Range',
      field: '',
      sortable: false,
      align: 'center' as const,
      subHeaders: [
        {
          label: 'Loan Size',
          field: 'loanSize',
          sortable: false,
          align: 'center' as const
        },
        {
          label: 'EMI',
          field: 'emiRange',
          sortable: false,
          align: 'center' as const
        }
      ]
    }
  ];

  customFooterValuesPolicy = {
    policyName: '',
    planType: '',
    startDate: '',
    policyTenure: '',
    annualPremium : "11.6L",
    lifeCover : "8.8Cr",
    premiumPaidTillDate : "3.6L",
    premiumPayable : "₹0.0",
    suggestedAction: ''
  };

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
      valueMapper: (value: string) => value ? value.toUpperCase() : value,
      align: 'left' as const
    },
    {
      label: 'Meeting',
      field: 'meeting',
      icons: ['tune'],
      tuneOptions: [1,2,3],
      cellType: 'tooltip' as const,
      sortable: true,
      align: 'center' as const
    },
    {
      label: 'Type',
      field: 'type',
      sortable: true,
      valueMapper: (value: string) => value, // Example: Add emoji
      align: 'center' as const
    },
    {
      label: 'Attendance',
      cellType: 'dropdown' as const,
      field: 'attendance', // This field contains the options array
      dropdownOptions: true, // When true, uses row[field] as options
      align: 'center' as const
    },
    {
      label: 'Meeting Host',
      field: 'host',
      icons: ['filter'],
      sortable: true,
      align: 'left' as const
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
      },
      align: 'center' as const
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
      },
      align: 'center' as const
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

  // Handle create meeting button click
  onCreateMeetingClick() {
    console.log('Create meeting button clicked');
    alert('Create Meeting functionality will be implemented here');
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

  // Income & Expense Table using AG-Grid (matching the provided image)
  incomeExpenseRowData = [
    {
      particulars: 'Bonus Income',
      type: 'CREDIT',
      amount: null,
      hasEdit: true
    },
    {
      particulars: 'Gross Income',
      type: 'CREDIT',
      amount: 715805
    },
    {
      particulars: 'Household & Lifestyle Expenses',
      type: 'DEBIT',
      amount: 149750
    },
    {
      particulars: 'Tax Expenses',
      type: 'DEBIT',
      amount: 116237
    },
    {
      particulars: 'EMIs',
      type: 'DEBIT',
      amount: 5717958
    },
    {
      particulars: 'Planned Investments',
      type: 'DEBIT',
      amount: 256200
    },
    {
      particulars: 'Insurance Premium',
      type: 'DEBIT',
      amount: null
    }
  ];

  // Deductions & Exemptions Table using AG-Grid (matching the provided image)
  deductionsRowData = [
    {
      title: 'Health/Medical insurance premium',
      subDetails: 'Section 80D - Self. Spouse. Children',
      maxDeduction: 25000,
      currentValue: 4000,
      suggestedUtilisation: 25000,
      additionalAmount: 21000,
      eligible: false,
      hasViewDetails: false
    },
    {
      title: 'Life insurance premium, ELSS Mutual Funds, School fees, PPF, EPF, etc',
      subDetails: 'Section 80C/CCC/CCD (1)',
      maxDeduction: 150000,
      currentValue: 420000,
      suggestedUtilisation: 80000,
      additionalAmount: 0,
      eligible: true,
      hasViewDetails: false
    },
    {
      title: 'Health/Medical insurance premium',
      subDetails: 'Section 80D - Parents',
      maxDeduction: 25000,
      currentValue: 10000,
      suggestedUtilisation: 25000,
      additionalAmount: 15000,
      eligible: true,
      hasViewDetails: false
    },
    {
      title: 'NPS for additional deduction of Rs. 50,000',
      subDetails: 'Section 80CCD (1B)',
      maxDeduction: 50000,
      currentValue: 3000,
      suggestedUtilisation: 50000,
      additionalAmount: 47000,
      eligible: true,
      hasViewDetails: false
    },
    {
      title: 'Employer contribution to NPS',
      subDetails: 'Section 80CCD (2)',
      maxDeductionOld: 210000,
      maxDeductionNew: 210000,
      currentValue: 3000,
      suggestedUtilisation: 210000,
      additionalAmount: 207000,
      eligible: true,
      hasViewDetails: true
    },
    {
      title: 'Interest on Home loan for self-occupied property',
      subDetails: 'Section 24(b)',
      maxDeduction: 200000,
      currentValue: 0,
      suggestedUtilisation: 210000,
      additionalAmount: 0,
      eligible: true,
      hasViewDetails: false
    }
  ];

  // Income & Expense Table Column Definitions
  incomeExpenseColDefs: ColDef[] = [
    {
      headerName: 'Particulars',
      field: 'particulars',
      minWidth: 450,
      flex: 2,
      cellClass: 'particulars-cell',
      cellStyle: { textAlign: 'left', paddingLeft: '24px' },
      cellRenderer: (params: any) => {
        const { particulars, hasEdit } = params.data;

        let html = `<div class="particulars-wrapper" style="display: flex; align-items: center; gap: 12px;">`;
        html += `<span class="particulars-text">${particulars}</span>`;

        if (hasEdit) {
          html += `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="cursor: pointer; flex-shrink: 0;">
            <path d="M11.3333 2.00004C11.5084 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4188 1.44788 12.6667 1.44788C12.9145 1.44788 13.1598 1.49653 13.3886 1.59129C13.6173 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.38274 14.4088 2.61149C14.5035 2.84024 14.5522 3.08553 14.5522 3.33337C14.5522 3.58122 14.5035 3.82651 14.4088 4.05526C14.314 4.28401 14.1751 4.49161 14 4.66671L5.00001 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00004Z" stroke="#8B8D93" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
        }

        html += `</div>`;
        return html;
      }
    },
    {
      headerName: 'Type',
      field: 'type',
      minWidth: 200,
      flex: 1,
      cellClass: 'type-cell',
      cellStyle: { textAlign: 'center' },
      cellRenderer: (params: any) => {
        const { type } = params.data;

        if (!type) return '';

        const isCredit = type === 'CREDIT';
        const color = isCredit ? '#10B981' : '#EF4444';

        return `<span style="color: ${color}; font-weight: 600; font-size: 13px;">${type}</span>`;
      }
    },
    {
      headerName: 'Amount',
      field: 'amount',
      minWidth: 200,
      flex: 1,
      cellClass: 'amount-cell',
      cellStyle: { textAlign: 'right', paddingRight: '24px' },
      cellRenderer: (params: any) => {
        const { amount } = params.data;

        if (amount === null || amount === undefined) {
          return '<span style="color: #8B8D93;">-</span>';
        }

        return `<span style="font-weight: 500;">₹ ${amount.toLocaleString('en-IN')}</span>`;
      }
    }
  ];

  incomeExpenseGridOptions: GridOptions = {
    defaultColDef: {
      sortable: false,
      filter: false,
      resizable: false,
      suppressMovable: true
    },
    domLayout: 'autoHeight',
    headerHeight: 56,
    rowHeight: 64,
    suppressRowHoverHighlight: false,
    suppressHorizontalScroll: false,
    suppressRowClickSelection: true,
    rowSelection: undefined,
    rowClass: 'income-expense-row'
  };

  // Column alignments for income/expense table
  incomeExpenseColumnAlignments = {
    particulars: 'left' as const,
    type: 'center' as const,
    amount: 'right' as const
  };

  deductionsColDefs: ColDef[] = [
    {
      headerName: 'Deductions & Exemptions',
      field: 'title',
      minWidth: 350,
      flex: 2,
      cellClass: 'deduction-details-cell',
      wrapText: true,
      autoHeight: true,
      cellRenderer: (params: any) => {
        if (params.data.isTotal) return '';

        const { title, subDetails, eligible } = params.data;

        let html = `<div class="deduction-details-wrapper" style="display: flex; flex-direction: column; gap: 4px; padding: 8px 0; word-wrap: break-word;">`;
        html += `<div class="deduction-title-row" style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">`;
        html += `<span class="deduction-title">${title}</span>`;
        if (eligible) {
          html += `<span class="eligible-badge" style="flex-shrink: 0;">ELIGIBLE</span>`;
          html += `<a href="javascript:void(0)" class="view-details-link" data-row-index="${params.node.rowIndex}" style="flex-shrink: 0; white-space: nowrap;">View Details</a>`;
        }
        html += `</div>`;
        if (subDetails) {
          html += `<div class="deduction-subtitle" style="word-wrap: break-word;">${subDetails}</div>`;
        }
        html += `</div>`;
        return html;
      },
      onCellClicked: (params: any) => {
        const target = params.event?.target as HTMLElement;
        if (target?.classList.contains('view-details-link')) {
          this.onViewDetailsClick(params.data);
        }
      }
    },
    {
      headerName: 'Max. Deduction',
      field: 'maxDeduction',
      minWidth: 180,
      flex: 1,
      cellClass: 'max-deduction-cell',
      cellStyle: { textAlign: 'right', paddingRight: '24px' },
      cellRenderer: (params: any) => {
        if (params.data.isTotal) return '';

        const { hasViewDetails, maxDeductionOld, maxDeductionNew, maxDeduction } = params.data;

        if (hasViewDetails) {
          let html = `<div class="max-deduction-split">`;
          html += `<div class="regime-row">`;
          html += `<span class="regime-label">Old Regime</span>`;
          html += `<span class="regime-value">₹ ${maxDeductionOld.toLocaleString('en-IN')}</span>`;
          html += `</div>`;
          html += `<div class="regime-row">`;
          html += `<span class="regime-label">New Regime</span>`;
          html += `<span class="regime-value">₹ ${maxDeductionNew.toLocaleString('en-IN')}</span>`;
          html += `</div>`;
          html += `</div>`;
          return html;
        }

        return `₹ ${maxDeduction.toLocaleString('en-IN')}`;
      }
    },
    {
      headerName: 'Current Value',
      field: 'currentValue',
      minWidth: 150,
      flex: 1,
      cellClass: 'current-value-cell',
      cellStyle: { textAlign: 'right', paddingRight: '24px', color: '#8B8D93' },
      cellRenderer: (params: any) => {
        if (params.data.isTotal) {
          return `<strong style="color: #16192C;">₹ ${params.value.toLocaleString('en-IN')}</strong>`;
        }
        return `₹ ${params.value.toLocaleString('en-IN')}`;
      }
    },
    {
      headerName: 'Suggested Utilisation',
      field: 'suggestedUtilisation',
      minWidth: 200,
      flex: 1.2,
      cellClass: 'suggested-utilisation-cell',
      cellRenderer: (params: any) => {
        const { suggestedUtilisation, additionalAmount, isTotal } = params.data;

        if (isTotal) {
          return `<strong style="color: #16192C;">₹ ${suggestedUtilisation.toLocaleString('en-IN')}</strong>`;
        }

        let html = `<div class="suggested-util-wrapper">`;
        html += `<div class="suggested-util-content">`;
        html += `<div class="suggested-main-amount">₹ ${suggestedUtilisation.toLocaleString('en-IN')}</div>`;

        if (additionalAmount > 0) {
          html += `<div class="suggested-additional">Additional ₹ ${additionalAmount.toLocaleString('en-IN')}</div>`;
        }
        html += `</div>`;

        // Edit icon
        html += `<button class="edit-icon-btn" onclick="console.log('Edit clicked')">`;
        html += `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3333 2.00004C11.5084 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4188 1.44788 12.6667 1.44788C12.9145 1.44788 13.1598 1.49653 13.3886 1.59129C13.6173 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.38274 14.4088 2.61149C14.5035 2.84024 14.5522 3.08553 14.5522 3.33337C14.5522 3.58122 14.5035 3.82651 14.4088 4.05526C14.314 4.28401 14.1751 4.49161 14 4.66671L5.00001 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00004Z" stroke="#8B8D93" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        html += `</button>`;
        html += `</div>`;

        return html;
      }
    }
  ];

  deductionsGridOptions: GridOptions = {
    defaultColDef: {
      sortable: false,
      filter: false,
      resizable: false,
      suppressMovable: true,
      wrapText: true,
      autoHeight: true
    },
    domLayout: 'normal', // Changed from 'autoHeight' to 'normal' for scrolling
    headerHeight: 60,
    suppressRowHoverHighlight: false,
    suppressHorizontalScroll: false,
    suppressRowClickSelection: true, // Disable row selection on click
    rowSelection: undefined, // Disable row selection completely
    rowClass: 'deduction-row',
    getRowClass: (params) => {
      if (params.data.isTotal) {
        return 'total-row';
      }
      return '';
    },
    // Add pinned bottom row for totals
    pinnedBottomRowData: [
      {
        title: '',
        maxDeduction: '',
        currentValue: 0,
        suggestedUtilisation: 210000,
        isTotal: true
      }
    ]
  };

  // Column alignments for deductions table (field-level control)
  deductionsColumnAlignments = {
    title: 'left' as const,
    maxDeduction: 'right' as const,
    currentValue: 'right' as const,
    suggestedUtilisation: 'right' as const
  };

  // Method to handle edit button clicks
  onEditDeduction(rowData: any) {
    console.log('Edit deduction:', rowData);
    // Implement your edit logic here
  }

  // Method to handle view details link clicks
  onViewDetailsClick(rowData: any) {
    console.log('View Details clicked for:', rowData);
    console.log('Title:', rowData.title);
    console.log('SubDetails:', rowData.subDetails);
    console.log('Max Deduction:', rowData.maxDeduction);
    console.log('Current Value:', rowData.currentValue);
  }

  // Scheme Portfolio Table using AG-Grid (matching the image)
  schemePortfolioRowData = [
    {
      schemeName: 'Quant Small Cap Fund',
      plan: 'Direct',
      category: 'Equity',
      schemeType: 'Small cap Fund',
      totalExpenseRatio: 0.75,
      currentValue: 40.6,
      sip: 2,
      score: 69,
      isTotal: false
    }
  ];

  // Scheme Portfolio Table Column Definitions
  schemePortfolioColDefs: ColDef[] = [
    {
      headerName: 'Scheme Name',
      field: 'schemeName',
      minWidth: 250,
      flex: 2,
      cellClass: 'scheme-name-cell',
      cellStyle: { textAlign: 'left', paddingLeft: '24px', fontWeight: '500' },
      headerClass: 'header-with-sort',
      sortable: false,
      filter: false
    },
    {
      headerName: 'Plan',
      field: 'plan',
      minWidth: 150,
      flex: 1,
      cellClass: 'plan-cell',
      cellStyle: { textAlign: 'center' },
      headerClass: 'header-with-sort',
      sortable: true,
      filter: false,
      cellRenderer: (params: any) => {
        if (params.data.isTotal) return '';
        const { plan } = params.data;
        return `<span style="color: #10B981; font-weight: 500;">${plan}</span>`;
      }
    },
    {
      headerName: 'Category',
      field: 'category',
      minWidth: 150,
      flex: 1,
      cellClass: 'category-cell',
      cellStyle: { textAlign: 'center' },
      headerClass: 'header-with-sort header-with-filter',
      sortable: true,
      filter: 'agSetColumnFilter',
      floatingFilter: false,
      filterParams: {
        buttons: ['apply', 'reset'],
        closeOnApply: true
      },
      cellRenderer: (params: any) => {
        if (params.data.isTotal) return '';
        return params.value;
      }
    },
    {
      headerName: 'Scheme Type',
      field: 'schemeType',
      minWidth: 200,
      flex: 1.5,
      cellClass: 'scheme-type-cell',
      cellStyle: { textAlign: 'center' },
      headerClass: 'header-with-sort header-with-filter',
      sortable: true,
      filter: 'agSetColumnFilter',
      floatingFilter: false,
      filterParams: {
        buttons: ['apply', 'reset'],
        closeOnApply: true
      },
      cellRenderer: (params: any) => {
        if (params.data.isTotal) return '';
        return params.value;
      }
    },
    {
      headerName: 'Total Expense Ratio',
      field: 'totalExpenseRatio',
      minWidth: 180,
      flex: 1.2,
      cellClass: 'expense-ratio-cell',
      cellStyle: { textAlign: 'center' },
      headerClass: 'header-with-sort header-with-icon',
      sortable: true,
      filter: false,
      cellRenderer: (params: any) => {
        if (params.data.isTotal) {
          return `<div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9" stroke="#8B8D93" stroke-width="1.5"/>
              <path d="M10 6V10.5M10 14H10.01" stroke="#8B8D93" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <strong style="color: #16192C;">${params.value}%</strong>
          </div>`;
        }
        return `${params.value}%`;
      }
    },
    {
      headerName: 'Current Value',
      field: 'currentValue',
      minWidth: 170,
      flex: 1.2,
      cellClass: 'current-value-cell',
      cellStyle: { textAlign: 'right', paddingRight: '24px' },
      headerClass: 'header-with-sort',
      sortable: true,
      filter: false,
      cellRenderer: (params: any) => {
        if (params.data.isTotal) {
          return `<strong style="color: #16192C;">₹ ${params.value}K</strong>`;
        }
        return `₹ ${params.value}K`;
      }
    },
    {
      headerName: 'SIP',
      field: 'sip',
      minWidth: 150,
      flex: 1,
      cellClass: 'sip-cell',
      cellStyle: { textAlign: 'right', paddingRight: '24px' },
      headerClass: 'header-with-sort',
      sortable: true,
      filter: false,
      cellRenderer: (params: any) => {
        if (params.data.isTotal) {
          return `<strong style="color: #16192C;">₹ ${params.value}K</strong>`;
        }
        return `₹ ${params.value}K`;
      }
    },
    {
      headerName: 'Score',
      field: 'score',
      minWidth: 130,
      flex: 1,
      cellClass: 'score-cell',
      cellStyle: { textAlign: 'right', paddingRight: '24px' },
      headerClass: 'header-with-sort',
      sortable: true,
      filter: false,
      cellRenderer: (params: any) => {
        if (params.data.isTotal) {
          return `<strong style="color: #16192C;">${params.value}</strong>`;
        }
        return `<span style="font-weight: 500;">${params.value}</span>`;
      }
    }
  ];

  schemePortfolioGridOptions: GridOptions = {
    defaultColDef: {
      sortable: false,
      filter: false,
      resizable: false,
      suppressMovable: true,
      menuTabs: ['filterMenuTab'],
      suppressMenu: false
    },
    domLayout: 'autoHeight',
    headerHeight: 60,
    rowHeight: 72,
    suppressRowHoverHighlight: false,
    suppressHorizontalScroll: false,
    suppressRowClickSelection: true,
    rowSelection: undefined,
    rowClass: 'scheme-portfolio-row',
    suppressMenuHide: false,
    getRowClass: (params) => {
      if (params.data.isTotal) {
        return 'total-row';
      }
      return '';
    },
    // Add pinned bottom row for totals
    pinnedBottomRowData: [
      {
        schemeName: 'Total',
        plan: '',
        category: '',
        schemeType: '',
        totalExpenseRatio: 0.75,
        currentValue: 40.6,
        sip: 2,
        score: 69,
        isTotal: true
      }
    ]
  };

  // Column alignments for scheme portfolio table
  schemePortfolioColumnAlignments = {
    schemeName: 'left' as const,
    plan: 'center' as const,
    category: 'center' as const,
    schemeType: 'center' as const,
    totalExpenseRatio: 'center' as const,
    currentValue: 'right' as const,
    sip: 'right' as const,
    score: 'right' as const
  };
}
