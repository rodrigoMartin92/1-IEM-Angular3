import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPrincipalObjetivosComponent } from './pag-principal-objetivos.component';

describe('PagPrincipalObjetivosComponent', () => {
  let component: PagPrincipalObjetivosComponent;
  let fixture: ComponentFixture<PagPrincipalObjetivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPrincipalObjetivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagPrincipalObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
