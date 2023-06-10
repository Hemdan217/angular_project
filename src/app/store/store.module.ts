import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', component: ProductsComponent, title: 'Products' },
  {
    path: ':proId',
    component: ProductDetailsComponent,
    title: 'Product Details',
  },
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  exports: [ProductsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StoreModule {}
