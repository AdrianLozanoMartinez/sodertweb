import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariabletypeComponent } from './variabletype.component';

describe('VariabletypeComponent', () => {
  let component: VariabletypeComponent;
  let fixture: ComponentFixture<VariabletypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariabletypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariabletypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
