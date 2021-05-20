import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraionicangularComponent } from './estructuraionicangular.component';

describe('EstructuraionicangularComponent', () => {
  let component: EstructuraionicangularComponent;
  let fixture: ComponentFixture<EstructuraionicangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstructuraionicangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraionicangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
