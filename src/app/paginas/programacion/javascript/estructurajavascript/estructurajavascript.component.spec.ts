import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructurajavascriptComponent } from './estructurajavascript.component';

describe('EstructurajavascriptComponent', () => {
  let component: EstructurajavascriptComponent;
  let fixture: ComponentFixture<EstructurajavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstructurajavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructurajavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
