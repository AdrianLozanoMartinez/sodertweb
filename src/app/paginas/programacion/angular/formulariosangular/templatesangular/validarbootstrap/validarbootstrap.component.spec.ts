import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarbootstrapComponent } from './validarbootstrap.component';

describe('ValidarbootstrapComponent', () => {
  let component: ValidarbootstrapComponent;
  let fixture: ComponentFixture<ValidarbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
