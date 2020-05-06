import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ROOT_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getusers(): Observable<[User]> {
    return this.http.get<[User]>(this.ROOT_URL);
  }


}
