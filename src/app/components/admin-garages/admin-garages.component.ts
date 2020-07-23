import { Component, OnInit } from '@angular/core';
import { Garage } from 'src/app/models/garage';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-garages',
  templateUrl: './admin-garages.component.html',
  styleUrls: ['./admin-garages.component.scss']
})
export class AdminGaragesComponent implements OnInit {

  garages: Garage[];
  isLoading: boolean;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.refreshAnnounces();
  }

  refreshAnnounces() {
    return this.adminService.getGarages().subscribe((data: Garage[]) => {
      this.garages = data;
      console.log(data);
      this.isLoading = false;
      console.log(this.garages);
    });
  }
}
