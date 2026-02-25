import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexLegend,
  ApexDataLabels,
  ApexPlotOptions,
  ApexStroke,
  ApexTooltip,
  ApexStates,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  states: ApexStates;
};

export interface ChartData {
  label: string;
  value: number;
  color?: string;
}

@Component({
  selector: 'lib-pie-chart-with-legend',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './pie-chart-with-legend.html',
  styleUrl: './pie-chart-with-legend.css',
})
export class PieChartWithLegend implements OnInit, OnChanges {
  @Input() data: ChartData[] = [];
  @Input() type: 'pie' | 'donut' = 'pie';
  @Input() width: number = 380;
  @Input() height: number = 350;
  @Input() showLegend: boolean = true;
  @Input() showLabels: boolean = true;
  @Input() showTooltip: boolean = true;
  @Input() donutSize: string = '65%';
  @Input() colors: string[] = ['#5B93FF', '#FFD66B', '#FF8B81', '#7FCDA4'];

  chartOptions!: Partial<ChartOptions>;

  ngOnInit(): void {
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['type'] || changes['colors'] || changes['showTooltip'] || changes['showLabels'] || changes['showLegend'] || changes['donutSize']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    const series = this.data.map((item) => item.value);
    const labels = this.data.map((item) => item.label);
    const chartColors = this.data.map((item, index) => 
      item.color || this.colors[index % this.colors.length]
    );

    this.chartOptions = {
      series: series,
      chart: {
        width: this.width,
        height: this.height,
        type: this.type,
      },
      labels: labels,
      colors: chartColors,
      legend: {
        show: this.showLegend,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '14px',
      },
      dataLabels: {
        enabled: this.showLabels,
        formatter: (val: number) => {
          return val.toFixed(1) + '%';
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: this.type === 'donut' ? this.donutSize : '0%',
          },
        },
      },
      stroke: {
        width: 2,
        colors: ['#fff'],
      },
      tooltip: {
        enabled: this.showTooltip,
        y: {
          formatter: (val: number) => {
            return val.toString();
          },
        },
      },
      states: {
        hover: {
          filter: {
            type: 'lighten',
          },
        },
      },
    };
  }
}
