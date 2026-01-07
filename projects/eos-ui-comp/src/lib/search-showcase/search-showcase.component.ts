import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search } from '../search/search';

@Component({
  selector: 'lib-search-showcase',
  standalone: true,
  imports: [CommonModule, Search],
  templateUrl: './search-showcase.component.html',
  styleUrls: ['./search-showcase.component.css']
})
export class SearchShowcaseComponent {
  
  onSearchInput(value: string, searchType: string): void {
    console.log(`${searchType} search input:`, value);
  }

  onSearchButtonClick(searchType: string): void {
    console.log(`${searchType} search button clicked`);
  }
}