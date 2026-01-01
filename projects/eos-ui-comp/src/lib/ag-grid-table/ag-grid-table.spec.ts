import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridTable } from './ag-grid-table';

describe('AgGridTable', () => {
  let component: AgGridTable;
  let fixture: ComponentFixture<AgGridTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
