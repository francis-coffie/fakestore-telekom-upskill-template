import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  url = environment.appUrl + 'auth/login'
  login(loginData: {username: string, password: string}) {
    return this.http.post(this.url, JSON.stringify(loginData), {
      headers: {
        'content-type':'application/json'
      }
    })
  }

  logout() {
    localStorage.removeItem("token")
  }
  getToken() {
    return JSON.parse(localStorage.getItem("token") as string)
  }
}
