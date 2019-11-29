import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private productsUrl = 'api/products';

  constructor(private http: HttpClient) { }

  buyProducts(products: Product[]): Observable<string[]> {
    let calls = [];
    products.forEach(product => {
      calls.push(this.http.put<Product>(
        this.productsUrl,
        product,
        this.httpOptions,
      ).pipe(
        map(() => (
          Math.random().toString(36).substring(2, 15)
          + Math.random().toString(36).substring(2, 15)
        ))
      ));
    });
    return forkJoin(calls);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
