import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaralgomejorComponent } from './buscaralgomejor.component';

describe('BuscaralgomejorComponent', () => {
  let component: BuscaralgomejorComponent;
  let fixture: ComponentFixture<BuscaralgomejorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaralgomejorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaralgomejorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
