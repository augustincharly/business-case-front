import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  userConnected: User;

  constructor(private authenticationService: AuthService) {
    this.authenticationService.currentUser.subscribe(x => this.userConnected = x);
  }

  ngOnInit(): void {
  }

}
