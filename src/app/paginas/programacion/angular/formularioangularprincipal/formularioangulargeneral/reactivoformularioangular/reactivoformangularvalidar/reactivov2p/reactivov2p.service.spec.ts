import { TestBed } from '@angular/core/testing';

import { Reactivov2pService } from '../reactivov2p/reactivov2p.service';

describe('Reactivov2pService', () => {
  let service: Reactivov2pService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reactivov2pService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
