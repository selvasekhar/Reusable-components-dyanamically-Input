import { Routes } from '@angular/router';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
];
