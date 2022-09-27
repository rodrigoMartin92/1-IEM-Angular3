import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPrincipalQueEsIemComponent } from './pag-principal-que-es-iem.component';

describe('PagPrincipalQueEsIemComponent', () => {
  let component: PagPrincipalQueEsIemComponent;
  let fixture: ComponentFixture<PagPrincipalQueEsIemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPrincipalQueEsIemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagPrincipalQueEsIemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
