import { Component } from '@angular/core';
import { ButtonComponent } from '../../../dist/eos-comp';
import { NgFor } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'; 
@Component({
  selector: 'app-button-page',
  imports: [ButtonComponent,NgFor],
  templateUrl: './button-page.html',
  styleUrl: './button-page.css',
})
export class ButtonPage {

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

    menuItems = [{label: 'Item 1'}, {label: 'Item 2'}, {label: 'Item 3'}];

    handleButtonClick(){
      console.log('check button click'); 
    }

    buttonClick(event: MouseEvent): void {
      window.alert('btn clicked successfully')
    } 

    handleDropdownClick(){
      console.log('check'); 
    }
}
