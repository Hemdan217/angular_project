import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../cart/order.service';
import { IOrder } from '../../models/icart';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  myOrders = [] as IOrder[];
  constructor(private order: OrderService) {}
  ngOnInit(): void {
    this.order
      .getOrders(localStorage.getItem('email') as string)
      .subscribe((data) => {
        this.myOrders = data;
      });
  }
}
