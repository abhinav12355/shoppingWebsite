import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselsportsComponent } from './carouselsports.component';

describe('CarouselsportsComponent', () => {
  let component: CarouselsportsComponent;
  let fixture: ComponentFixture<CarouselsportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselsportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselsportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
