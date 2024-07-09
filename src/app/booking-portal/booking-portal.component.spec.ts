import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPortalComponent } from './booking-portal.component';

describe('BookingPortalComponent', () => {
  let component: BookingPortalComponent;
  let fixture: ComponentFixture<BookingPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingPortalComponent]
    });
    fixture = TestBed.createComponent(BookingPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
