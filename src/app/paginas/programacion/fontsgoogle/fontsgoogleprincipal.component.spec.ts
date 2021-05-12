import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsgoogleprincipalComponent } from './fontsgoogleprincipal.component';

describe('FontsgoogleprincipalComponent', () => {
  let component: FontsgoogleprincipalComponent;
  let fixture: ComponentFixture<FontsgoogleprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontsgoogleprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsgoogleprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
