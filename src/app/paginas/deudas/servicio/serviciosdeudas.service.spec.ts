import { TestBed } from '@angular/core/testing';

import { ServiciosdeudasService } from './serviciosdeudas.service';

describe('ServiciosdeudasService', () => {
  let service: ServiciosdeudasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosdeudasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
