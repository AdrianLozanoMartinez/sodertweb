import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalaciontypeComponent } from './instalaciontype.component';

describe('InstalaciontypeComponent', () => {
  let component: InstalaciontypeComponent;
  let fixture: ComponentFixture<InstalaciontypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalaciontypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalaciontypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
