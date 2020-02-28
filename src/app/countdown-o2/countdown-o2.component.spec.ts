import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownO2Component } from './countdown-o2.component';

describe('CountdownO2Component', () => {
  let component: CountdownO2Component;
  let fixture: ComponentFixture<CountdownO2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownO2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownO2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
