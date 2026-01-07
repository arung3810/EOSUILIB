import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tooltip } from '../tooltip/tooltip';

@Component({
  selector: 'lib-tooltip-showcase',
  standalone: true,
  imports: [CommonModule, Tooltip],
  templateUrl: './tooltip-showcase.component.html',
  styleUrls: ['./tooltip-showcase.component.css']
})
export class TooltipShowcaseComponent {
  sampleTooltipText = 'Hello EOS!';
}