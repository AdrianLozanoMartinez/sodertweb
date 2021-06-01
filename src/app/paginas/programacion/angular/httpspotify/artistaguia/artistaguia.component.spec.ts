import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaguiaComponent } from './artistaguia.component';

describe('ArtistaguiaComponent', () => {
  let component: ArtistaguiaComponent;
  let fixture: ComponentFixture<ArtistaguiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistaguiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaguiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
