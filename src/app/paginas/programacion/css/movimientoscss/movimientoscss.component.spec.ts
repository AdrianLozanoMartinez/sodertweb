import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoscssComponent } from './movimientoscss.component';

describe('MovimientoscssComponent', () => {
  let component: MovimientoscssComponent;
  let fixture: ComponentFixture<MovimientoscssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoscssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoscssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
