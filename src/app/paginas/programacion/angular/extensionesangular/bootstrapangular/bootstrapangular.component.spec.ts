import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapangularComponent } from './bootstrapangular.component';

describe('BootstrapangularComponent', () => {
  let component: BootstrapangularComponent;
  let fixture: ComponentFixture<BootstrapangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
