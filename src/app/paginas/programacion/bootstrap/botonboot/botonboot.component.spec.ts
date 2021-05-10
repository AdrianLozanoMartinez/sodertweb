import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonbootComponent } from './botonboot.component';

describe('BotonbootComponent', () => {
  let component: BotonbootComponent;
  let fixture: ComponentFixture<BotonbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
