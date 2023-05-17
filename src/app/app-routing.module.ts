import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authGuard/auth.guard';
import { LogonOrRegisComponent } from './authPage/logon-or-regis/logon-or-regis.component';
import { DashboardComponent } from './common-pages/dashboard/dashboard.component';
import { DashboardForAdminComponent } from './common-pages/dashboard-for-admin/dashboard-for-admin.component';

const routes: Routes = [
{path:'',component:LogonOrRegisComponent},
{path:'loginOrRegis',component:LogonOrRegisComponent},
{path:'logout',component:LogonOrRegisComponent},
{path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
{path:'adminDashboard',component:DashboardForAdminComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
