import { Model } from './model';
export class Brand {
	id: number;
	name: string;
	models: Model[];
	constructor(id = null, name = null, models = null) {
		this.id = id;
		this.name = name;
		this.models = models;
	}
}
