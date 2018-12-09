import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Directives1Component } from './directives1.component';

describe('Directives1Component', () => {
  let component: Directives1Component;
  let fixture: ComponentFixture<Directives1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Directives1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Directives1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
