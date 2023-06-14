import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from './../../models/iproduct';
import { CartService } from '../../cart/cart.service';
import { ICart, ICartProduct } from '../../models/icart';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product = {} as IProduct;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService
      .cartProducts(localStorage.getItem('email') as string)
      .subscribe((data) => {
        if (data[0]?.email) {
          let existingProduct = data[0]?.cartProducts.find((product) => {
            return (
              product?.name.toLowerCase() == this.product.name.toLowerCase()
            );
          });
          if (existingProduct) {
            this.product.added = true;
          }
        }
      });
  }
  removeFromCart(product: IProduct) {
    console.log(product.name);
    console.log(this.product.name);
    this.cartService.removeProductFromCart(product.name);
    product.added = false;
    return product;
  }

  addToCart(product: IProduct) {
    const { name, url, price } = product;
    this.cartService.addProductToCart({
      name,
      price,
      url,
      quantity: 1,
    });
    product.added = true;
    return product;
  }
}
