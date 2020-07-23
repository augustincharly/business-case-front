import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  currentUser: User;
  isCollapsed = true;

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  isAdmin(){
    if (this.currentUser){
      return this.currentUser.roles.includes('ROLE_ADMIN');
    }
    return false;
  }

  isPro(){
    if (this.currentUser) {
      return this.currentUser.roles.includes('ROLE_PRO');
    }
    return false;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}