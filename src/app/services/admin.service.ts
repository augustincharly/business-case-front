import { Injectable } from '@angular/core';
import { Professional } from '../models/professional';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { Announce } from '../models/announce';
import { Garage } from '../models/garage';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public announces: Announce[];
  public garages: Garage[];
  public users: User[];
  public pros: Professional[];

  apiUrl = 'http://localhost:8000/admin';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-AUTH-TOKEN': 'toto'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAnnounces(): Observable<Announce[]> {
    return this.http.get<Announce[]>(this.apiUrl + '/announce', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handlError)
      );
  }

  getGarages(): Observable<Garage[]> {
    return this.http.get<Garage[]>(this.apiUrl + '/garage', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handlError)
      );
  }

  getPros(): Observable<Professional[]> {
    return this.http.get<Professional[]>(this.apiUrl + '/pro', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handlError)
      );
  }

  createUser(newUser: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/user', newUser, this.httpOptions).pipe(
      catchError(this.handlError)
    );
  }

  createPro(newPro: Professional): Observable<string> {
    let proToSend = {
      'user_id': newPro.user.id,
      'firstname': newPro.firstname,
      'lastname': newPro.lastname,
      'email': newPro.email,
      'tel': newPro.tel,
      'siret': newPro.siret,
    }

    return this.http.post<string>(this.apiUrl + '/pro', proToSend, this.httpOptions).pipe(
      catchError(this.handlError)
    );
  }


  // gestion des erreurs
  handlError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
