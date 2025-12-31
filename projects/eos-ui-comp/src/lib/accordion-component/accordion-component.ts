import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent, DropdownItem } from '../button/button.component';


interface SubSection {
  header: string;
  content: string;
}

// interface TableColumn {
//   key: string;
//   label: string;
// }
@Component({
  selector: 'lib-accordion-component',
  imports: [CommonModule,ButtonComponent],
  templateUrl: './accordion-component.html',
  styleUrl: './accordion-component.css',
})
export class AccordionComponent {
  @Input() title: string = '';
  @Input() subsections: SubSection[] = [];
  @Input() editUrl?: string;
  @Input() tableColumns: any[] = [];
  @Input() tableData: any[] = [];

  isOpen = false;

  constructor(private router: Router){}

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onEditClick(event: Event) {
    event.stopPropagation();
    if (this.editUrl) {
      this.router.navigateByUrl(this.editUrl);
    }
  }

}
