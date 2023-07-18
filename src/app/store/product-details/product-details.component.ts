import { Component, OnInit } from '@angular/core';
import { IProduct } from './../../models/iproduct';
import { StoreApiService } from '../store-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../cart/cart.service';
import { ICart } from '../../models/icart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product = {} as IProduct;
  id: number = 0;
  constructor(
    private store: StoreApiService,
    private activedRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('proId') ? Number(paramMap.get('proId')) : 0;
      this.store.getProduct(this.id).subscribe({
        next: (value) => {
          this.product = value;
          this.product.quantity = 1;
          this.cartService
            .cartProducts(localStorage.getItem('email') as string)
            .subscribe((data) => {
              if (data[0]?.email) {
                let existingProduct = data[0]?.cartProducts.find((product) => {
                  return (
                    product?.name.toLowerCase() ==
                    this.product.name.toLowerCase()
                  );
                });
                if (existingProduct) {
                  this.product.added = true;
                  this.product.quantity = existingProduct.quantity;
                }
              }
            });
        },
        error: (err) => {
          this.router.navigate(['/**']);
        },
      });
    });
  }
  increaseQuantity(product: IProduct) {
    product.quantity = product?.quantity ? ++product.quantity || 1 : 1;

    if (product.added) {
      this.updateCart(product);
    }
    return product;
  }

  decreaseQuantity(product: IProduct) {
    product.quantity = product?.quantity ? --product.quantity || 0 : 0;

    if (product.added && product.quantity) {
      this.updateCart(product);
    } else if (product.added) {
      this.removeFromCart(product);
    }
    return product;
  }

  updateCart(product: IProduct) {
    const { name, url, price, quantity = 1 } = product;
    this.cartService.updateCart({
      name,
      price,
      url,
      quantity,
    });

    product.added = product?.quantity ? true : false;
    return product;
  }

  addToCart(product: IProduct) {
    const { name, url, price, quantity = 1 } = product;
    this.cartService.addProductToCart({
      name,
      price,
      url,
      quantity,
    });
    product.added = true;
    return product;
  }
  removeFromCart(product: IProduct) {
    this.cartService.removeProductFromCart(product.name);
    product.added = false;
    return product;
  }
}
