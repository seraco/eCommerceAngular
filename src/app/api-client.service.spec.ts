import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ApiClientService } from './api-client.service';
import { InMemoryDataService } from './in-memory-data.service';
import { PRODUCTS } from './mock-products';

describe('ApiClientService', () => {
  let service: ApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
        ),
      ],
    });
    service = TestBed.get(ApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getProducts should return products', (done: DoneFn) => {
    service.getProducts().subscribe(products => {
      expect(products).toEqual(PRODUCTS);
      done();
    });
  });
});