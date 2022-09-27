import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2018a2019P6Component } from './proyectos-de2018a2019-p6.component';

describe('ProyectosDe2018a2019P6Component', () => {
  let component: ProyectosDe2018a2019P6Component;
  let fixture: ComponentFixture<ProyectosDe2018a2019P6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2018a2019P6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2018a2019P6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
