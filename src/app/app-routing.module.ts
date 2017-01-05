import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//Authentication Guards
import { AuthGuard } from './auth-guard';
import { NotForUserGuard } from './auth-guard';
import { StudentGuard } from './student-guard';
import { TeacherGuard } from './teacher-guard';


import { IndexComponent } from './home/index/index.component';
import { FeatureComponent } from './home/feature/feature.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { OurMissionComponent } from './home/our-mission/our-mission.component';
import { OurServiceComponent } from './home/our-service/our-service.component';
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


import { DashboardIndexComponent } from './dashboard/dashboard-index/dashboard-index.component';
import { StudentIndexComponent } from './dashboard/student/student-index/student-index.component';
import { TeacherIndexComponent } from './dashboard/teacher/teacher-index/teacher-index.component';

const routes: Route[] = [
  { path: '', redirectTo: '/home/index', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '/', redirectTo: '/index', pathMatch: 'full' },
      { path: 'index', component: IndexComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'features', component: FeatureComponent },
      { path: 'our-mission', component: OurMissionComponent },
      { path: 'our-service', component: OurServiceComponent },
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '/', redirectTo: '/index', pathMatch: 'full' },
      { path: 'index', component: DashboardIndexComponent, canActivate: [AuthGuard] },
      { path: 'find-tuition', component: TuitionFinderComponent, canActivate: [TeacherGuard] },
      { path: 'tuition-details/:id', component: PublicTuitionDetailsComponent, canActivate: [TeacherGuard] },
      { path: 'applied-tuition', component: AppliedTuitionListComponent, canActivate: [TeacherGuard] },
      { path: 'activated-tuition', component: UnlockedTuitionListComponent, canActivate: [TeacherGuard] },
      { path: 'create-tuition', component: TuitionCreatorComponent, canActivate: [StudentGuard] },
      { path: 'my-tuition', component: PrivateTuitionListComponent, canActivate: [StudentGuard] },
      { path: 'my-tuition-details/:id', component: PrivateTuitionDetailsComponent, canActivate: [StudentGuard] },
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [NotForUserGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotForUserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
