import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubidafireComponent } from './subidafire.component';

describe('SubidafireComponent', () => {
  let component: SubidafireComponent;
  let fixture: ComponentFixture<SubidafireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubidafireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubidafireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
