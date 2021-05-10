import { TestBed } from '@angular/core/testing';

import { FireservicioService } from './fireservicio.service';

describe('FireservicioService', () => {
  let service: FireservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
