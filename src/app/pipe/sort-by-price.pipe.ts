import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone : true,
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], sortDirection: 'ascending' | 'descending'): any[] {
    if(!products || products.length === 0) return [];

    return [...products].sort((a,b) =>{
      return sortDirection === 'ascending'
        ? a.price - b.price
        : b.price - a.price;
    });
  }

}
