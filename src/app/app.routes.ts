import { Routes } from '@angular/router';
import { 
  Login, 
  ModalShowcaseComponent, 
  TableShowcaseComponent,
  TooltipShowcaseComponent,
  TabpaneShowcaseComponent,
  SearchShowcaseComponent,
  FormFieldsShowcaseComponent,
  AccordionShowcaseComponent,
  ButtonShowcaseComponent,
  HeaderShowcaseComponent,
  CardShowcaseComponent
} from 'eos-comp';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'buttons', component: ButtonShowcaseComponent },
  { path: 'headers', component: HeaderShowcaseComponent },
  { path: 'cards', component: CardShowcaseComponent },
  { path: 'search', component: SearchShowcaseComponent },
  { path: 'modal', component: ModalShowcaseComponent },
  { path: 'table', component: TableShowcaseComponent },
  { path: 'tooltip', component: TooltipShowcaseComponent },
  { path: 'tabpane', component: TabpaneShowcaseComponent },
  { path: 'inputfields', component: FormFieldsShowcaseComponent },
  { path: 'accordion', component: AccordionShowcaseComponent },
  { path: '', redirectTo: '/buttons', pathMatch: 'full' }
];
