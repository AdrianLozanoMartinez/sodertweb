import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorinstalarComponent } from './editorinstalar.component';

describe('EditorinstalarComponent', () => {
  let component: EditorinstalarComponent;
  let fixture: ComponentFixture<EditorinstalarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorinstalarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorinstalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
