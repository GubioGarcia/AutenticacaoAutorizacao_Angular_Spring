import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${username}:${password}`)}`
    });

    return this.http.post(this.url + "/authenticate", null, { headers, responseType: 'text' });
  }
}
