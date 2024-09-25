import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: any;
  constructor() {}

  // TODO: Guardar token real
  loggedIn() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('logged');
      return this.token != null;
    }
    return false;
  }
}
