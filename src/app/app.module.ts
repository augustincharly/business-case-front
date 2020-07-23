import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnnounceComponent } from './components/announce/announce.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminProfessionalsComponent } from './components/admin-professionals/admin-professionals.component';
import { AdminGaragesComponent } from './components/admin-garages/admin-garages.component';
import { AdminAnnouncesComponent } from './components/admin-announces/admin-announces.component';
import { AdminProfessionalCreateComponent } from './components/admin-professional-create/admin-professional-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AnnounceComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    AdminComponent,
    AdminProfessionalsComponent,
    AdminGaragesComponent,
    AdminAnnouncesComponent,
    AdminProfessionalCreateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CollapseModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
