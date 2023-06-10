import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  UserAuthBehavior: BehaviorSubject<boolean>;
  constructor() {
    this.UserAuthBehavior = new BehaviorSubject<boolean>(this.isAuthenticated);
  }
  get isAuthenticated(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  userLoggedIn(email: string, password: string): void {
    let userToken = '987654';
    localStorage.setItem('token', userToken);
    localStorage.setItem('email', email);
    this.UserAuthBehavior.next(this.isAuthenticated);
  }
  userLoggedOut(): void {
    localStorage.removeItem('token');
    this.UserAuthBehavior.next(this.isAuthenticated);
  }

  getuserIsLoggedIn(): Observable<boolean> {
    // Here We Used Behaviour Subject as Observable that can be subscribed
    return this.UserAuthBehavior.asObservable();
  }
}
