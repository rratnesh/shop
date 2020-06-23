import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CreditCardDirective } from './directives/credit-card.directive';
import { UnLessDirective } from './directives/un-less.directive';



@NgModule({
  declarations: [HeaderComponent, CreditCardDirective, UnLessDirective],
  imports: [
    CommonModule
  ],
  exports: [UnLessDirective, HeaderComponent, CreditCardDirective]
})
export class SharedModule { }
