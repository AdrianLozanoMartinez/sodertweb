import { TestBed } from '@angular/core/testing';

import { ElguardianGuard } from './elguardian.guard';

describe('ElguardianGuard', () => {
  let guard: ElguardianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ElguardianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
