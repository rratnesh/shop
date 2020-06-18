import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../product';
import { IProduct } from '../product';
import { ProductService } from '../product.service';
import {CartService} from '../../cart/cart.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
   product: IProduct | undefined;
  loaded : boolean = true;
  products : product[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
    
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/product']);
  }
  public addToCart(product: IProduct) {
  
    this.cartService.addProduct(product)
  
  }
 
 
}