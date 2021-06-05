import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapjavascriptComponent } from './mapjavascript.component';

describe('MapjavascriptComponent', () => {
  let component: MapjavascriptComponent;
  let fixture: ComponentFixture<MapjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
