import { Component, Input, OnInit } from '@angular/core';
import { DashboardCard } from '../card/card';

@Component({
  selector: 'lib-tabpane',
  imports: [DashboardCard],
  templateUrl: './tabpane.html',
  styleUrl: './tabpane.css',
})
export class Tabpane implements OnInit {
  @Input() tabs: { id: string; label: string; content: string }[] = [];

  activeTab: string = '';

  ngOnInit() {
    // Set the first tab as active by default
    if (this.tabs.length > 0) {
      this.activeTab = this.tabs[0].id;
    }
  }

  setActive(id: string) {
    this.activeTab = id;
  }

  isActive(id: string): boolean {
    return this.activeTab === id;
  }
}
