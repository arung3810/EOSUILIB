import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-nav-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu.html',
  styleUrls: ['./nav-menu.css'],
})
export class NavMenu {
  isCollapsed = true;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
