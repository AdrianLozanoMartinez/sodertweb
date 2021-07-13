import { TestBed } from '@angular/core/testing';

import { ServicecharacterService } from './servicecharacter.service';

describe('ServicecharacterService', () => {
  let service: ServicecharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
