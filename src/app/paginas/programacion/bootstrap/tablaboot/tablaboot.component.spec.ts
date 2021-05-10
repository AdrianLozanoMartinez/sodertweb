import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablabootComponent } from './tablaboot.component';

describe('TablabootComponent', () => {
  let component: TablabootComponent;
  let fixture: ComponentFixture<TablabootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablabootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablabootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
