import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public userService: UserService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [ Validators.required, Validators.pattern("[^ @]*@[^ @]*") ]
      ],
    });
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => this.user = user);
  }

  login() {
    if (this.loginForm.valid) {
      if (this.loginForm.value.email === this.user.email) {
        this.router.navigateByUrl('/products');
      }
      this.loginForm.reset();
    }
  }
}
