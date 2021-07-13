import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmortyComponent } from './listmorty.component';

describe('ListmortyComponent', () => {
  let component: ListmortyComponent;
  let fixture: ComponentFixture<ListmortyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmortyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
