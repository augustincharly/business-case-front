import { Fuel } from './fuel';
import { Model } from './model';
import { Photo } from './photo';
export class Announce {
	id: number;
	fuel: Fuel;
	title: string;
	description: string;
	startYear: Date;
	km: string;
	price: string;
	model: Model;
	photos: Photo[];
	constructor(id = null, fuel = null, title = null, description = null,
		startYear = null, km = null, price = null, model = null, photos = null) {
		this.id = null;
		this.fuel = fuel;
		this.title = title;
		this.description = description;
		this.startYear = startYear;
		this.km = km;
		this.price = price;
		this.model = model;
		this.photos = photos;
	}
}
