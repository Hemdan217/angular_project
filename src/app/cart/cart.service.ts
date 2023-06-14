import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICart, ICartProduct } from './../models/icart';
import { environment } from 'src/environments/environment.development';
import { CartApiServiceService } from './cart-api-service.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private cartService: CartApiServiceService) {}
  addProductToCart(cartProduct: ICartProduct) {
    this.cartService
      .cartProducts(localStorage.getItem('email') as string)
      .subscribe((data) => {
        if (data[0]?.email) {
          if (
            !data[0]?.cartProducts.some(
              (product) =>
                product.name.toLowerCase() == cartProduct.name.toLowerCase()
            )
          ) {
            data[0].cartProducts.push(cartProduct);
          }
          this.cartService
            .updateCart(data[0].id as number, {
              email: data[0].email,
              cartProducts: data[0].cartProducts,
            })
            .subscribe((data) => {
              console.log(data);
            });
        } else {
          this.cartService
            .addToCart({
              email: localStorage.getItem('email') as string,
              cartProducts: [cartProduct],
            })
            .subscribe((data) => {
              console.log(data);
            });
        }
      });
  }
  removeProductFromCart(name: string) {
    this.cartService
      .cartProducts(localStorage.getItem('email') as string)
      .subscribe((data) => {
        if (data[0]?.email) {
          if (
            data[0]?.cartProducts.some(
              (pro) => pro.name.toLowerCase() == name.toLowerCase()
            )
          ) {
            this.cartService
              .updateCart(data[0].id as number, {
                email: data[0].email,
                cartProducts: data[0].cartProducts.filter((pro) => {
                  return pro.name.toLowerCase() != name.toLowerCase();
                }),
              })
              .subscribe((data) => {
                console.log(data);
              });
          }
        }
      });
  }
  // isInCart(name: string): any {
  //   this.cartService
  //     .cartProducts(localStorage.getItem('email') as string)
  //     .subscribe((data) => {
  //       if (data[0]?.email) {
  //         let existingProduct = data[0]?.cartProducts.find((product) => {
  //           return product?.name.toLowerCase() == name.toLowerCase();
  //         });
  //         if (existingProduct) {
  //           return existingProduct;
  //         } else {
  //           return false;
  //         }
  //       } else {
  //         return false;
  //       }
  //     });
  // }
  cartProducts(email: string): Observable<ICart[]> {
    return this.cartService.cartProducts(email);
  }
  updateCart(cartProduct: ICartProduct) {
    this.cartService
      .cartProducts(localStorage.getItem('email') as string)
      .subscribe((data) => {
        if (data[0]?.email) {
          let index = data[0]?.cartProducts.findIndex(
            (item) => item.name === cartProduct.name
          );
          if (
            data[0]?.cartProducts.some(
              (product) =>
                product.name.toLowerCase() == cartProduct.name.toLowerCase()
            )
          ) {
            data[0].cartProducts.splice(index, 1, cartProduct);
          }
          this.cartService
            .updateCart(data[0].id as number, {
              email: data[0].email,
              cartProducts: data[0].cartProducts,
            })
            .subscribe((data) => {
              console.log(data);
            });
        }
      });
  }
}
