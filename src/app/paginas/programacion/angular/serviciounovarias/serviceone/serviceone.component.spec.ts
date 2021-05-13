import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceoneComponent } from './serviceone.component';

describe('ServiceoneComponent', () => {
  let component: ServiceoneComponent;
  let fixture: ComponentFixture<ServiceoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
