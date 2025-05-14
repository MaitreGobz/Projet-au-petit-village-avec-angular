import { Component, Input } from '@angular/core';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule, SortByPricePipe, FilterByNamePipe],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() products : any[] = []
  @Input() sortDirection: 'ascending' | 'descending' = 'ascending';
  @Input() nameSearch : string ='';
}

