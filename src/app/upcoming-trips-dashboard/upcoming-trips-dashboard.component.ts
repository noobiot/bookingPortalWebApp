import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UserServiceService } from '../user-service.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-upcoming-trips-dashboard',
  templateUrl: './upcoming-trips-dashboard.component.html',
  styleUrls: ['./upcoming-trips-dashboard.component.css']
})
export class UpcomingTripsDashboardComponent {

  public singleTripData: any;
  tripDetailsForm: FormGroup;
  constructor(private userService: UserServiceService, private router: Router, private fb: FormBuilder)
  {
    // this.getUpcomingTripDetails();
    this.tripDetailsForm = this.fb.group(
      {
// noOfBags: "8"
// localContactNumber: ""
// mappedVehicle: null
// journeyStartDateTime: "2024-02-29 12:00 AM"
// noOfDays: "5"
// noOfPersons: "8"
// pickupFrom: "4XX5+R5 Mumbai, Maharashtra, India"
// dropTo: "4XX5+R5 Mumbai, Maharashtra, India"
        noOfBags:[{value:'',disabled: true}],
        localContactNumber: [{value:'',disabled:true}],
        mappedVehicle: [{value:'',disabled:true}],
        journeyStartDateTime:[{value:'',disabled:true}],
        noOfDays:[{value:'',disabled:true}],
        noOfPersons:[{value:'',disabled:true}],
        pickupFrom:[{value:'',disabled:true}],
        dropTo:[{value:'',disabled:true}]
      }
    )
  }
  ngOnInit():void {
    const data = this.userService.getTripData();
    this.updateForm(data);
  }

  private updateForm(data:any): void{
    this.tripDetailsForm.patchValue({
       noOfBags: data.noOfBags,
       localContactNumber: data.localContactNumber,
       mappedVehicle: data.mappedVehicle,
       journeyStartDateTime: data.journeyStartDateTime,
       noOfDays: data.noOfDays,
       noOfPersons: data.noOfPersons,
       pickupFrom: data.pickupFrom,
       dropTo: data.dropTo
    })
  }


  // getUpcomingTripDetails(){
  //   this.singleTripData = new Array;
  //   this.singleTripData = this.userService.getTripData();
  //   console.log(this.singleTripData);
  // }

  goToDashboard()
  {
    this.router.navigate(['/dashboard']);
  }


}
