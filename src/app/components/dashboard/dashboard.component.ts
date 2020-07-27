import { Component, OnInit } from '@angular/core';
import { Announce } from 'src/app/models/announce';
import { AnnounceService } from 'src/app/services/announce.service';
import { PublicService } from 'src/app/services/public.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  announces: Announce[];
  isLoading: boolean;

  constructor(private publicService: PublicService, private titleService: Title) { }

  ngOnInit(): void {
    this.refreshAnnounces();
    this.titleService.setTitle('Liste des annonces');
  }

  refreshAnnounces() {
    return this.publicService.getAnnounces().subscribe((data: Announce[]) => {
      this.announces = data;
      console.log(data);
      this.isLoading = false;
      console.log(this.announces);
    });
  }

}
