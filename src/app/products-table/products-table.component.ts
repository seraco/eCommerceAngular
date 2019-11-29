import { Component, Input } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  displayedColumns: string[] = ['name', 'quantity', 'price'];
  @Input() products: Product[];
  @Input() totalPrice: number;
}
