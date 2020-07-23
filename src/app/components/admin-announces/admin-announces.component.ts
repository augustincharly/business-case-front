import { Component, OnInit } from '@angular/core';
import { Announce } from 'src/app/models/announce';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-announces',
  templateUrl: './admin-announces.component.html',
  styleUrls: ['./admin-announces.component.scss']
})
export class AdminAnnouncesComponent implements OnInit {

  announces: Announce[];
  isLoading: boolean;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.refreshAnnounces();
  }

  refreshAnnounces() {
    return this.adminService.getAnnounces().subscribe((data: Announce[]) => {
      this.announces = data;
      console.log(data);
      this.isLoading = false;
      console.log(this.announces);
    });
  }
}
