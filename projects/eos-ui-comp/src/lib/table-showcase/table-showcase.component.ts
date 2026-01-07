import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, TableColumn } from '../table/table';

@Component({
  selector: 'lib-table-showcase',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './table-showcase.component.html',
  styleUrls: ['./table-showcase.component.css']
})
export class TableShowcaseComponent {
  // Main Table columns (with all features)
  columns: TableColumn[] = [
    {
      label: 'Client Name',
      field: 'clientName',
      sortable: true,
      icons: ['filter', 'tune'],
      tuneOptions: ['All Clients', 'Active', 'Inactive']
    },
    {
      label: 'Meeting',
      field: 'meeting',
      sortable: true,
      cellType: 'tooltip',
      tooltipField: 'meetingTooltip',
      showTooltipField: 'showMeetingTooltip',
      icons: ['filter', 'tune'],
      tuneOptions: ['Discovery', 'Follow-up', 'Consultation']
    },
    {
      label: 'Type',
      field: 'type',
      sortable: true,
      icons: ['filter', 'tune'],
      tuneOptions: ['Online', 'Offline', 'Phone']
    },
    {
      label: 'Attendance',
      field: 'attendance',
      cellType: 'dropdown',
      dropdownOptions: ['Select', 'Present', 'Absent', 'Partial'],
      icons: ['filter']
    },
    {
      label: 'Meeting Host',
      field: 'meetingHost',
      sortable: true,
      icons: ['filter', 'tune'],
      tuneOptions: ['TEST USER 4 CO', 'TEST USER 2 CO', 'Admin']
    },
    {
      label: 'Date & Time',
      field: 'dateTime',
      sortable: true,
      icons: ['filter', 'tune'],
      tuneOptions: ['Today', 'This Week', 'This Month']
    },
    {
      label: 'Time',
      field: 'time',
      sortable: true,
      icons: ['filter']
    }
  ];

  // Simple Non-Editable Table columns
  simpleColumns: TableColumn[] = [
    {
      label: 'Name',
      field: 'name',
      sortable: true
    },
    {
      label: 'Email',
      field: 'email',
      sortable: true
    },
    {
      label: 'Status',
      field: 'status',
      sortable: true
    },
    {
      label: 'Role',
      field: 'role',
      sortable: false
    }
  ];

  // Table with Tooltips columns
  tooltipColumns: TableColumn[] = [
    {
      label: 'Product',
      field: 'product',
      sortable: true
    },
    {
      label: 'Description',
      field: 'description',
      cellType: 'tooltip',
      tooltipField: 'fullDescription',
      showTooltipField: 'hasTooltip',
      sortable: true
    },
    {
      label: 'Price',
      field: 'price',
      sortable: true
    },
    {
      label: 'Category',
      field: 'category',
      sortable: true
    }
  ];

  // Compact Table columns
  compactColumns: TableColumn[] = [
    {
      label: 'ID',
      field: 'id',
      sortable: true
    },
    {
      label: 'Task',
      field: 'task',
      sortable: true
    },
    {
      label: 'Priority',
      field: 'priority',
      sortable: true
    }
  ];

  // Main table data
  tableData = [
    {
      clientName: 'ANIMESH HARDIA',
      meeting: 'Discovery',
      meetingTooltip: 'Initial discovery meeting to understand client needs',
      showMeetingTooltip: true,
      type: 'Online',
      attendance: 'Select',
      meetingHost: 'TEST USER 4 CO',
      dateTime: 'Dec 11 | 2023',
      time: 'Dec 11 | 2023'
    },
    {
      clientName: 'ARUN GUPTA',
      meeting: 'Discovery',
      meetingTooltip: 'Follow-up discovery session',
      showMeetingTooltip: false,
      type: 'Online',
      attendance: 'Select',
      meetingHost: 'TEST USER 4 CO',
      dateTime: 'Dec 11 | 2023',
      time: 'Dec 11 | 2023'
    }
  ];

  // Simple table data
  simpleData = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Active',
      role: 'Admin'
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Inactive',
      role: 'User'
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'Active',
      role: 'Manager'
    }
  ];

  // Tooltip table data
  tooltipData = [
    {
      product: 'Laptop Pro',
      description: 'High-performance laptop...',
      fullDescription: 'High-performance laptop with 16GB RAM, 512GB SSD, and Intel i7 processor',
      hasTooltip: true,
      price: '$1,299',
      category: 'Electronics'
    },
    {
      product: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse',
      fullDescription: 'Ergonomic wireless mouse with precision tracking and long battery life',
      hasTooltip: true,
      price: '$29',
      category: 'Accessories'
    },
    {
      product: 'Monitor Stand',
      description: 'Adjustable monitor stand',
      fullDescription: 'Adjustable monitor stand with height and tilt controls',
      hasTooltip: true,
      price: '$89',
      category: 'Accessories'
    }
  ];

  // Compact table data
  compactData = [
    {
      id: '001',
      task: 'Review Documentation',
      priority: 'High'
    },
    {
      id: '002',
      task: 'Update Database',
      priority: 'Medium'
    },
    {
      id: '003',
      task: 'Test Features',
      priority: 'Low'
    },
    {
      id: '004',
      task: 'Deploy Application',
      priority: 'High'
    }
  ];

  currentPage = 1;
  pageSize = 5;
  totalRecords = 2;

  onPageChange(page: number): void {
    this.currentPage = page;
    console.log('Page changed to:', page);
  }

  onSortChange(event: { field: string; direction: 'asc' | 'desc' | null }): void {
    console.log('Sort changed:', event);
  }
}