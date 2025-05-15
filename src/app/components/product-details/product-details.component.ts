import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  productId!: number;
  product: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id = params.get('id');
      if(id) {
        this.productId = +id;
        this.product = this.productService.products.find(p => p.id === this.productId);
      }
    });
  }
}
