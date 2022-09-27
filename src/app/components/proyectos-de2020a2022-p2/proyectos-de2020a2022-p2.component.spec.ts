import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2020a2022P2Component } from './proyectos-de2020a2022-p2.component';

describe('ProyectosDe2020a2022P2Component', () => {
  let component: ProyectosDe2020a2022P2Component;
  let fixture: ComponentFixture<ProyectosDe2020a2022P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2020a2022P2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2020a2022P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
