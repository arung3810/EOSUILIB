import { Component } from '@angular/core';
import { Search } from '../../../dist/eos-comp';

@Component({
  selector: 'app-search-page',
  imports: [ Search ],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage {
  onSearchButtonClick() {
    console.log('Button clicked!');
  }
  searchValue: string = '';

  onSearchChange(value: string) {
    console.log('Search input:', value);
  }

  searchIcon = `<svg width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.442.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
</svg>`;
}
