import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IUser } from './../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private httpclient: HttpClient) {}
  register(user: IUser): Observable<IUser[]> {
    return this.httpclient.post<IUser[]>(
      `${environment.baseAPIURL}/users`,
      JSON.stringify(user),
      {
        headers: {
          'Content-Type': 'Application/json',
        },
      }
    );
  }
  getUser(email: string): Observable<IUser[]> {
    return this.httpclient.get<IUser[]>(
      `${environment.baseAPIURL}/users?email=${email}`
    );
  }
  login(email: string, password: string): Observable<IUser[]> {
    return this.httpclient.get<IUser[]>(
      `${environment.baseAPIURL}/users?email=${email}`
    );
  }
}
