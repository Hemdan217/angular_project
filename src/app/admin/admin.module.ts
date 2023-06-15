import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsDashComponent } from './products-dash/products-dash.component';
import { MainDashComponent } from './main-dash/main-dash.component';
const routes: Routes = [
  { path: '', component: MainDashComponent, title: 'Admin DashBoard' },
  {
    path: 'dash',
    component: MainDashComponent,
    title: 'Admin DashBoard',
    children: [
      {
        path: '',
        component: ProductsDashComponent,
        title: 'Admin DashBoard',
      },
      {
        path: 'products',
        component: ProductsDashComponent,
        title: 'Admin DashBoard',
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent, ProductsDashComponent, MainDashComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
