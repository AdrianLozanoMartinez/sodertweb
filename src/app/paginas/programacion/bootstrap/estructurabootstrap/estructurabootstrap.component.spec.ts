import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructurabootstrapComponent } from './estructurabootstrap.component';

describe('EstructurabootstrapComponent', () => {
  let component: EstructurabootstrapComponent;
  let fixture: ComponentFixture<EstructurabootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstructurabootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructurabootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
