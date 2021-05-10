import { TestBed } from '@angular/core/testing';

import { ServiciopersonalService } from './serviciopersonal.service';

describe('ServiciopersonalService', () => {
  let service: ServiciopersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciopersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
