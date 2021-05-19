import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionionicComponent } from './instalacionionic.component';

describe('InstalacionionicComponent', () => {
  let component: InstalacionionicComponent;
  let fixture: ComponentFixture<InstalacionionicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionionicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionionicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
