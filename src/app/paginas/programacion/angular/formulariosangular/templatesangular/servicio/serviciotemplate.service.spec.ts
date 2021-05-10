import { TestBed } from '@angular/core/testing';

import { ServiciotemplateService } from './serviciotemplate.service';

describe('ServiciotemplateService', () => {
  let service: ServiciotemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciotemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
