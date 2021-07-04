import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompo2Component } from './child-compo2.component';

describe('ChildCompo2Component', () => {
  let component: ChildCompo2Component;
  let fixture: ComponentFixture<ChildCompo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCompo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
