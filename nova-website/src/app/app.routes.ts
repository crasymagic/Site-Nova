import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
  { path: '',      component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: '**',    component: NoContentComponent }
];
