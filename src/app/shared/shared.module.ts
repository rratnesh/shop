import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CreditCardDirective } from './directives/credit-card.directive';



@NgModule({
  declarations: [HeaderComponent, CreditCardDirective],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, CreditCardDirective]
})
export class SharedModule { }
