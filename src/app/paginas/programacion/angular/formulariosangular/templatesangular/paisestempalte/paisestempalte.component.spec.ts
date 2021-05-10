import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisestempalteComponent } from './paisestempalte.component';

describe('PaisestempalteComponent', () => {
  let component: PaisestempalteComponent;
  let fixture: ComponentFixture<PaisestempalteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisestempalteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisestempalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
