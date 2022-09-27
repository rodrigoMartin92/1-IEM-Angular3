import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPrincipalAutoridadesComponent } from './pag-principal-autoridades.component';

describe('PagPrincipalAutoridadesComponent', () => {
  let component: PagPrincipalAutoridadesComponent;
  let fixture: ComponentFixture<PagPrincipalAutoridadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPrincipalAutoridadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagPrincipalAutoridadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
