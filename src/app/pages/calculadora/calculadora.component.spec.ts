import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculadora}Component } from './calculadora}.component';

describe('Calculadora}Component', () => {
  let component: Calculadora}Component;
  let fixture: ComponentFixture<Calculadora}Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calculadora}Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculadora}Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
