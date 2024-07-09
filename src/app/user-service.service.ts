// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  upcomingData: any;
  // http:HttpClient = inject(HttpClient)
  private apiUrl = "https://test-web.cloudjiffy.net/booking-service/api/v1/customer/upcoming/8866547230";
  constructor(private http:HttpClient) { }
  getUpcomingTrips(mobileNumber: string): Observable<any> {
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4MDA3MzA4ODM5IiwiZXhwIjoxNzIwNDI1ODM4LCJpYXQiOjE3MjA0MjUyMzh9.Jm8fo9qpCQJWfh_UDumjqBvBGYa3JF6uxb4O5XZzAAY"
    let head_obj = new HttpHeaders().set("Authorization","Bearer "+ token)
    return this.http.get(this.apiUrl,{headers:head_obj});
    }
 
  setTripData(TripdataData:any)
  {
     this.upcomingData = new Array;
     this.upcomingData = TripdataData;     
  }
  getTripData(){
    return this.upcomingData;
  }
}
