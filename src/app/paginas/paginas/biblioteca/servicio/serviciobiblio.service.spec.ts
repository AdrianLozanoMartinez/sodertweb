import { TestBed } from '@angular/core/testing';

import { ServiciobiblioService } from './serviciobiblio.service';

describe('ServiciobiblioService', () => {
  let service: ServiciobiblioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciobiblioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
