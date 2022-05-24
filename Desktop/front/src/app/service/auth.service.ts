import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})
export class AuthService {
  constructor(private http: HttpClient) { }
  ad: string = 'http://127.0.0.1:8080/login'
  login(a: any) {
    return this.http.post(this.ad, a);
  }
}
