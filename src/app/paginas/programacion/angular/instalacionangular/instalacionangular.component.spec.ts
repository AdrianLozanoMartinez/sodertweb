import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionangularComponent } from './instalacionangular.component';

describe('InstalacionangularComponent', () => {
  let component: InstalacionangularComponent;
  let fixture: ComponentFixture<InstalacionangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
