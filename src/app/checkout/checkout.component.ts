import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductsService } from '../products.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  addressForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private userService: UserService,
  ) {
    this.addressForm = this.formBuilder.group({
      address: [ null, Validators.required ],
    });
  }

  processOrder() {
    this.productsService.processOrder(this.addressForm.value.address);
  }
}
