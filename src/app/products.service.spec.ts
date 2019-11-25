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

  it('#getProducts should return products', (done: DoneFn) => {
    service.getProducts().subscribe(products => {
      expect(products).toBe(PRODUCTS);
      done();
    });
  });
});
