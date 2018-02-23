export class BlogPost {
    constructor(data = {}) {
        this.id = 0;
        this.title = '';
        this.content = '';
        
        Object.assign(this, data);
    }
}