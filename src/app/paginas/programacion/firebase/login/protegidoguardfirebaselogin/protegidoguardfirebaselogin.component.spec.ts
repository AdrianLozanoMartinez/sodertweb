import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtegidoguardfirebaseloginComponent } from './protegidoguardfirebaselogin.component';

describe('ProtegidoguardfirebaseloginComponent', () => {
  let component: ProtegidoguardfirebaseloginComponent;
  let fixture: ComponentFixture<ProtegidoguardfirebaseloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtegidoguardfirebaseloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtegidoguardfirebaseloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
