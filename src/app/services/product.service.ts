import { Injectable } from '@angular/core';
import products from '../../assets/data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = products

  constructor() { }
   getProductById(id:number) {
    return this.products.find(product => product.id === id)
  }
}
