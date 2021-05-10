import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesangularComponent } from './variablesangular.component';

describe('VariablesangularComponent', () => {
  let component: VariablesangularComponent;
  let fixture: ComponentFixture<VariablesangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablesangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
