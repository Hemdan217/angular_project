import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../models/icart';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderInfo: IOrder = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    total: 0,
    id: Math.floor(Math.random() * 50021212),
    status: 'pending',
    cartProducts: [],
  };
  constructor(
    private httpClient: HttpClient,
    private cartService: CartService
  ) {}
  makeOrder(
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    total: number,
    products: any
  ) {
    this.orderInfo['firstName'] = firstName;
    this.orderInfo['lastName'] = lastName;
    this.orderInfo['address'] = address;
    this.orderInfo['email'] = email;
    this.orderInfo['total'] = Number(total);
    this.orderInfo['cartProducts'] = products;
  }
  getUserInfo() {
    return this.orderInfo;
  }
  submitOrder() {
    this.httpClient
      .post<IOrder>(
        `${environment.baseAPIURL}/orders`,
        JSON.stringify(this.orderInfo),
        {
          headers: {
            'Content-Type': 'Application/json',
          },
        }
      )
      .subscribe((data) => {
        if (data.email) {
          console.log('Deeelelell');
          this.cartService.emptyCart(data.email);
        }
      });
  }
  getOrders(email: string): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>(
      `${environment.baseAPIURL}/orders?email=${email}`
    );
  }
}
