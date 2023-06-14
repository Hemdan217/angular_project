import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ICart } from '../../models/icart';

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
  constructor(private cartService: CartService) {
    this.userEmail = localStorage.getItem('email') as string;
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
}
