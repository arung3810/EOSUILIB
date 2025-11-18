import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

export type CellType = 'text' | 'dropdown' | 'tooltip' | 'custom';
export type SortDirection = 'asc' | 'desc' | null;

export interface TableColumn {
  label: string;
  field: string;
  icons?: string[];   // ['filter','tune'],
  tuneOptions?: any[];
  cellType?: CellType;
  dropdownOptions?: boolean | string[] | ((row: any) => string[]);
  valueMapper?: (value: any, row: any) => any; // Function to transform/map the value
  sortable?: boolean;
  tooltipField?: string; // Field name for tooltip text (defaults to 'tooltipText')
  showTooltipField?: string; // Field name to check if tooltip should show (defaults to 'showTooltip')
  customTemplate?: (row: any) => string; // For custom cell rendering
}

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.css']
})
export class TableComponent {
  @Input() columns: TableColumn[] = [];  
  @Input() rows: any[] = []; // Changed to any[] to support dynamic data
  @Input() total: number = 0;
  @Input() page: number = 1;
  @Input() pageSize: number = 5;
  @Output() pageChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<{ field: string; direction: SortDirection }>();

  sortField: string | null = null;
  sortDirection: SortDirection = null;

  get computedTotal(): number {
    return this.total > 0 ? this.total : this.rows.length;
  }

  get totalPages(): number {
    const total = this.computedTotal;
    if (total === 0) return 1;
    return Math.ceil(total / this.pageSize);
  }

  get pageStartIndex(): number {
    const total = this.computedTotal;
    if (total === 0) return 0;
    return (this.page - 1) * this.pageSize + 1;
  }

  get pageEndIndex(): number {
    const total = this.computedTotal;
    if (total === 0) return 0;
    return Math.min(this.page * this.pageSize, total);
  }

  get paginatedRows(): any[] {
    let sortedRows = [...this.rows];
    
    // Apply sorting if active
    if (this.sortField && this.sortDirection) {
      sortedRows = this.sortRows(sortedRows, this.sortField, this.sortDirection);
    }
    
    // Apply pagination
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return sortedRows.slice(startIndex, endIndex);
  }

  getCellValue(row: any, column: TableColumn): any {
    const rawValue = row[column.field];
    
    // Apply value mapper if provided
    if (column.valueMapper) {
      return column.valueMapper(rawValue, row);
    }
    
    return rawValue;
  }

  shouldShowTooltip(row: any, column: TableColumn): boolean {
    const showTooltipField = column.showTooltipField || 'showTooltip';
    return row[showTooltipField] === true;
  }

  getTooltipText(row: any, column: TableColumn): string {
    const tooltipField = column.tooltipField || 'tooltipText';
    return row[tooltipField] || '';
  }

  getDropdownOptions(row: any, column: TableColumn): string[] {
    // If dropdownOptions is true, use the row's field value as the options array
    if (column.dropdownOptions === true) {
      const fieldValue = row[column.field];
      
      // If it's an array, use it as options
      if (Array.isArray(fieldValue)) {
        return fieldValue;
      }
      
      // If it's a string (selected value), we need to get the original options
      // Store original options in a hidden property when first converting from array to string
      const optionsKey = `_${column.field}_options`;
      if (row[optionsKey]) {
        return row[optionsKey];
      }
      
      return [];
    }
    
    // If it's a function, call it with the row
    if (typeof column.dropdownOptions === 'function') {
      return column.dropdownOptions(row);
    }
    
    // If it's an array, return it
    if (Array.isArray(column.dropdownOptions)) {
      return column.dropdownOptions;
    }
    
    return [];
  }

  getSelectedValue(row: any, column: TableColumn): string {
    const valueField = column.field;
    const value = row[valueField];
    
    // If dropdownOptions is true, the field might be an array (options) or string (selected value)
    if (column.dropdownOptions === true) {
      // If it's a string, that's the selected value
      if (typeof value === 'string') {
        return value;
      }
      // If it's an array, no value is selected yet
      return '';
    }
    
    // For other cases, return the value as string
    return value || '';
  }

  onDropdownChange(event: Event, row: any, column: TableColumn): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    const valueField = column.field;
    
    // If dropdownOptions is true, we need to preserve the original options array
    if (column.dropdownOptions === true) {
      const currentValue = row[valueField];
      const optionsKey = `_${column.field}_options`;
      
      // If current value is an array (options), save it before replacing with selected value
      if (Array.isArray(currentValue) && !row[optionsKey]) {
        row[optionsKey] = [...currentValue]; // Store a copy of the original options
      }
      
      // Store the selected value in the field
      row[valueField] = selectedValue;
    } else {
      // For other cases, just store the selected value
      row[valueField] = selectedValue;
    }
  }

  onSort(field: string): void {
    if (this.sortField === field) {
      // Toggle direction: null -> asc -> desc -> null
      if (this.sortDirection === null) {
        this.sortDirection = 'asc';
      } else if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
      } else {
        this.sortDirection = null;
        this.sortField = null;
      }
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    
    this.sortChange.emit({ field: this.sortField || '', direction: this.sortDirection });
  }

  private sortRows(rows: any[], field: string, direction: SortDirection): any[] {
    if (!direction) return rows;
    
    return [...rows].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      
      // Handle null/undefined values
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;
      
      // Compare values
      let comparison = 0;
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        comparison = aValue - bValue;
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }
      
      return direction === 'asc' ? comparison : -comparison;
    });
  }

  isColumnSorted(field: string): boolean {
    return this.sortField === field;
  }

  getSortIcon(field: string): string {
    if (this.sortField !== field) return '';
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }

  popUpClick(){
    console.log('pop');
  }

  filterClick(){
    console.log('filter');
  }

  goToFirstPage(): void {
    if (this.page > 1) {
      this.pageChange.emit(1);
    }
  }

  goToPreviousPage(): void {
    if (this.page > 1) {
      this.pageChange.emit(this.page - 1);
    }
  }

  goToNextPage(): void {
    if (this.page < this.totalPages) {
      this.pageChange.emit(this.page + 1);
    }
  }

  goToLastPage(): void {
    if (this.page < this.totalPages) {
      this.pageChange.emit(this.totalPages);
    }
  }

  onCategoryFilterChange(event: Event): void{
    console.log('clicked capture by selction');
  }
}
