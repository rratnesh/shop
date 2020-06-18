import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable, Subject, Subscriber} from 'rxjs';
// import {of} from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../product/product';
import { product } from '../product/product';
import { CartState } from './CartState';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productUrl = 'assets/products/products.json';
  
    private cartSubject = new Subject<CartState>();
    Products : product[]= [];
    CartState = this.cartSubject.asObservable();
  constructor(private http: HttpClient) {
    
   }
  addProduct(product:any) {
    console.log('in service');
    this.Products.push(product)
    this.cartSubject.next(<CartState>{loaded: true, products:  this.Products});
    
  }
  removeProduct(id:number) {
    this.Products = this.Products.filter((item) =>  item.productId !== id )
    this.cartSubject.next(<CartState>{loaded: false , products:  this.Products});
  }
 
 
 
  
}
