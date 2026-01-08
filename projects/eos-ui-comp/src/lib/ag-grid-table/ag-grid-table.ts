import { Component } from '@angular/core';

// Angular Data Grid Component
import { AgGridAngular } from 'ag-grid-angular';
// Column Definition Type Interface
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'lib-ag-grid-table',
  imports: [AgGridAngular],
  templateUrl: './ag-grid-table.html',
  styleUrl: './ag-grid-table.css',
})
export class AgGridTable {
  // Row Data: The data to be displayed.
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];

}
