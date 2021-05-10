import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarComponent } from './recordar.component';

describe('RecordarComponent', () => {
  let component: RecordarComponent;
  let fixture: ComponentFixture<RecordarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
