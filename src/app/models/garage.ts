import { Professional } from './professional';
import { Announce } from './announce';
export class Garage {
	id: number;
	professional: Professional;
	name: string;
	tel: string;
	street: string;
	city: string;
	postcode: string;
	country: string;
	announces: Announce[];

	constructor(id = null, professional = null, name = null, tel = null,
		street = null, city = null, postcode = null, country = null, announces = null) {
		this.id = id;
		this.professional = professional;
		this.name = name;
		this.tel = tel;
		this.street = street;
		this.city = city;
		this.postcode = postcode;
		this.country = country;
		this.announces = announces;
	}
}
