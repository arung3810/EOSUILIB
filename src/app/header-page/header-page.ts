import { Component } from '@angular/core';
import { ButtonType, ButtonVariant, HeaderComponent } from '../../../dist/eos-comp';

@Component({
  selector: 'app-header-page',
  imports: [HeaderComponent],
  templateUrl: './header-page.html',
  styleUrl: './header-page.css',
})
export class HeaderPage {
  
threeDot = `<svg _ngcontent-ng-cli-universal-c1948619073="" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="mr-2"><path _ngcontent-ng-cli-universal-c1948619073="" d="M5.99997 8.19501C5.22497 8.19501 4.59497 8.825 4.59497 9.595C4.59497 10.37 5.22497 11 5.99997 11C6.77497 11 7.40497 10.37 7.40497 9.595C7.40497 8.825 6.77497 8.19501 5.99997 8.19501Z" fill="#1A1A1A"></path><path _ngcontent-ng-cli-universal-c1948619073="" d="M5.99997 7.405C6.77593 7.405 7.40497 6.77596 7.40497 6C7.40497 5.22404 6.77593 4.595 5.99997 4.595C5.22401 4.595 4.59497 5.22404 4.59497 6C4.59497 6.77596 5.22401 7.405 5.99997 7.405Z" fill="#1A1A1A"></path><path _ngcontent-ng-cli-universal-c1948619073="" d="M5.99997 1C5.22497 1 4.59497 1.63 4.59497 2.405C4.59497 3.175 5.22497 3.80499 5.99997 3.80499C6.77497 3.80499 7.40497 3.175 7.40497 2.405C7.40497 1.63 6.77497 1 5.99997 1Z" fill="#1A1A1A"></path></svg>`

menuItems = [{label: 'Item 1'}, {label: 'Item 2'}, {label: 'Item 3'}];

buttons: {
  label: string;
  variant: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
}[] = [
  { label: 'Plain btn', variant: 'primary', disabled: false, loading: false},
  { label: 'Prefix Icon btn', variant: 'primary', disabled: false, loading: false, prefixIcon: 'assets/filter-icon.svg'},
  { label: 'Suffix Icon btn', variant: 'secondary', disabled: false, loading: false, suffixIcon: "assets/filter-icon.svg" },
  { label: 'Prefix Suffix btn', variant: 'secondary', disabled: false, loading: false, prefixIcon:"assets/filter-icon.svg", suffixIcon: "assets/filter-icon.svg" },
  { label: 'Disabled btn', variant: 'secondary', disabled: true, loading: false },
  { label: 'loading btn', variant: 'secondary', disabled: false, loading: true },
];

handleIconClicked(){
  console.log('clicked icon in header');
}

headerbtn1: ButtonType[] = [
  { label: 'Consultation Mode', variant: 'secondary', disabled: false, loading: false, clicked: this.buttonClick.bind(this), prefixIcon: 'assets/filter-icon.svg'},
  { 
    label: 'Calulate', 
    variant: 'secondary', 
    disabled: false, 
    loading: false, 
    clicked: this.buttonClick.bind(this),
    prefixIcon: "assets/calculate.svg", 
  },
];

headerbtn: ButtonType[] = [
  { label: 'Update Data', variant: 'secondary', disabled: false, loading: false, clicked: this.buttonClick.bind(this)},
  { label: 'Workbook', variant: 'secondary', disabled: false, loading: false, clicked: this.buttonClick.bind(this)},
  { 
    label: 'Menu', 
    variant: 'secondary', 
    disabled: false, 
    loading: false, 
    prefixIcon: "assets/threeDot.svg", 
    dropdown: true, 
    openOnHover: true, 
    dropdownList: this.menuItems,
    dropdownClicked: this.handleDropdownClick.bind(this)
  },
];

  handleDropdownClick(){
    console.log('check'); 
  }

    buttonClick(event: MouseEvent): void {
    window.alert('btn clicked successfully')
  }
}
