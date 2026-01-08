import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'lib-nav-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu.html',
  styleUrls: ['./nav-menu.css'],
})
export class NavMenu implements OnInit {
  isCollapsed = true;
  currentRoute = '';

  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // Track route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });

    // Set initial route
    this.currentRoute = this.router.url;
    
    // Update main content margin on init
    this.updateMainContentMargin();
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.updateMainContentMargin();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  logout(): void {
    // Clear any stored user data/tokens here if needed
    // localStorage.removeItem('userToken');
    // sessionStorage.clear();
    
    // Navigate to login page
    this.router.navigate(['/login']);
  }

  private updateMainContentMargin(): void {
    const mainContent = this.document.querySelector('.main-content') as HTMLElement;
    if (mainContent) {
      const marginLeft = this.isCollapsed ? '90px' : '260px';
      this.renderer.setStyle(mainContent, 'margin-left', marginLeft);
    }
  }
}