import { Injectable } from '@angular/core';

import { User } from './user';
import { USER } from './mock-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticated: boolean = false;

  authenticateUser() {
    this.authenticated = true;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getUser(): User {
    return USER;
  }
}
