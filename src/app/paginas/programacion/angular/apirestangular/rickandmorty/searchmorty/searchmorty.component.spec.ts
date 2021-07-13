import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmortyComponent } from './searchmorty.component';

describe('SearchmortyComponent', () => {
  let component: SearchmortyComponent;
  let fixture: ComponentFixture<SearchmortyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmortyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
