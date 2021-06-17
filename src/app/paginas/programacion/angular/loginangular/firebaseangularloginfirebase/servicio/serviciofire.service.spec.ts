import { TestBed } from '@angular/core/testing';

import { ServiciofireService } from './serviciofire.service';

describe('ServiciofireService', () => {
  let service: ServiciofireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciofireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
