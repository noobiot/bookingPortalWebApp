import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { DataSource } from '@angular/cdk/collections';
// export interface BookingData{
//   bookingid: number;
//   originTravelDateTime: number;
//   bookingType: string;
//   bookingStatus: string;
//   tripDetails: string;
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isOpened = true;
  // dataSource = bookingTableData;
  mobile: any;
  tripData: any;
  displayedColumns: string[] = ['requestId', 'originTravelDateTime', 'bookingType', 'bookingStatus', 'tripDetails'];

  constructor(private userService: UserServiceService, private router: Router) {
    this.mobile = localStorage.getItem('mobile');
  }

  // ngOnInit(): void {
  //   this.upcomingTripData();
  // }

  upcomingTripData(){
    this.tripData = new Array;
    this.userService.getUpcomingTrips(this.mobile).subscribe 
    (data => {
      this.tripData = data;
      console.log(this.tripData);
      // this.errorMessage = "User Not Found";
    })
    this.tripData = [];
    
  }
  onClickMenu() {
    if (this.isOpened == false) {
      this.isOpened = true;
    }
  }

  onLogOut() {
    localStorage.clear(); // Will clear all the login data
    this.router.navigate(['/logincomponent']); // Will Revert back to the login page

  }
  directToUpcomingTripsPage(singleTripData:any) {
    this.userService.setTripData(singleTripData);
    this.router.navigate(['/upcomingtripsdashboard']);
  }

}
