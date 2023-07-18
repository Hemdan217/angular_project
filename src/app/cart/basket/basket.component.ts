import { Component, OnInit } from '@angular/core';
import { ICart } from '../../models/icart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  productsInCart = {} as ICart;
  userEmail: string;
  constructor(private cartService: CartService) {
    this.userEmail = localStorage.getItem('email') as string;
  }
  ngOnInit() {
    this.cartService.cartProducts(this.userEmail).subscribe((data) => {
      this.productsInCart = data[0];
    });
  }
}
