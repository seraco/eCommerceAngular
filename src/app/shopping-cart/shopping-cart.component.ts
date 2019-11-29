import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  displayedColumns: string[] = ['name', 'quantity', 'price'];

  constructor(private productsService: ProductsService) { }

  getCart(): Product[] {
    return Object.values(this.productsService.getCart())
  }

  getTotal(): number {
    let total = 0;
    this.getCart().forEach(el => {
      total += el.number_items * el.price
    });
    return total;
  }
}
