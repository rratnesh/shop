import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FormsModule } from '@angular/forms';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';


@NgModule({
  declarations: [ProductlistComponent, ProductdetailComponent, ProductCheckoutComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  exports:[ProductlistComponent]

})
export class ProductModule { }
