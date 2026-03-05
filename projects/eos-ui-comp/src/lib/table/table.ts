import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

export type CellType = 'text' | 'dropdown' | 'tooltip' | 'custom';
export type SortDirection = 'asc' | 'desc' | null;

/**
 * TableColumn Interface
 *
 * Configuration for table columns with support for multi-level headers.
 *
 * @example
 * // Simple single-level column
 * {
 *   label: 'Name',
 *   field: 'name',
 *   sortable: true
 * }
 *
 * @example
 * // Multi-level header with subHeaders
 * {
 *   label: 'Current Liability Distribution',
 *   field: '',
 *   subHeaders: [
 *     { label: 'Outstanding', field: 'outstanding' },
 *     { label: 'EMI', field: 'emi' }
 *   ]
 * }
 *
 * @example
 * // Column with rowspan (spans multiple header rows)
 * {
 *   label: 'Liability Type',
 *   field: 'liabilityType',
 *   rowspan: 2  // Spans 2 rows in the header
 * }
 */
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
  colspan?: number; // Number of columns this header spans
  subHeaders?: TableColumn[]; // Sub-headers for multi-level headers
  rowspan?: number; // Number of rows this header spans (for headers without subheaders)
}

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.css']
})
export class TableComponent {
  @Input() tableType: 'dynamic' | 'static' | 'financial-scoring' = 'dynamic';
  @Input() columns: TableColumn[] = [];
  @Input() rows: any[] = []; // Changed to any[] to support dynamic data
  @Input() total: number = 0;
  @Input() page: number = 1;
  @Input() pageSize: number = 5;
  @Input() showFooter: boolean = false; // Enable footer row
  @Input() footerLabel: string = 'Avg Score'; // Label for first column in footer
  @Input() footerCalculation: 'avg' | 'sum' | 'custom' = 'avg'; // Type of calculation
  @Input() footerValues?: any; // Custom footer values
  @Input() showHeaderBorder: boolean = true; // Show/hide header borders
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

  getFooterValue(column: TableColumn, columnIndex: number): string {
    // First column shows the footer label
    if (columnIndex === 0) {
      return this.footerLabel;
    }

    // If custom footer values are provided, use them
    if (this.footerValues && this.footerValues[column.field] !== undefined) {
      return this.footerValues[column.field];
    }

    // Calculate based on footerCalculation type
    if (this.footerCalculation === 'avg' || this.footerCalculation === 'sum') {
      const values = this.rows.map(row => {
        const value = row[column.field];
        // Try to extract numeric value from string (e.g., "₹ 1,22,87,666" -> 12287666)
        if (typeof value === 'string') {
          const numericValue = parseFloat(value.replace(/[₹,\s]/g, ''));
          return isNaN(numericValue) ? 0 : numericValue;
        }
        return typeof value === 'number' ? value : 0;
      });

      const total = values.reduce((sum, val) => sum + val, 0);

      if (this.footerCalculation === 'avg') {
        const avg = this.rows.length > 0 ? total / this.rows.length : 0;
        // If it's the last column (likely a score), show as decimal
        if (columnIndex === this.columns.length - 1) {
          return avg.toFixed(2);
        }
        return ''; // Empty for middle columns
      } else {
        return total.toString();
      }
    }

    return '';
  }

  // Calculate average for the last column (financial score)
  calculateAverage(): string {
    if (this.rows.length === 0 || this.columns.length === 0) {
      return '0';
    }

    // Get the last column field (financial score)
    const lastColumn = this.columns[this.columns.length - 1];
    const values = this.rows.map(row => {
      const value = row[lastColumn.field];
      return typeof value === 'number' ? value : 0;
    });

    const total = values.reduce((sum, val) => sum + val, 0);
    const avg = total / this.rows.length;

    return avg.toFixed(2);
  }

  // Check if table has multi-level headers
  hasMultiLevelHeaders(): boolean {
    return this.columns.some(col => col.subHeaders && col.subHeaders.length > 0);
  }

  // Get all leaf columns (columns that will be used for data rendering)
  getLeafColumns(): TableColumn[] {
    const leafColumns: TableColumn[] = [];

    const traverse = (columns: TableColumn[]) => {
      columns.forEach(col => {
        if (col.subHeaders && col.subHeaders.length > 0) {
          traverse(col.subHeaders);
        } else {
          leafColumns.push(col);
        }
      });
    };

    traverse(this.columns);
    return leafColumns;
  }

  // Get colspan for a column (if it has subheaders, return count of leaf columns)
  getColspan(column: TableColumn): number {
    if (column.colspan) {
      return column.colspan;
    }

    if (column.subHeaders && column.subHeaders.length > 0) {
      return column.subHeaders.reduce((sum, sub) => sum + this.getColspan(sub), 0);
    }

    return 1;
  }

  // Get rowspan for a column (if it doesn't have subheaders, it spans remaining rows)
  getRowspan(column: TableColumn, currentLevel: number, maxLevel: number): number {
    if (column.rowspan) {
      return column.rowspan;
    }

    if (!column.subHeaders || column.subHeaders.length === 0) {
      return maxLevel - currentLevel + 1;
    }

    return 1;
  }

  // Get maximum depth of header hierarchy
  getMaxHeaderDepth(): number {
    const getDepth = (columns: TableColumn[], depth: number = 1): number => {
      const childDepths = columns
        .filter(col => col.subHeaders && col.subHeaders.length > 0)
        .map(col => getDepth(col.subHeaders!, depth + 1));

      return childDepths.length > 0 ? Math.max(...childDepths) : depth;
    };

    return getDepth(this.columns);
  }

  // Get columns for a specific header level
  getColumnsForLevel(level: number): TableColumn[] {
    const result: TableColumn[] = [];

    const traverse = (columns: TableColumn[], currentLevel: number) => {
      columns.forEach(col => {
        if (currentLevel === level) {
          result.push(col);
        }
        if (col.subHeaders && col.subHeaders.length > 0 && currentLevel < level) {
          traverse(col.subHeaders, currentLevel + 1);
        }
      });
    };

    traverse(this.columns, 1);
    return result;
  }
}
