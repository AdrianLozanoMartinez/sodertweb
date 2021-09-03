import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodopaginarComponent } from './todopaginar.component';

describe('TodopaginarComponent', () => {
  let component: TodopaginarComponent;
  let fixture: ComponentFixture<TodopaginarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodopaginarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodopaginarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
