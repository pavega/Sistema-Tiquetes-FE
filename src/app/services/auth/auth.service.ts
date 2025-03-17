import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { convertToLoginModel, LoggedUser, Login } from '../../model/login';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  });

  token: any;

  constructor(private http: HttpClient) {}

  // TODO: Guardar token real
  loggedIn() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('logged');
      return this.token != null;
    }
    return false;
  }

  authenticate(data: Login): Observable<LoggedUser> {
    return this.http
      .post<any>(`${environment.url}/Usuario/IniciarSesion`, data, {
        headers: this.headers,
      })
      .pipe(
        map((response: any) => {
          if (response.success) {
            return convertToLoginModel(response.msg);
          } else {
            throw new Error(response.msg);
          }
        }),
        catchError((error) => {
          return throwError(
            error.message ||
              'No se pudo autenticar, inténtalo de nuevo más tarde.'
          );
        })
      );
  }
}
