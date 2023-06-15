import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, finalize, pipe } from 'rxjs';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  show: boolean = true;
  routes: string[] = ['home', 'products', 'cart'];
  isAuth: boolean = false;
  constructor(
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private userAuth: AuthService
  ) {
    this.userAuth.getuserIsLoggedIn().subscribe((data) => {
      this.isAuth = data;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('admin')) {
          this.show = false;
        }
      }
    });
  }
  logout() {
    this.userAuth.userLoggedOut();
    this.router.navigate(['/user/login']);
  }
}
