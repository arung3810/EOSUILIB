import { Component } from '@angular/core';
import { PieChartWithLegend, ChartData } from '../../../dist/eos-comp';

@Component({
  selector: 'app-piechart-page',
  imports: [PieChartWithLegend],
  templateUrl: './piechart-page.html',
  styleUrl: './piechart-page.css',
})
export class PieChartPage {
  // Pie Chart Data
  pieChartData: ChartData[] = [
    { label: 'Product A', value: 35, color: '#5B93FF' },
    { label: 'Product B', value: 25, color: '#FFD66B' },
    { label: 'Product C', value: 20, color: '#FF8B81' },
    { label: 'Product D', value: 20, color: '#7FCDA4' }
  ];

  // Donut Chart Data
  donutChartData: ChartData[] = [
    { label: 'Sales', value: 40, color: '#FF6B9D' },
    { label: 'Marketing', value: 30, color: '#4ECDC4' },
    { label: 'Operations', value: 20, color: '#FFE66D' },
    { label: 'Support', value: 10, color: '#95E1D3' }
  ];

  // Custom Colors
  customColors: string[] = ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981'];
}
