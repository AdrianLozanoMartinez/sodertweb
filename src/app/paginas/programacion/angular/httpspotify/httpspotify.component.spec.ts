import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpspotifyComponent } from './httpspotify.component';

describe('HttpspotifyComponent', () => {
  let component: HttpspotifyComponent;
  let fixture: ComponentFixture<HttpspotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpspotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpspotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
