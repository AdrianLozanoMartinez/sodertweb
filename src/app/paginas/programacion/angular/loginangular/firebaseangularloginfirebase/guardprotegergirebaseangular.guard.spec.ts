import { TestBed } from '@angular/core/testing';

import { GuardprotegergirebaseangularGuard } from './guardprotegergirebaseangular.guard';

describe('GuardprotegergirebaseangularGuard', () => {
  let guard: GuardprotegergirebaseangularGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardprotegergirebaseangularGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
