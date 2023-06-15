import { Component } from '@angular/core';
import { IOrder } from '../../models/icart';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-orders-dash',
  templateUrl: './orders-dash.component.html',
  styleUrls: ['./orders-dash.component.css'],
})
export class OrdersDashComponent {
  allOrders = [] as IOrder[];
  constructor(private admin: AdminService) {}
  ngOnInit(): void {
    this.loadData();
  }
  approve(order: IOrder) {
    this.admin.approveOrder(order).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.admin.getAllOrders().subscribe((data) => {
      this.allOrders = data;
    });
  }
}
