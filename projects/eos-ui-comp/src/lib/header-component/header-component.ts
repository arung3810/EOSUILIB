import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  @Input() greetingType : string = "";
  @Input() fcName : string = "";
}
