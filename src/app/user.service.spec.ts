import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { USER } from './mock-user';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getUser should return user', (done: DoneFn) => {
    service.getUser().subscribe(user => {
      expect(user).toBe(USER);
      done();
    });
  });
});
