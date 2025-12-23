import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { Search, TableComponent, ButtonComponent, ModalComponent, DashboardCard, HeaderComponent, ButtonType, Tooltip, Login, Tabpane } from '../../dist/eos-comp';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, Search, TableComponent, RouterOutlet, ButtonComponent, ModalComponent, DashboardCard, HeaderComponent, Tooltip, Login, Tabpane],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  protected readonly title = signal('eos-ui-components');
  protected readonly isModalOpen = signal(false);
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

threeDot = `<svg _ngcontent-ng-cli-universal-c1948619073="" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="mr-2"><path _ngcontent-ng-cli-universal-c1948619073="" d="M5.99997 8.19501C5.22497 8.19501 4.59497 8.825 4.59497 9.595C4.59497 10.37 5.22497 11 5.99997 11C6.77497 11 7.40497 10.37 7.40497 9.595C7.40497 8.825 6.77497 8.19501 5.99997 8.19501Z" fill="#1A1A1A"></path><path _ngcontent-ng-cli-universal-c1948619073="" d="M5.99997 7.405C6.77593 7.405 7.40497 6.77596 7.40497 6C7.40497 5.22404 6.77593 4.595 5.99997 4.595C5.22401 4.595 4.59497 5.22404 4.59497 6C4.59497 6.77596 5.22401 7.405 5.99997 7.405Z" fill="#1A1A1A"></path><path _ngcontent-ng-cli-universal-c1948619073="" d="M5.99997 1C5.22497 1 4.59497 1.63 4.59497 2.405C4.59497 3.175 5.22497 3.80499 5.99997 3.80499C6.77497 3.80499 7.40497 3.175 7.40497 2.405C7.40497 1.63 6.77497 1 5.99997 1Z" fill="#1A1A1A"></path></svg>`

menuItems = [{label: 'Item 1'}, {label: 'Item 2'}, {label: 'Item 3'}];

buttons: {
  label: string;
  variant: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
}[] = [
  { label: 'Plain btn', variant: 'primary', disabled: false, loading: false},
  { label: 'Prefix Icon btn', variant: 'primary', disabled: false, loading: false, prefixIcon: 'assets/filter-icon.svg'},
  { label: 'Suffix Icon btn', variant: 'secondary', disabled: false, loading: false, suffixIcon: "assets/filter-icon.svg" },
  { label: 'Prefix Suffix btn', variant: 'secondary', disabled: false, loading: false, prefixIcon:"assets/filter-icon.svg", suffixIcon: "assets/filter-icon.svg" },
  { label: 'Disabled btn', variant: 'secondary', disabled: true, loading: false },
  { label: 'loading btn', variant: 'secondary', disabled: false, loading: true },
];

headerbtn1: ButtonType[] = [
  { label: 'Consultation Mode', variant: 'secondary', disabled: false, loading: false, clicked: this.buttonClick.bind(this), prefixIcon: 'assets/filter-icon.svg'},
  { 
    label: 'Calulate', 
    variant: 'secondary', 
    disabled: false, 
    loading: false, 
    clicked: this.buttonClick.bind(this),
    prefixIcon: "assets/calculate.svg", 
  },
];

headerbtn: ButtonType[] = [
  { label: 'Update Data', variant: 'secondary', disabled: false, loading: false, clicked: this.buttonClick.bind(this)},
  { label: 'Workbook', variant: 'secondary', disabled: false, loading: false, clicked: this.buttonClick.bind(this)},
  { 
    label: 'Menu', 
    variant: 'secondary', 
    disabled: false, 
    loading: false, 
    prefixIcon: "assets/threeDot.svg", 
    dropdown: true, 
    openOnHover: true, 
    dropdownList: this.menuItems,
    dropdownClicked: this.handleDropdownClick.bind(this)
  },
];

  data = [
    {
      name: 'Item A',
      status: 'In Stock',
      updatedAt: new Date('2024-11-10T10:00:00'),
    },
    {
      name: 'Item B',
      status: 'Backordered',
      updatedAt: new Date('2024-11-12T09:30:00'),
    },
    {
      name: 'Item C',
      status: 'Discontinued',
      updatedAt: new Date('2024-11-09T16:45:00'),
    },
  ];

  handleIconClicked(){
    console.log('clicked icon in header');
  }
  
  buttonClick(event: MouseEvent): void {
    window.alert('btn clicked successfully')
  }

  handleDropdownClick(){
    console.log('check'); 
  }

  handleButtonClick(){
    console.log('check button click'); 
  }

  ModalbtnClick1(event: MouseEvent): void{
    console.log(event, 'clicked 1');
  }

  ModalbtnClick2(event: MouseEvent): void{
    console.log(event, 'clicked 2');
  }

  modalButtonClick(event: MouseEvent): void {
    this.isModalOpen.set(true);
  }

  onDashboardClick(){
    console.log('dasboard click');
  }

  onModalOpenChange(open: boolean): void {
    this.isModalOpen.set(open);
  }

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

  currentPage = 1;
  pageSize = 5;
  totalRows = this.tableData?.length; 

  onPageChange(page: number): void {
    this.currentPage = page;
    console.log('Page changed to:', page);
  }

  onSortChange(event: any): void {
    console.log('Sort changed:', event);
    // You can handle server-side sorting here if needed
    // event has: { field: string; direction: 'asc' | 'desc' | null }
  }
  list = ["Male", "26 years,Married, 1 kid","Industry Name -,Mumbai, Maharashtra","Source -"]

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

  searchValue: string = '';

onSearchChange(value: string) {
  console.log('Search input:', value);
}

onSearchButtonClick() {
  console.log('Button clicked!');
}

searchIcon = `<svg width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.442.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
</svg>`;


}