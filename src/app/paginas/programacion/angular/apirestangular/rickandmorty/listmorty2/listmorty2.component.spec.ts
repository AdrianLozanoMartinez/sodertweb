import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listmorty2Component } from './listmorty2.component';

describe('Listmorty2Component', () => {
  let component: Listmorty2Component;
  let fixture: ComponentFixture<Listmorty2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listmorty2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listmorty2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
