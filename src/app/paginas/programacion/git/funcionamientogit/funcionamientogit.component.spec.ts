import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionamientogitComponent } from './funcionamientogit.component';

describe('FuncionamientogitComponent', () => {
  let component: FuncionamientogitComponent;
  let fixture: ComponentFixture<FuncionamientogitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionamientogitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionamientogitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
