import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarletconstComponent } from './varletconst.component';

describe('VarletconstComponent', () => {
  let component: VarletconstComponent;
  let fixture: ComponentFixture<VarletconstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarletconstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarletconstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
