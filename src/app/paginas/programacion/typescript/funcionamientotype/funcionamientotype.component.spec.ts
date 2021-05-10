import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionamientotypeComponent } from './funcionamientotype.component';

describe('FuncionamientotypeComponent', () => {
  let component: FuncionamientotypeComponent;
  let fixture: ComponentFixture<FuncionamientotypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionamientotypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionamientotypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
