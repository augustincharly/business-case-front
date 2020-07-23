export class Photo {
	id: number;
	base64_content: string;
	constructor(id = null, base64Content = null) {
		this.id = id;
		this.base64_content = base64Content;
	}
}
