import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../models/icart';
import { IProduct } from './../models/iproduct';
import { IBrand } from './../models/ibrand';
import { ICategory } from '../models/icategory';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${environment.baseAPIURL}/products`
    );
  }
  editProduct(id: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${environment.baseAPIURL}/products/${id}`
    );
  }
  deleteProduct(id: number) {
    return this.httpClient.delete<IProduct>(
      `${environment.baseAPIURL}/products/${id}`
    );
  }
  getAllOrders(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>(`${environment.baseAPIURL}/orders`);
  }
  approveOrder(order: IOrder): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>(
      `${environment.baseAPIURL}/orders/${order.id}`
    );
  }
}
