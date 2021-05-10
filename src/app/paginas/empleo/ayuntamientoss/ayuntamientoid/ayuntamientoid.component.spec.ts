import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyuntamientoidComponent } from './ayuntamientoid.component';

describe('AyuntamientoidComponent', () => {
  let component: AyuntamientoidComponent;
  let fixture: ComponentFixture<AyuntamientoidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyuntamientoidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyuntamientoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
