import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchGuard } from '../shared/guards/fetch.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { res: FetchGuard} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
