import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { TableComponent, ButtonComponent, ModalComponent, DashboardCard, HeaderComponent, ButtonType } from '../../dist/eos-comp';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor,TableComponent, RouterOutlet, ButtonComponent, ModalComponent, DashboardCard, HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  protected readonly title = signal('eos-ui-components');
  protected readonly isModalOpen = signal(false);
  attendanceSvg = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill="#E8EEF6" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M1.5 21C1.5 21 0 21 0 19.5C0 18 1.5 13.5 9 13.5C16.5 13.5 18 18 18 19.5C18 21 16.5 21 16.5 21H1.5Z"
        fill="#4E85B8" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M9 12C11.4853 12 13.5 9.98528 13.5 7.5C13.5 5.01472 11.4853 3 9 3C6.51472 3 4.5 5.01472 4.5 7.5C4.5 9.98528 6.51472 12 9 12Z"
        fill="#4E85B8" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M23.7803 7.71967C24.0732 8.01256 24.0732 8.48744 23.7803 8.78033L19.2803 13.2803C19.1397 13.421 18.9489 13.5 18.75 13.5C18.5511 13.5 18.3603 13.421 18.2197 13.2803L15.9697 11.0303C15.6768 10.7374 15.6768 10.2626 15.9697 9.96967C16.2626 9.67678 16.7374 9.67678 17.0303 9.96967L18.75 11.6893L22.7197 7.71967C23.0126 7.42678 23.4874 7.42678 23.7803 7.71967Z"
        fill="#4E85B8" />
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
  { label: 'Consultation Mode', variant: 'secondary', disabled: false, loading: false, clicked: this.buttonClick.bind(this), prefixIcon: 'assets/play.svg'},
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
}
