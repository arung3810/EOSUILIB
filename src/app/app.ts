import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { ButtonType, NavMenu, } from '../../dist/eos-comp';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { filter } from 'rxjs/operators';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, NavMenu, RouterOutlet ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
protected readonly title = signal('eos-ui-components');
isLoginPage = false;
}