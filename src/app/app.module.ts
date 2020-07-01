import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store } from 'src/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthDeactivateGuard } from './shared/guards/auth-deactivate.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
