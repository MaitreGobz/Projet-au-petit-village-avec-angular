import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone : true,
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: any [], nameSearch: string): any[] {
    
    if(!products || products.length === 0) return [];

    if(!nameSearch || nameSearch.trim () === '') {
      return products;
    }
    return products.filter(product =>
      product.name.toLowerCase().includes(nameSearch.toLowerCase())
    );
  }
}


