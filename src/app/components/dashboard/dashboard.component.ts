import { Component, OnInit } from '@angular/core';
import { Announce } from 'src/app/models/announce';
import { PublicService } from 'src/app/services/public.service';
import { Title } from '@angular/platform-browser';
import { Brand } from 'src/app/models/brand';
import { Fuel } from 'src/app/models/fuel';
import { Model } from 'src/app/models/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  announces: Announce[];
  isLoading: boolean;
  brands: Brand[];
  fuels: Fuel[];
  models: Model[];
  filters = {};
  displayModels: boolean;

  constructor(private publicService: PublicService, private titleService: Title) { }

  ngOnInit(): void {
    this.filters = { brand: 'all', fuel: 'all', year: 'all', km: 'all', price: 'all', model: 'all' };
    this.displayModels = false;
    this.refreshAnnounces();
    this.titleService.setTitle('Liste des annonces');
  }

  refreshAnnounces() {
    return this.publicService.getAnnounces().subscribe((data: Announce[]) => {
      this.announces = data;
      console.log(data);
      this.refreshFilters();
      this.isLoading = false;
      console.log(this.announces);
    });
  }

  onBrandChange() {
    console.log(this.filters['brand']);
    if (this.filters['brand'] != 'all') {
      this.publicService.getModels(this.filters['brand']).subscribe((data: Model[]) => {
        this.models = data;
      });
      this.displayModels = true;

    } else {
      this.displayModels = false;
    }
  }



  onFilter() {
    console.log("salut");
    this.publicService.getAnnounces().subscribe((data: Announce[]) => {
      this.announces = data.filter((announce) => announce.fuel.id == this.filters['fuel']);
    });
  }

  refreshFilters() {
    this.publicService.getBrands().subscribe((data: Brand[]) => {
      this.brands = data;
      console.log(this.brands);
    });
    this.publicService.getFuels().subscribe((data: Fuel[]) => {
      this.fuels = data;
    });
  }

}
