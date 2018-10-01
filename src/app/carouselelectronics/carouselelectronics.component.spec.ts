import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselelectronicsComponent } from './carouselelectronics.component';

describe('CarouselelectronicsComponent', () => {
  let component: CarouselelectronicsComponent;
  let fixture: ComponentFixture<CarouselelectronicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselelectronicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselelectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
