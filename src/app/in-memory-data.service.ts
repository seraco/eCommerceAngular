import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { products: PRODUCTS };
  }

  genId(products: Product[]): number {
    return products.length > 0
      ? Math.max(...products.map(hero => hero.id)) + 1
      : 1;
  }
}
