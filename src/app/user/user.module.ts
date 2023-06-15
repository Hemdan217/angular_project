import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AuthMiddlewareGuard } from '../auth-middleware.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Log In' },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Sign Up',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'profile',
    canActivate: [AuthMiddlewareGuard],
  },
  {
    path: '',
    component: ProfileComponent,
    title: 'profile',
    canActivate: [AuthMiddlewareGuard],
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
