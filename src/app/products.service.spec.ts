import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { PRODUCTS } from './mock-products';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
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
    expect(service.getCart()[0].number_items).toEqual(1);
  });

  it('#getTotalCartItems() should return total number of items in cart', () => {
    service.resetProductsListWithNewProducts(PRODUCTS);
    expect(service.getTotalCartItems()).toEqual(0);
    let firstProduct = service.getProducts()[0];
    service.introduceInShoppingCart(firstProduct);
    expect(service.getTotalCartItems()).toEqual(1);
    service.introduceInShoppingCart(firstProduct);
    expect(service.getTotalCartItems()).toEqual(2);
    service.introduceInShoppingCart(firstProduct);
    expect(service.getTotalCartItems()).toEqual(3);
  });

  it('#getTotalCartPrice() should return total price of items in cart', () => {
    service.resetProductsListWithNewProducts(PRODUCTS);
    expect(service.getTotalCartPrice()).toEqual(0);
    let firstProduct = service.getProducts()[0];
    service.introduceInShoppingCart(firstProduct);
    expect(service.getTotalCartPrice()).toEqual(10);
    service.introduceInShoppingCart(firstProduct);
    expect(service.getTotalCartPrice()).toEqual(20);
    service.introduceInShoppingCart(firstProduct);
    expect(service.getTotalCartPrice()).toEqual(30);
  });
});
