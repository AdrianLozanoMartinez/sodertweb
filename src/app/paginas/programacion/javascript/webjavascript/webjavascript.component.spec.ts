import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebjavascriptComponent } from './webjavascript.component';

describe('WebjavascriptComponent', () => {
  let component: WebjavascriptComponent;
  let fixture: ComponentFixture<WebjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
