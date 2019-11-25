import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import { USER } from './mock-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): Observable<User> {
    return of(USER);
  }
}
