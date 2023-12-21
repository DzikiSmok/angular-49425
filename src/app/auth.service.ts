import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthToken} from "./auth-token";
import {AuthResponse} from "./auth-response";
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private jwtHelper: JwtHelperService,
    private httpClient: HttpClient,
    ) { }

  public logout(): void{
    localStorage.removeItem('access_token');
  }
  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired();
  }

  public isAdmin(): boolean {
    const token = this.jwtHelper.decodeToken() as AuthToken;
    if(!this.isAuthenticated()){
      return false;
    }
    return token && token.roles && token.roles.includes('ADMIN');
  }

  public login(username: String, password: String): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>('https://labjwt.zecer.wi.zut.edu.pl/api/auth/login', {username,password})
      .pipe(
        tap(response => {
        console.debug('login() response', response);
        if(response.token){
          localStorage.setItem('access_token',response.token);
        }
        else{
          localStorage.removeItem('access_token');
        }
        })
      );
  }

  public getUsername(): string | null{
    const token: AuthToken = this.jwtHelper.decodeToken() as AuthToken;
    return token?.sub;
  }
}
