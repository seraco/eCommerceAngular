import { Injectable } from '@angular/core';

import { User } from './user';
import { USER } from './mock-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(): User {
    return USER;
  }
}
