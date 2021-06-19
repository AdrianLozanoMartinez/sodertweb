import { TestBed } from '@angular/core/testing';

import { ServiciopaisesService } from './serviciopaises.service';

describe('ServiciopaisesService', () => {
  let service: ServiciopaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciopaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
