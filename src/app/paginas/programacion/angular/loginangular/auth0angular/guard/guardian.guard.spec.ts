import { TestBed } from '@angular/core/testing';

import { GuardianGuard } from './guardian.guard';

describe('GuardianGuard', () => {
  let guard: GuardianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
