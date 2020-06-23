import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthDeactivateGuard } from '../shared/guards/auth-deactivate.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, canDeactivate: [AuthDeactivateGuard] },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
