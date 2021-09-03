import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosalgomejorComponent } from './todosalgomejor.component';

describe('TodosalgomejorComponent', () => {
  let component: TodosalgomejorComponent;
  let fixture: ComponentFixture<TodosalgomejorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosalgomejorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosalgomejorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
