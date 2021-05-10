import { TestBed } from '@angular/core/testing';

import { ServicioayuntamientoService } from './servicioayuntamiento.service';

describe('ServicioayuntamientoService', () => {
  let service: ServicioayuntamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioayuntamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
