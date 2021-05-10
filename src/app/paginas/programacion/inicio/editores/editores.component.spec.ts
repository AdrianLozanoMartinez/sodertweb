import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoresComponent } from './editores.component';

describe('EditoresComponent', () => {
  let component: EditoresComponent;
  let fixture: ComponentFixture<EditoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
