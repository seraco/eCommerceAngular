import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      products => this.products = products,
    )
  }

  handleProductClick(product: Product) {
    console.log(product)
  }
}
