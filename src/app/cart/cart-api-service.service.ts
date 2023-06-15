import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICart, ICartProduct } from './../models/icart';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class CartApiServiceService {
  constructor(private httpclient: HttpClient) {}
  addToCart(cartProduct: ICart): Observable<ICart> {
    return this.httpclient.post<ICart>(
      `${environment.baseAPIURL}/carts`,
      JSON.stringify(cartProduct),
      {
        headers: {
          'Content-Type': 'Application/json',
        },
      }
    );
  }
  cartProducts(email: string): Observable<ICart[]> {
    return this.httpclient.get<ICart[]>(
      `${environment.baseAPIURL}/carts?email=${email}`
    );
  }
  removeCart(id: number) {
    return this.httpclient.delete<ICart>(
      `${environment.baseAPIURL}/carts/${id}`
    );
  }
  updateCart(id: number, cartProducts: ICart): Observable<ICart> {
    return this.httpclient.patch<ICart>(
      `${environment.baseAPIURL}/carts/${id}`,
      JSON.stringify(cartProducts),
      {
        headers: {
          'Content-Type': 'Application/json',
        },
      }
    );
  }
}
