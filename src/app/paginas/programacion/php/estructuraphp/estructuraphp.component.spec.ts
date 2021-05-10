import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraphpComponent } from './estructuraphp.component';

describe('EstructuraphpComponent', () => {
  let component: EstructuraphpComponent;
  let fixture: ComponentFixture<EstructuraphpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstructuraphpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraphpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
