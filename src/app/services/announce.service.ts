import { Injectable } from '@angular/core';
import { Announce } from '../models/announce';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { AuthService } from './auth.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AnnounceService {

  currentUser: User;
  public announces: Announce[];
  apiUrl = 'http://localhost:8000/api/announce';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-AUTH-TOKEN': (this.currentUser) ? this.currentUser.api_token : ""
    })
  };

  constructor(private http: HttpClient, private authService: AuthService) {
    this.announces = [];
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  getAnnounces(): Observable<Announce[]> {
    return this.http.get<Announce[]>(this.apiUrl, this.httpOptions)
      .pipe(
        retry(1),
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
