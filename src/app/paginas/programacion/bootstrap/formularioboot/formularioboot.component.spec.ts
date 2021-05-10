import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariobootComponent } from './formularioboot.component';

describe('FormulariobootComponent', () => {
  let component: FormulariobootComponent;
  let fixture: ComponentFixture<FormulariobootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariobootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariobootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
