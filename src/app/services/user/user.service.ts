import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get(){
    // return this.http.get(`${environment.ws}/HorasExtra/GetProyectos`)
  }
}
