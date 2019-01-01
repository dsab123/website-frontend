export class Metadata {
    constructor(data = {}) {
        this.id = 0; // an id of -1 is essentially an error object
        this.title = '';
        this.tags = '';
        Object.assign(this, data);
    }
}