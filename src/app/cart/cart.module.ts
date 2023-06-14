import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BasketComponent } from './basket/basket.component';
import { BasketItemComponent } from './basket-item/basket-item.component';

const routes: Routes = [
  { path: '', component: BasketComponent, title: 'Basket' },
  { path: 'basket', component: BasketComponent, title: 'Cart' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout',
  },
];

@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    BasketComponent,

    BasketItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartModule {}
