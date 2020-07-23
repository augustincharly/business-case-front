import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-professionals',
  templateUrl: './admin-professionals.component.html',
  styleUrls: ['./admin-professionals.component.scss']
})
export class AdminProfessionalsComponent implements OnInit {

  pros: Professional[];
  isLoading: boolean;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.refreshAnnounces();
  }

  refreshAnnounces() {
    return this.adminService.getPros().subscribe((data: Professional[]) => {
      this.pros = data;
      console.log(data);
      this.isLoading = false;
      console.log(this.pros);
    });
  }
}
