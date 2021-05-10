import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeudasidComponent } from './deudasid.component';

describe('DeudasidComponent', () => {
  let component: DeudasidComponent;
  let fixture: ComponentFixture<DeudasidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeudasidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeudasidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
