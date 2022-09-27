import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2018a2019P3Component } from './proyectos-de2018a2019-p3.component';

describe('ProyectosDe2018a2019P3Component', () => {
  let component: ProyectosDe2018a2019P3Component;
  let fixture: ComponentFixture<ProyectosDe2018a2019P3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2018a2019P3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2018a2019P3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
