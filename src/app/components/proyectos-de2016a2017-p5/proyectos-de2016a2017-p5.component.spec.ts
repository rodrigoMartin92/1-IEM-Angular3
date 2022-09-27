import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2016a2017P5Component } from './proyectos-de2016a2017-p5.component';

describe('ProyectosDe2016a2017P5Component', () => {
  let component: ProyectosDe2016a2017P5Component;
  let fixture: ComponentFixture<ProyectosDe2016a2017P5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2016a2017P5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2016a2017P5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
