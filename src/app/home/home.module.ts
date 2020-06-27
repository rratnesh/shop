import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MyFormComponent } from './home/my-form/my-form.component';
import { CheckComponent } from './home/my-form/check/check.component';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from './home/my-modal/my-modal.component';


@NgModule({
  declarations: [HomeComponent, MyFormComponent, CheckComponent, MyModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbModalModule
  ],
  entryComponents: [MyModalComponent]
})
export class HomeModule { }
