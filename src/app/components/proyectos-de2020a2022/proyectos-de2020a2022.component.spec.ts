import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2020a2022Component } from './proyectos-de2020a2022.component';

describe('ProyectosDe2020a2022Component', () => {
  let component: ProyectosDe2020a2022Component;
  let fixture: ComponentFixture<ProyectosDe2020a2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2020a2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2020a2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
