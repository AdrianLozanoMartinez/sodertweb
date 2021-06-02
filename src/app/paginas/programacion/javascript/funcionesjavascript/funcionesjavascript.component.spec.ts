import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesjavascriptComponent } from './funcionesjavascript.component';

describe('FuncionesjavascriptComponent', () => {
  let component: FuncionesjavascriptComponent;
  let fixture: ComponentFixture<FuncionesjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionesjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionesjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
