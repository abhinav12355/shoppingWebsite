import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselmenComponent } from './carouselmen.component';

describe('CarouselmenComponent', () => {
  let component: CarouselmenComponent;
  let fixture: ComponentFixture<CarouselmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
