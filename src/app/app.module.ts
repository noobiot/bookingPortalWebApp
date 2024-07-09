import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BookingPortalComponent } from './booking-portal/booking-portal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpcomingTripsDashboardComponent } from './upcoming-trips-dashboard/upcoming-trips-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
// import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,ReactiveFormsModule} from '@angular/forms';
// import { HTTP_INTERCEPTORS} from '@angular/common/http';
// import { JwtInterceptor } from './http.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    BookingPortalComponent,
    DashboardComponent,
    UpcomingTripsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // provide:HTTP_INTERCEPTORS,
    // useClass:JwtInterceptor,
    // multi:true,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
