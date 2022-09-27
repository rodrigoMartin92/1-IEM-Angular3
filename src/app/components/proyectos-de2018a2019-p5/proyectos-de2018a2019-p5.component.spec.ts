import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2018a2019P5Component } from './proyectos-de2018a2019-p5.component';

describe('ProyectosDe2018a2019P5Component', () => {
  let component: ProyectosDe2018a2019P5Component;
  let fixture: ComponentFixture<ProyectosDe2018a2019P5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2018a2019P5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2018a2019P5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
