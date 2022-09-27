import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2020a2022P4Component } from './proyectos-de2020a2022-p4.component';

describe('ProyectosDe2020a2022P4Component', () => {
  let component: ProyectosDe2020a2022P4Component;
  let fixture: ComponentFixture<ProyectosDe2020a2022P4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2020a2022P4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2020a2022P4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
