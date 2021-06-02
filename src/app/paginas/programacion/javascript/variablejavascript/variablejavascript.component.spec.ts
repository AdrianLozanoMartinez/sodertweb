import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablejavascriptComponent } from './variablejavascript.component';

describe('VariablejavascriptComponent', () => {
  let component: VariablejavascriptComponent;
  let fixture: ComponentFixture<VariablejavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablejavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablejavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
