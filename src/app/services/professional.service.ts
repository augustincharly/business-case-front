import { Injectable } from '@angular/core';
import { Professional } from '../models/professional';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { Announce } from '../models/announce';
import { Garage } from '../models/garage';
import { AuthService } from './auth.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  public currentUser: User;
  public announces: Announce[];
  public garages: Garage[];
  apiUrl = 'http://localhost:8000/api/professional';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-AUTH-TOKEN': this.currentUser.api_token
    })
  };

  constructor(private authenticationService: AuthService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
}
