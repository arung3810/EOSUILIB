import { Component, Input } from '@angular/core';
import { DashboardCard } from '../card/card';

@Component({
  selector: 'lib-tabpane',
  imports: [DashboardCard],
  templateUrl: './tabpane.html',
  styleUrl: './tabpane.css',

  
})
export class Tabpane {
  @Input() tabs: { id: string; label: string; content: string }[] = [];


  activeTab: string = 'emergency';   // default tab

  setActive(id: string) {
    this.activeTab = id;
  }

  isActive(id: string): boolean {
    return this.activeTab === id;
  }
 
}
