import { Component, Input } from '@angular/core';
import { ICartProduct } from '../../models/icart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css'],
})
export class BasketItemComponent {
  @Input() item = {} as ICartProduct;

  constructor(private cartService: CartService) {}
  increaseQuantity(item: ICartProduct) {
    item.quantity = item?.quantity ? ++item.quantity || 1 : 1;
    console.log(item);

    this.updateCart(item);

    return item;
  }

  decreaseQuantity(item: ICartProduct) {
    item.quantity = item?.quantity ? --item.quantity || 0 : 0;
    console.log(item);
    if (item.quantity) {
      this.updateCart(item);
    } else {
      this.removeFromCart(item);
    }
    return item;
  }
  updateCart(item: ICartProduct) {
    const { name, url, price, quantity = 1 } = item;
    this.cartService.updateCart({
      name,
      price,
      url,
      quantity,
    });

    return item;
  }

  removeFromCart(item: ICartProduct) {
    item.quantity = 0;
    this.cartService.removeProductFromCart(item.name);

    return item;
  }
}
