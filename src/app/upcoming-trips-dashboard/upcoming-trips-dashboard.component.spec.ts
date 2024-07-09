import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTripsDashboardComponent } from './upcoming-trips-dashboard.component';

describe('UpcomingTripsDashboardComponent', () => {
  let component: UpcomingTripsDashboardComponent;
  let fixture: ComponentFixture<UpcomingTripsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingTripsDashboardComponent]
    });
    fixture = TestBed.createComponent(UpcomingTripsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
