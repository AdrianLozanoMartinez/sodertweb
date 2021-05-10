import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaidComponent } from './empresaid.component';

describe('EmpresaidComponent', () => {
  let component: EmpresaidComponent;
  let fixture: ComponentFixture<EmpresaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
