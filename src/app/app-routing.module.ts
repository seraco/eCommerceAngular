import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [ AuthGuard ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsListComponent },
  { 
    path: 'cart',
    component: ShoppingCartComponent, 
    canActivate: [ AuthGuard ],
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
