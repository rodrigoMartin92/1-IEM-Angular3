import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2020a2022P5Component } from './proyectos-de2020a2022-p5.component';

describe('ProyectosDe2020a2022P5Component', () => {
  let component: ProyectosDe2020a2022P5Component;
  let fixture: ComponentFixture<ProyectosDe2020a2022P5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2020a2022P5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2020a2022P5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
