import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2018a2019P8Component } from './proyectos-de2018a2019-p8.component';

describe('ProyectosDe2018a2019P8Component', () => {
  let component: ProyectosDe2018a2019P8Component;
  let fixture: ComponentFixture<ProyectosDe2018a2019P8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2018a2019P8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2018a2019P8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
