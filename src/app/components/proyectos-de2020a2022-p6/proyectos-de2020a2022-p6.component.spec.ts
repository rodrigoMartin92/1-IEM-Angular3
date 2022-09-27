import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2020a2022P6Component } from './proyectos-de2020a2022-p6.component';

describe('ProyectosDe2020a2022P6Component', () => {
  let component: ProyectosDe2020a2022P6Component;
  let fixture: ComponentFixture<ProyectosDe2020a2022P6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2020a2022P6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2020a2022P6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
