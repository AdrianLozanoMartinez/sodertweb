import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesjavascriptComponent } from './condicionesjavascript.component';

describe('CondicionesjavascriptComponent', () => {
  let component: CondicionesjavascriptComponent;
  let fixture: ComponentFixture<CondicionesjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionesjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
