import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('loginForm should be invalid initially', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('email should be invalid initially', () => {
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('email should have required error initally', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email should have invalid pattern if "test" is set', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('email should have valid pattern if "example@example.com" is set', () => {
    let email = component.loginForm.controls['email'];
    email.setValue('example@example.com');
    expect(email.valid).toBeTruthy();
  });

  it('submitting a form emits a user', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['email'].setValue("example@example.com");
    expect(component.loginForm.valid).toBeTruthy();
  });
});
