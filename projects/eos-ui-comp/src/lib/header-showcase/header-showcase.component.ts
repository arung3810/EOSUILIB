import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonType } from '../header-component/header-component';

@Component({
  selector: 'lib-header-showcase',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './header-showcase.component.html',
  styleUrls: ['./header-showcase.component.css']
})
export class HeaderShowcaseComponent {
  // Header 1: Profile header with buttons
  header1Buttons: ButtonType[] = [
    {
      label: 'Update Data',
      variant: 'outline',
      clicked: (event) => console.log('Update Data clicked', event)
    },
    {
      label: 'Workbook',
      variant: 'outline',
      clicked: (event) => console.log('Workbook clicked', event)
    },
    {
      label: 'Menu',
      variant: 'outline',
      clicked: (event) => console.log('Menu clicked', event)
    }
  ];

  // Header 2: Greeting header with buttons
  header2Buttons: ButtonType[] = [
    {
      label: 'Consultation Mode',
      variant: 'outline',
      clicked: (event) => console.log('Consultation Mode clicked', event)
    },
    {
      label: 'Calculate',
      variant: 'outline',
      prefixIcon: 'src/assets/calculate.svg',
      clicked: (event) => console.log('Calculate clicked', event)
    }
  ];

  // Header 4: Dashboard header with buttons
  header4Buttons: ButtonType[] = [
    {
      label: 'Consultation Mode',
      variant: 'outline',
      clicked: (event) => console.log('Consultation Mode clicked', event)
    },
    {
      label: 'Calculate',
      variant: 'outline',
      prefixIcon: 'src/assets/calculate.svg',
      clicked: (event) => console.log('Calculate clicked', event)
    }
  ];

  onMenuIconClick(event: MouseEvent): void {
    console.log('Menu icon clicked:', event);
  }
}