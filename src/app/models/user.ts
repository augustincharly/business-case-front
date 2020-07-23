export class User {
	id: number;
	username: string;
	password: string;
	roles: string[];
	api_token: string;
	constructor(id = null, username = null, password = null, roles = null, api_token = null) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.roles = roles;
		this.api_token = api_token;
	}
}
