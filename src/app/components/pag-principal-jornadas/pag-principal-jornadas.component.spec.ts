import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPrincipalJornadasComponent } from './pag-principal-jornadas.component';

describe('PagPrincipalJornadasComponent', () => {
  let component: PagPrincipalJornadasComponent;
  let fixture: ComponentFixture<PagPrincipalJornadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPrincipalJornadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagPrincipalJornadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
