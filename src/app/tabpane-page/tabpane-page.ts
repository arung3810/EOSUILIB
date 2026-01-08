import { Component } from '@angular/core';
import { Tabpane } from '../../../dist/eos-comp';

@Component({
  selector: 'app-tabpane-page',
  imports: [ Tabpane ],
  templateUrl: './tabpane-page.html',
  styleUrl: './tabpane-page.css',
})
export class TabpanePage {

  tabsList = [
    { id: 'emergency', label: 'Tab 1', content: 'Tab Content 1' },
    { id: 'expenses', label: 'Tab 2', content: 'Tab Content 2' },
    { id: 'assets', label: 'Tab 3', content: 'Tab Content 3' }
  ];selectedDate: string = '';

}
