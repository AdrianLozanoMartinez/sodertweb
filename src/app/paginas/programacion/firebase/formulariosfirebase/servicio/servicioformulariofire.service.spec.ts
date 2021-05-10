import { TestBed } from '@angular/core/testing';

import { ServicioformulariofireService } from './servicioformulariofire.service';

describe('ServicioformulariofireService', () => {
  let service: ServicioformulariofireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioformulariofireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
