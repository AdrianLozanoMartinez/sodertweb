import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdclassComponent } from './idclass.component';

describe('IdclassComponent', () => {
  let component: IdclassComponent;
  let fixture: ComponentFixture<IdclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
