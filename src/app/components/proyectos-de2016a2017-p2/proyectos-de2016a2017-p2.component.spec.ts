import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2016a2017P2Component } from './proyectos-de2016a2017-p2.component';

describe('ProyectosDe2016a2017P2Component', () => {
  let component: ProyectosDe2016a2017P2Component;
  let fixture: ComponentFixture<ProyectosDe2016a2017P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2016a2017P2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2016a2017P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
