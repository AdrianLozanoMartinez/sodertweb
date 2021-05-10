import { TestBed } from '@angular/core/testing';

import { ServicioreactivoService } from './servicioreactivo.service';

describe('ServicioreactivoService', () => {
  let service: ServicioreactivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioreactivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
