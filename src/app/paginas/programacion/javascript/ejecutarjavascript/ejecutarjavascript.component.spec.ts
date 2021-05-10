import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutarjavascriptComponent } from './ejecutarjavascript.component';

describe('EjecutarjavascriptComponent', () => {
  let component: EjecutarjavascriptComponent;
  let fixture: ComponentFixture<EjecutarjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutarjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutarjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
