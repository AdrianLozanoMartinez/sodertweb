import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalaciontypelinuxmacComponent } from './instalaciontypelinuxmac.component';

describe('InstalaciontypelinuxmacComponent', () => {
  let component: InstalaciontypelinuxmacComponent;
  let fixture: ComponentFixture<InstalaciontypelinuxmacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalaciontypelinuxmacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalaciontypelinuxmacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
