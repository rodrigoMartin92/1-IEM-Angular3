import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPrincipalAgendaComponent } from './pag-principal-agenda.component';

describe('PagPrincipalAgendaComponent', () => {
  let component: PagPrincipalAgendaComponent;
  let fixture: ComponentFixture<PagPrincipalAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPrincipalAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagPrincipalAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
