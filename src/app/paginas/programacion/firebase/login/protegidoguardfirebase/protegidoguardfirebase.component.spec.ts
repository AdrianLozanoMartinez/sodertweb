import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtegidoguardfirebaseComponent } from './protegidoguardfirebase.component';

describe('ProtegidoguardfirebaseComponent', () => {
  let component: ProtegidoguardfirebaseComponent;
  let fixture: ComponentFixture<ProtegidoguardfirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtegidoguardfirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtegidoguardfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
