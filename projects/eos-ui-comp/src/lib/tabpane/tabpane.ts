import { Component } from '@angular/core';

@Component({
  selector: 'lib-tabpane',
  imports: [],
  templateUrl: './tabpane.html',
  styleUrl: './tabpane.css',
  
})
export class Tabpane {
   activeTab: string = 'emergency';   // default tab

  setActive(tab: string) {
    this.activeTab = tab;
  }

  isActive(tab: string) {
    return this.activeTab === tab;
  }
 
}
