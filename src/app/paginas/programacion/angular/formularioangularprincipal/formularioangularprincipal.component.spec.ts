import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioangularprincipalComponent } from './formularioangularprincipal.component';

describe('FormularioangularprincipalComponent', () => {
  let component: FormularioangularprincipalComponent;
  let fixture: ComponentFixture<FormularioangularprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioangularprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioangularprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
