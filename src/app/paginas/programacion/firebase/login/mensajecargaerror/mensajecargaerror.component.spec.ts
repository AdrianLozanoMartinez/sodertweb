import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajecargaerrorComponent } from './mensajecargaerror.component';

describe('MensajecargaerrorComponent', () => {
  let component: MensajecargaerrorComponent;
  let fixture: ComponentFixture<MensajecargaerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajecargaerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajecargaerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
