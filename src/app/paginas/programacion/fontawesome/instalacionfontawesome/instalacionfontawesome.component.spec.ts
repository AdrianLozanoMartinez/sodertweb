import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionfontawesomeComponent } from './instalacionfontawesome.component';

describe('InstalacionfontawesomeComponent', () => {
  let component: InstalacionfontawesomeComponent;
  let fixture: ComponentFixture<InstalacionfontawesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionfontawesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionfontawesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
