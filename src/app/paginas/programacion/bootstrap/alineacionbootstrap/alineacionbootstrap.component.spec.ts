import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlineacionbootstrapComponent } from './alineacionbootstrap.component';

describe('AlineacionbootstrapComponent', () => {
  let component: AlineacionbootstrapComponent;
  let fixture: ComponentFixture<AlineacionbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlineacionbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlineacionbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
