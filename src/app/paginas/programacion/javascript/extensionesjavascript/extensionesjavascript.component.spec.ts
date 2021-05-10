import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionesjavascriptComponent } from './extensionesjavascript.component';

describe('ExtensionesjavascriptComponent', () => {
  let component: ExtensionesjavascriptComponent;
  let fixture: ComponentFixture<ExtensionesjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionesjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionesjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
