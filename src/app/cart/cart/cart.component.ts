import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ICart } from '../../models/icart';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from './../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  productsInCart = {} as ICart;
  userEmail: string;
  total: number = 0;
  discount: number = 0;
  promoCode: string = '';
  userInfo: FormGroup;
  schema: any;
  s: any;
  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {
    this.userEmail = localStorage.getItem('email') as string;

    this.userInfo = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      address2: ['', [Validators.minLength(5)]],
    });
  }
  ngOnInit() {
    this.cartService.cartProducts(this.userEmail).subscribe((data) => {
      this.productsInCart = data[0];
      this.calucalteTotal();
    });
  }
  applyDiscount(code: string) {
    this.total = 0;
    this.discount = 0;
    this.promoCode = '';
    this.calucalteTotal();
    if (code.toLowerCase() === 'asmaa') {
      this.discount = this.total * 0.7;
      this.total = this.total * 0.3;
      this.promoCode = code;
    }
  }
  calucalteTotal() {
    this.productsInCart.cartProducts.forEach((product) => {
      this.total += product.price * product.quantity;
    });
  }

  makeOrder() {
    const { firstName, lastName, address } = this.userInfo.value;
    this.orderService.makeOrder(
      firstName,
      lastName,
      address,
      this.userEmail,
      this.total,
      this.productsInCart.cartProducts
    );
    this.router.navigate(['/cart/checkout']);
  }
}
