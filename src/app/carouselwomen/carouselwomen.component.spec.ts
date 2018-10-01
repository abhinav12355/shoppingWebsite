import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselwomenComponent } from './carouselwomen.component';

describe('CarouselwomenComponent', () => {
  let component: CarouselwomenComponent;
  let fixture: ComponentFixture<CarouselwomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselwomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselwomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
