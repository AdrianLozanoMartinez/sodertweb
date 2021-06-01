import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingspotifyComponent } from './loadingspotify.component';

describe('LoadingspotifyComponent', () => {
  let component: LoadingspotifyComponent;
  let fixture: ComponentFixture<LoadingspotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingspotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingspotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
