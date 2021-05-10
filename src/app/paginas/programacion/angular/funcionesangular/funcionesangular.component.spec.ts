import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesangularComponent } from './funcionesangular.component';

describe('FuncionesangularComponent', () => {
  let component: FuncionesangularComponent;
  let fixture: ComponentFixture<FuncionesangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionesangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionesangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
