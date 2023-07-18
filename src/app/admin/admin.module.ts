import { NgModule } from '@angular/core';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsDashComponent } from './products-dash/products-dash.component';
import { EditProductComponent } from './products-dash/editProduct/editProduct.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { OrdersDashComponent } from './orders-dash/orders-dash.component';
const routes: Routes = [
  {
    path: '',
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
      {
        path: 'home',
        component: ProductsDashComponent,
        title: 'Admin DashBoard',
      },
      {
        path: 'orders',
        component: OrdersDashComponent,
        title: 'Orders DashBoard',
      },
      {
        path: 'client',
        component: OrdersDashComponent,
        title: 'Orders DashBoard',
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsDashComponent,
    MainDashComponent,
    OrdersDashComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
  entryComponents: [ProductsDashComponent, EditProductComponent],

  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
})
export class AdminModule {}
