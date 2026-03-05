import { Component } from '@angular/core';
import { TableComponent } from '../../../dist/eos-comp';

@Component({
  selector: 'app-table-page',
  imports: [ TableComponent ],
  templateUrl: './table-page.html',
  styleUrl: './table-page.css',
})
export class TablePage {
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
          sortable: false
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
}
