import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() title: string;

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) { }

  getCurrentUrl(): string {
    return this.router.url;
  }

  getTotalCartItems(): number {
    return this.productsService.getTotalCartItems();
  }
}
