import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminAnnouncesComponent } from './components/admin-announces/admin-announces.component';
import { AdminProfessionalsComponent } from './components/admin-professionals/admin-professionals.component';
import { AdminGaragesComponent } from './components/admin-garages/admin-garages.component';
import { AdminProfessionalCreateComponent } from './components/admin-professional-create/admin-professional-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'professional/home', component: HomeComponent },
  { path: 'admin/home', component: AdminComponent },
  { path: 'admin/announces', component: AdminAnnouncesComponent },
  { path: 'admin/pros', component: AdminProfessionalsComponent },
  { path: 'admin/pros/create', component: AdminProfessionalCreateComponent },
  { path: 'admin/garages', component: AdminGaragesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
