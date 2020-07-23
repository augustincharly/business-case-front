import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-admin-professional-create',
  templateUrl: './admin-professional-create.component.html',
  styleUrls: ['./admin-professional-create.component.scss']
})
export class AdminProfessionalCreateComponent implements OnInit {

  formPro: Professional;
  formUser: User;

  constructor(private routeur: Router,
    private adminService: AdminService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.formPro = new Professional();
    this.formUser = new User();
  }

  onSubmit() {
    this.alertService.clear();
    this.adminService.createUser(this.formUser).subscribe(
      data => {
        this.formPro.user = data;
        this.adminService.createPro(this.formPro).subscribe(then => {
          this.routeur.navigate(['/admin/pros']);
        },
          error => {
            this.alertService.error(error);
            console.log(error);
          });
      });
  }

  goBack() {
    this.routeur.navigate((['/admin/home]']));
  }

}
