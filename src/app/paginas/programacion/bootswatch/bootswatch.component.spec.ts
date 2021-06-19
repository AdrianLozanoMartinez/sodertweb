import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootswatchComponent } from './bootswatch.component';

describe('BootswatchComponent', () => {
  let component: BootswatchComponent;
  let fixture: ComponentFixture<BootswatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootswatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootswatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
