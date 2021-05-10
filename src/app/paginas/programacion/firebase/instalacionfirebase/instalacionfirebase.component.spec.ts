import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionfirebaseComponent } from './instalacionfirebase.component';

describe('InstalacionfirebaseComponent', () => {
  let component: InstalacionfirebaseComponent;
  let fixture: ComponentFixture<InstalacionfirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionfirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
