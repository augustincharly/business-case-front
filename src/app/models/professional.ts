import { User } from './user';
export class Professional {
	id: number;
	user: User;
	firstname: string;
	lastname: string;
	email: string;
	tel: string;
	siret: string;

	constructor(id = null, user = null, firstname = null, lastname = null, email = null, tel = null, siret = null) {
		this.id = id;
		this.user = user;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.tel = tel;
		this.siret = siret;
	}
}
