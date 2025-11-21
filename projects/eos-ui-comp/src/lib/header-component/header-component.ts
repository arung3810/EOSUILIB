import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ButtonComponent, DropdownItem } from "../button/button.component";

export interface ButtonType{
  label: string;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
  dropdown?: boolean;
  openOnHover ?: boolean;
  openOnClick ?: boolean;
  clicked ?: (event: MouseEvent) => void;
  dropdownClicked ?: (event: MouseEvent) => void; 
  dropdownList?: DropdownItem[];
}

@Component({
  selector: 'lib-header-component',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  @Input() title : string = "";
  @Input() description : string = "";
  @Input() profileImage : string = "";
  @Input() icon : string = "";
  @Input() buttonList : ButtonType[] = [];
  @Output() iconClicked = new EventEmitter<MouseEvent>();

  handleIconClicked(){
    this.iconClicked.emit();
  }
}
