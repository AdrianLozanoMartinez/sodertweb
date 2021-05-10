import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginnormalComponent } from './loginnormal.component';

describe('LoginnormalComponent', () => {
  let component: LoginnormalComponent;
  let fixture: ComponentFixture<LoginnormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginnormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginnormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
