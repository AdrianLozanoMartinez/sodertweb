import { TestBed } from '@angular/core/testing';

import { ServiciosempresaService } from './serviciosempresa.service';

describe('ServiciosempresaService', () => {
  let service: ServiciosempresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosempresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
