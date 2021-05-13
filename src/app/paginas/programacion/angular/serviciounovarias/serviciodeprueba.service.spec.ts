import { TestBed } from '@angular/core/testing';

import { ServiciodepruebaService } from './serviciodeprueba.service';

describe('ServiciodepruebaService', () => {
  let service: ServiciodepruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciodepruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
