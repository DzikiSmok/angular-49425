import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemsList} from "./items-list";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public items(): Observable<ItemsList> {
    return this.http.get<ItemsList>('https://labjwt.zecer.wi.zut.edu.pl/api/items')
  }

  public users(): Observable<User[]>{
    return this.http.get<User[]>('https://labjwt.zecer.wi.zut.edu.pl/api/users')
  }
}
