import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// UI Module imports

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//Importing The Bootstrap Library
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
//Services of the AppModule
import {AuthService } from './auth.service';
import { HttpClient } from './http-client';
import { AuthGuard } from './auth-guard';
import { NotForUserGuard } from './auth-guard';
import { StudentGuard } from './student-guard';
import { TeacherGuard } from './teacher-guard';

import { UserService } from './services/user.service';
import { TuitionService } from './services/tuition.service';
import {PublicTuitionService } from './dashboard/teacher/public-tuition.service';
import {PrivateTuitionService} from './dashboard/student/private-tuition.service';

//Children of Home Component 

import {IndexComponent } from './home/index/index.component';
import {FeatureComponent } from './home/feature/feature.component';
import {AboutUsComponent } from './home/about-us/about-us.component';
import {ContactUsComponent } from './home/contact-us/contact-us.component';
import {OurMissionComponent } from './home/our-mission/our-mission.component';
import {OurServiceComponent } from './home/our-service/our-service.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TuitionFinderComponent } from './dashboard/teacher/tuition-finder/tuition-finder.component';
import { ProfileComponent } from './profile/profile.component';
import { TuitionCreatorComponent } from './dashboard/student/tuition-creator/tuition-creator.component';
import { AppliedTuitionListComponent } from './dashboard/teacher/applied-tuition-list/applied-tuition-list.component';
import { AppliedTuitionDetailsComponent } from './dashboard/teacher/applied-tuition-details/applied-tuition-details.component';
import { PublicTuitionDetailsComponent } from './dashboard/teacher/public-tuition-details/public-tuition-details.component';
import { UnlockedTuitionListComponent } from './dashboard/teacher/unlocked-tuition-list/unlocked-tuition-list.component';
import { UnlockedTuitionDetailsComponent } from './dashboard/teacher/unlocked-tuition-details/unlocked-tuition-details.component';
import { PrivateTuitionListComponent } from './dashboard/student/private-tuition-list/private-tuition-list.component';
import { PrivateTuitionDetailsComponent } from './dashboard/student/private-tuition-details/private-tuition-details.component';

import { StudentIndexComponent } from './dashboard/student/student-index/student-index.component';
import { TeacherIndexComponent } from './dashboard/teacher/teacher-index/teacher-index.component';

import {DashboardIndexComponent } from './dashboard/dashboard-index/dashboard-index.component';
import { AddressComponent } from './dashboard/student/address/address.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    IndexComponent, 
    OurMissionComponent, 
    FeatureComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurServiceComponent,
    DashboardComponent,
    TuitionFinderComponent,
    ProfileComponent,
    TuitionCreatorComponent,
    AppliedTuitionListComponent,
    AppliedTuitionDetailsComponent,
    PublicTuitionDetailsComponent,
    UnlockedTuitionListComponent,
    UnlockedTuitionDetailsComponent,
    PrivateTuitionListComponent,
    PrivateTuitionDetailsComponent,
    StudentIndexComponent,
    TeacherIndexComponent,
    DashboardIndexComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [
    AuthService,
    HttpClient,
    AuthGuard,
    NotForUserGuard,
    TeacherGuard,
    StudentGuard,
    UserService,
    TuitionService,
    PublicTuitionService,
    PrivateTuitionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
