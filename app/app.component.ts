import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  ActivationEnd,
  ResolveStart,
  NavigationCancel,
} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, finalize, pipe } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sotre';
  constructor(
    private router: Router,
    private spinnerService: NgxSpinnerService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url !== '/cart/checkout') {
          this.spinnerService.show();
        }
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        setTimeout(() => this.spinnerService.hide(), 1000);
      }
    });
  }
}
