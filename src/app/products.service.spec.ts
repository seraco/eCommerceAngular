import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { PRODUCTS } from './mock-products';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#resetProductsListWithNewProducts should set products', () => {
    service.resetProductsListWithNewProducts(PRODUCTS);
    expect(service.getProducts()).toEqual(PRODUCTS);
  });

  it('#introduceInShoppingCart should decrease quantity of products', () => {
    service.resetProductsListWithNewProducts(PRODUCTS);
    let firstProduct = service.getProducts()[0];
    service.introduceInShoppingCart(firstProduct);
    let productQuantity = service.getProducts()[0].number_items;
    expect(productQuantity).toEqual(firstProduct.number_items - 1);
  });

  it('#introduceInShoppingCart should quantity in cart', () => {
    service.resetProductsListWithNewProducts(PRODUCTS);
    let firstProduct = service.getProducts()[0];
    service.introduceInShoppingCart(firstProduct);
    expect(service.getCart()[firstProduct.id].number_items).toEqual(1);
  });
});
