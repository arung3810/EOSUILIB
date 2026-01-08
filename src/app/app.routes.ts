import { Routes } from '@angular/router';
import { Login } from '../../dist/eos-comp';
import { AccordionPage } from './accordian-page/accordian-page';
import { HeaderPage } from './header-page/header-page';
import { ButtonPage } from './button-page/button-page';
import { CardPage } from './card-page/card-page';
import { TablePage } from './table-page/table-page';
import { SearchPage } from './search-page/search-page';
import { TooltipPage } from './tooltip-page/tooltip-page';
import { TabpanePage } from './tabpane-page/tabpane-page';
import { FormfieldPage } from './formfield-page/formfield-page';
import { ModalPage } from './modal-page/modal-page';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'buttons', component: ButtonPage },
  { path: 'headers', component: HeaderPage },
  { path: 'cards', component: CardPage },
  { path: 'search', component: SearchPage },
  { path: 'modal', component: ModalPage },
  { path: 'table', component: TablePage },
  { path: 'tooltip', component: TooltipPage },
  { path: 'tabpane', component: TabpanePage },
  { path: 'inputfields', component: FormfieldPage },
  { path: 'accordion', component: AccordionPage },
  { path: '', redirectTo: '/buttons', pathMatch: 'full' }
];