import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabpane } from '../tabpane/tabpane';

@Component({
  selector: 'lib-tabpane-showcase',
  standalone: true,
  imports: [CommonModule, Tabpane],
  templateUrl: './tabpane-showcase.component.html',
  styleUrls: ['./tabpane-showcase.component.css']
})
export class TabpaneShowcaseComponent {
  // Sample tabs data matching your image
  sampleTabs = [
    {
      id: 'tab1',
      label: 'Tab 1',
      content: 'Tab Content 1'
    },
    {
      id: 'tab2',
      label: 'Tab 2',
      content: 'This is the content for Tab 2. You can put any content here including components, text, or other elements.'
    },
    {
      id: 'tab3',
      label: 'Tab 3',
      content: 'Tab 3 contains different content. Each tab can have its own unique content and functionality.'
    }
  ];

  // Additional example with more detailed content
  detailedTabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: 'This is the overview section with general information about the component.'
    },
    {
      id: 'features',
      label: 'Features',
      content: 'Here are the key features: Interactive tabs, Smooth transitions, Customizable content, Responsive design.'
    },
    {
      id: 'settings',
      label: 'Settings',
      content: 'Configuration options and settings can be displayed in this tab.'
    }
  ];
}