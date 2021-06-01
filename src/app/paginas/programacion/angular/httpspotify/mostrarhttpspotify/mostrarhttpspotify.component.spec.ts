import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarhttpspotifyComponent } from './mostrarhttpspotify.component';

describe('MostrarhttpspotifyComponent', () => {
  let component: MostrarhttpspotifyComponent;
  let fixture: ComponentFixture<MostrarhttpspotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarhttpspotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarhttpspotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
