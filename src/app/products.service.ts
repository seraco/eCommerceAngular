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
  private confirmation = '';
  private products: Product[] = [];

  constructor(private apiClient: ApiClientService) {
    this.apiClient.getProducts().subscribe(products => {
      this.resetProductsListWithNewProducts(products);
    })
  }

  getCart(): Product[] {
    return Object.values(this.cart);
  }

  getConfirmation(): string {
    return this.confirmation;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getTotalCartItems(): number {
    return this.getCart().reduce((count, val) => {
      return count + val.number_items;
    }, 0);
  }

  getTotalCartPrice(): number {
    let total = 0;
    this.getCart().forEach(el => {
      total += el.number_items * el.price
    });
    return total;
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

  processOrder(address: string) {
    this.apiClient.buyProducts(this.getCart()).subscribe(() => {
      this.confirmation = (
        Math.random()
          .toString(36)
          .substring(2, 15)
          .toUpperCase()
      );
    });
  }

  resetProductsListWithNewProducts(products: Product[]) {
    this.products = products;
  }
}
