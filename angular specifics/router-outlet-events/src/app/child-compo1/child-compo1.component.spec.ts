import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompo1Component } from './child-compo1.component';

describe('ChildCompo1Component', () => {
  let component: ChildCompo1Component;
  let fixture: ComponentFixture<ChildCompo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCompo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
