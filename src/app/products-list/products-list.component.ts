import { Component, OnInit } from '@angular/core';

import { ApiClientService } from '../api-client.service';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  constructor(
    private apiClient: ApiClientService,
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.apiClient.getProducts().subscribe(products => {
      this.productsService.resetProductsListWithNewProducts(products);
    })
  }

  getProducts() {
    return this.productsService.getProducts();
  }
  
  handleBuyClick(product: Product) {
    console.log('BUY', product);
    this.productsService.introduceInShoppingCart(product);
  }

  handleProductClick(product: Product) {
    console.log('PRODUCT', product);
  }
}
