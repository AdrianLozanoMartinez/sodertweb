import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosangularComponent } from './formulariosangular.component';

describe('FormulariosangularComponent', () => {
  let component: FormulariosangularComponent;
  let fixture: ComponentFixture<FormulariosangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
