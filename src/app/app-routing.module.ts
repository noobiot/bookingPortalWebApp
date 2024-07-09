import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpcomingTripsDashboardComponent } from './upcoming-trips-dashboard/upcoming-trips-dashboard.component';

const routes: Routes = [
  {path: 'logincomponent', component:LoginComponentComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'upcomingtripsdashboard', component:UpcomingTripsDashboardComponent},
  {path: '', redirectTo:'/logincomponent',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
