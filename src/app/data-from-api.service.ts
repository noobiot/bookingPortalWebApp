import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFromApiService {

  private url = "";
  constructor(private httpClient: HttpClient) {

    
   }
}
