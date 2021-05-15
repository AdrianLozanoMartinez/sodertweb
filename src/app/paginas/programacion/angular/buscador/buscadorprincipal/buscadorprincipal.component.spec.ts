import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorprincipalComponent } from './buscadorprincipal.component';

describe('BuscadorprincipalComponent', () => {
  let component: BuscadorprincipalComponent;
  let fixture: ComponentFixture<BuscadorprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
