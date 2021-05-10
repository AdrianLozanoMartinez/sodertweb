import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionestypeComponent } from './funcionestype.component';

describe('FuncionestypeComponent', () => {
  let component: FuncionestypeComponent;
  let fixture: ComponentFixture<FuncionestypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionestypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionestypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
