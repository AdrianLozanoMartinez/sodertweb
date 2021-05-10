import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosfirebaseComponent } from './formulariosfirebase.component';

describe('FormulariosfirebaseComponent', () => {
  let component: FormulariosfirebaseComponent;
  let fixture: ComponentFixture<FormulariosfirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosfirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
