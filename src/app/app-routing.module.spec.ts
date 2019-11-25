import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { routes } from './app-routing.module';

describe('AppRoutingModule', () => {

  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        CheckoutComponent,
        LoginComponent,
        ProductDetailComponent,
        ProductsListComponent,
        ShoppingCartComponent,
        UserInfoComponent,
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  });

  it('"" should redirect to "login"', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/login');
  }));

  it('should navigate to "checkout"', fakeAsync(() => {
    router.navigate(['checkout']);
    tick();
    expect(location.path()).toBe('/checkout');
  }));

  it('should navigate to "login"', fakeAsync(() => {
    router.navigate(['login']);
    tick();
    expect(location.path()).toBe('/login');
  }));

  it('should navigate to "product/10"', fakeAsync(() => {
    router.navigate(['product/10']);
    tick();
    expect(location.path()).toBe('/product/10');
  }));

  it('should navigate to "products"', fakeAsync(() => {
    router.navigate(['products']);
    tick();
    expect(location.path()).toBe('/products');
  }));

  it('should navigate to "cart"', fakeAsync(() => {
    router.navigate(['cart']);
    tick();
    expect(location.path()).toBe('/cart');
  }));

  it('should navigate to "user/2"', fakeAsync(() => {
    router.navigate(['user/2']);
    tick();
    expect(location.path()).toBe('/user/2');
  }));
});
