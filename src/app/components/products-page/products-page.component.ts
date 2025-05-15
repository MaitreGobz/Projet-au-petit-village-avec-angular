import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../../services/about.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ProductsCardsComponent } from '../products-cards/products-cards.component';

@Component({
  selector: 'app-products-page',
  imports: [CommonModule, FormsModule, ProductsCardsComponent],
  standalone: true,
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {
  
  products : any[] = [];
  sortPrice: 'ascending' | 'descending' = 'ascending';
  nameSearch : string='';

  constructor(private  aboutService : AboutService, private productService: ProductService, private router : Router) {}

  ngOnInit(): void {
      this.products = this.productService.products;
  }
}