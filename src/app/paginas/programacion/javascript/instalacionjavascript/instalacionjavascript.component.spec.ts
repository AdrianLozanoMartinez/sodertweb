import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionjavascriptComponent } from './instalacionjavascript.component';

describe('InstalacionjavascriptComponent', () => {
  let component: InstalacionjavascriptComponent;
  let fixture: ComponentFixture<InstalacionjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
