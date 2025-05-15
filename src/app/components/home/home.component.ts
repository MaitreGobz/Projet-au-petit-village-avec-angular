import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../../services/about.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ProductsCardsComponent } from '../products-cards/products-cards.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ProductsCardsComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  infos : any[] = [];
  products : any[] = [];
  sortPrice: 'ascending' | 'descending' = 'ascending';
  nameSearch : string='';

  constructor(private  aboutService : AboutService, private productService: ProductService, private router : Router) {}

  ngOnInit(): void {
      this.products = this.productService.products;
      this.infos = this.aboutService.infos
  }
}
