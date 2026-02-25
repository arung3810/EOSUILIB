import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartWithLegend } from './pie-chart-with-legend';

describe('PieChartWithLegend', () => {
  let component: PieChartWithLegend;
  let fixture: ComponentFixture<PieChartWithLegend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartWithLegend],
    }).compileComponents();

    fixture = TestBed.createComponent(PieChartWithLegend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render pie chart by default', () => {
    expect(component.type).toBe('pie');
  });

  it('should accept chart data', () => {
    const testData = [
      { label: 'Category A', value: 38 },
      { label: 'Category B', value: 31 },
    ];
    component.data = testData;
    component.ngOnChanges({
      data: {
        currentValue: testData,
        previousValue: [],
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    expect(component.chartOptions.series).toEqual([38, 31]);
  });
});
