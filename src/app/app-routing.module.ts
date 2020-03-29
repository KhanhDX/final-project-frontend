import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './service/auth-guard.service';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  { path: '', component: CourseComponent,canActivate:[AuthGuardService] },
  { path: 'login', component: LoginComponent },
    // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
