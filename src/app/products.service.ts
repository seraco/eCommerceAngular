import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiClientService } from './api-client.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private cart: { [id: number]: Product } = {};
  private products: Product[] = [];

  constructor(private apiClient: ApiClientService) {
    this.apiClient.getProducts().subscribe(products => {
      this.resetProductsListWithNewProducts(products);
    })
  }

  getCart(): { [id: number]: Product } {
    return this.cart;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getTotalCartItems(): number {
    return Object.values(this.cart).reduce((count, val) => {
      return count + val.number_items;
    }, 0);
  }

  introduceInShoppingCart(product: Product) {
    this.products = this.products.map(el => el.id === product.id ? (
      { ...el, number_items: el.number_items > 0 ? el.number_items - 1 : 0 }
    ) : (
      el
    ));
    this.cart[product.id] = {
      ...product,
      number_items: this.cart[product.id]
        ? this.cart[product.id].number_items + 1
        : 1,
    };
  }

  resetProductsListWithNewProducts(products: Product[]) {
    this.products = products;
  }
}
