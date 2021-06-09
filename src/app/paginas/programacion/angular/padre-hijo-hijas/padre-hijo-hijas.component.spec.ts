import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHijoHijasComponent } from './padre-hijo-hijas.component';

describe('PadreHijoHijasComponent', () => {
  let component: PadreHijoHijasComponent;
  let fixture: ComponentFixture<PadreHijoHijasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreHijoHijasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreHijoHijasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
