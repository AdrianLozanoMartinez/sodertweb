import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrlbComponent } from './trlb.component';

describe('TrlbComponent', () => {
  let component: TrlbComponent;
  let fixture: ComponentFixture<TrlbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrlbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrlbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
