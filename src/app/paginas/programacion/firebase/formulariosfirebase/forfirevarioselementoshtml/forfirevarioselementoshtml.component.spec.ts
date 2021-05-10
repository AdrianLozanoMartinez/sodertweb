import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfirevarioselementoshtmlComponent } from './forfirevarioselementoshtml.component';

describe('ForfirevarioselementoshtmlComponent', () => {
  let component: ForfirevarioselementoshtmlComponent;
  let fixture: ComponentFixture<ForfirevarioselementoshtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForfirevarioselementoshtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfirevarioselementoshtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
