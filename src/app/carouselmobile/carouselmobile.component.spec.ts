import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselmobileComponent } from './carouselmobile.component';

describe('CarouselmobileComponent', () => {
  let component: CarouselmobileComponent;
  let fixture: ComponentFixture<CarouselmobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselmobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
