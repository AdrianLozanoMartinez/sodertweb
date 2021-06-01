import { TestBed } from '@angular/core/testing';

import { ServiciospotifyService } from './serviciospotify.service';

describe('ServiciospotifyService', () => {
  let service: ServiciospotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciospotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
