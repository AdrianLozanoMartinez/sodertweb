import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchapiComponent } from './fetchapi.component';

describe('FetchapiComponent', () => {
  let component: FetchapiComponent;
  let fixture: ComponentFixture<FetchapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
