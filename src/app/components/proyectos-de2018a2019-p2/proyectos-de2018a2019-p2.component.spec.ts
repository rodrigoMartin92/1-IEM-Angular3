import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2018a2019P2Component } from './proyectos-de2018a2019-p2.component';

describe('ProyectosDe2018a2019P2Component', () => {
  let component: ProyectosDe2018a2019P2Component;
  let fixture: ComponentFixture<ProyectosDe2018a2019P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2018a2019P2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2018a2019P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
