import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FetchGuard } from '../shared/guards/fetch.guard';


const routes: Routes = [
  { path: '', redirectTo: 'team' },
  { path: 'team', component: TeamComponent, resolve: { team: FetchGuard } },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
