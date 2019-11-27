import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';
import { PRODUCTS } from './mock-products';

describe('InMemoryDataService', () => {
  let service: InMemoryDataService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#createDb should return products', () => {
    expect(service.createDb()).toEqual({ products: PRODUCTS });
  });

  it('#getId should generate automatic id', () => {
    expect(service.genId([])).toBe(1);
    expect(service.genId(PRODUCTS)).toBe(11);
  });
});
