import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagencssComponent } from './imagencss.component';

describe('ImagencssComponent', () => {
  let component: ImagencssComponent;
  let fixture: ComponentFixture<ImagencssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagencssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagencssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
