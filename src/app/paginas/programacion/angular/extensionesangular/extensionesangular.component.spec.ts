import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionesangularComponent } from './extensionesangular.component';

describe('ExtensionesangularComponent', () => {
  let component: ExtensionesangularComponent;
  let fixture: ComponentFixture<ExtensionesangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionesangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionesangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
