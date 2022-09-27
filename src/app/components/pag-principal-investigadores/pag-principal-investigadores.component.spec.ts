import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPrincipalInvestigadoresComponent } from './pag-principal-investigadores.component';

describe('PagPrincipalInvestigadoresComponent', () => {
  let component: PagPrincipalInvestigadoresComponent;
  let fixture: ComponentFixture<PagPrincipalInvestigadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPrincipalInvestigadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagPrincipalInvestigadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
