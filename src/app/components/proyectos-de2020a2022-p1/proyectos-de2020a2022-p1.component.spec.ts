import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2020a2022P1Component } from './proyectos-de2020a2022-p1.component';

describe('ProyectosDe2020a2022P1Component', () => {
  let component: ProyectosDe2020a2022P1Component;
  let fixture: ComponentFixture<ProyectosDe2020a2022P1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2020a2022P1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2020a2022P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
