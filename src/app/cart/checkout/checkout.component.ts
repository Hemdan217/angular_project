import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { UserCreditPipe } from '../../pipes/user-credit.pipe';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [UserCreditPipe],
})
export class CheckoutComponent {
  total: number = 0;
  constructor(
    private orderService: OrderService,
    private pipe: UserCreditPipe,
    private router: Router
  ) {
    this.total = this.orderService.getUserInfo().total;
  }

  _creditCard: string = '';
  get creditCard(): string {
    return this._creditCard;
  }
  set creditCard(value: string) {
    if (/\d{4}/.test(this._creditCard) && value.length < 16) {
      this._creditCard = this.pipe.transformCredit(value);
    } else {
      this._creditCard = value;
    }
  }

  _expireDate: string = '';
  get expireDate(): string {
    return this._expireDate;
  }
  set expireDate(value: string) {
    if (value.length < 5) {
      this._expireDate = this.pipe.transformExpire(value);
    } else {
      this._expireDate = value;
    }
  }
  _CVV: string = '';
  get CVV(): string {
    return this._CVV;
  }
  set CVV(value: string) {
    this._CVV = value;
  }

  submitOrder() {
    this.orderService.submitOrder();
    Swal.mixin({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      title: 'SuccessFully Oreder Done',
      icon: 'success',
    }).fire();
    setTimeout(() => {
      this.router.navigate(['/products']);
    });
  }
}
