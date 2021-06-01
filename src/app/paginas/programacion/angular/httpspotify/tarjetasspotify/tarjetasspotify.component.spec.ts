import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasspotifyComponent } from './tarjetasspotify.component';

describe('TarjetasspotifyComponent', () => {
  let component: TarjetasspotifyComponent;
  let fixture: ComponentFixture<TarjetasspotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetasspotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasspotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
