import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private API_URL = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  login(credentials:{email: string, password: string}):Observable<{token: string}> {
    return this.http.post<{token: string}>(this.API_URL, credentials)
  }
}
