export class BlogPost {
    constructor(data = {}) {
        this.id = 0;
        this.title = '';
        this.content = '';
        this.tags = '';
        
        Object.assign(this, data);
    }
}