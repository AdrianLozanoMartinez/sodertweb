import { TestBed } from '@angular/core/testing';

import { ServiciopassService } from './serviciopass.service';

describe('ServiciopassService', () => {
  let service: ServiciopassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciopassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
