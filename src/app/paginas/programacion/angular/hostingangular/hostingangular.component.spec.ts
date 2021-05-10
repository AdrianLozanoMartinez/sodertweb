import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingangularComponent } from './hostingangular.component';

describe('HostingangularComponent', () => {
  let component: HostingangularComponent;
  let fixture: ComponentFixture<HostingangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
