import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component'; ProductCheckoutComponent
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
const routes: Routes = [ 
  { path: '', redirectTo: 'list', pathMatch: 'full'  },
  
  { path: 'list', component: ProductlistComponent,  pathMatch: 'full' },
  { path: 'list/:id', component: ProductdetailComponent,  pathMatch: 'full'  },
  { path: 'checkout', component: ProductCheckoutComponent,  pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
