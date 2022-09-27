import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2020a2022P3Component } from './proyectos-de2020a2022-p3.component';

describe('ProyectosDe2020a2022P3Component', () => {
  let component: ProyectosDe2020a2022P3Component;
  let fixture: ComponentFixture<ProyectosDe2020a2022P3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2020a2022P3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2020a2022P3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
