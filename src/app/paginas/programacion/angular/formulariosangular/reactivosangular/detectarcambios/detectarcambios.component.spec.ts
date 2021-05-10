import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectarcambiosComponent } from './detectarcambios.component';

describe('DetectarcambiosComponent', () => {
  let component: DetectarcambiosComponent;
  let fixture: ComponentFixture<DetectarcambiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectarcambiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectarcambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
