import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SincronasComponent } from './sincronas.component';

describe('SincronasComponent', () => {
  let component: SincronasComponent;
  let fixture: ComponentFixture<SincronasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SincronasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SincronasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
