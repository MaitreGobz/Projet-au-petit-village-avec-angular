import { Component, Input } from '@angular/core';
import { SortByPricePipe } from '../../pipe/sort-by-price.pipe';
import { FilterByNamePipe } from '../../pipe/filter-by-name.pipe';
import { BorderCardDirective } from '../../directives/border-card.directive';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-products-cards',
  imports: [CommonModule, SortByPricePipe, FilterByNamePipe, BorderCardDirective, RouterModule],
  standalone: true,
  templateUrl: './products-cards.component.html',
  styleUrl: './products-cards.component.css'
})
export class ProductsCardsComponent {
  @Input() products : any[] = []
  @Input() sortDirection: 'ascending' | 'descending' = 'ascending';
  @Input() nameSearch : string ='';
}

