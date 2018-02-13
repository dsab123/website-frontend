export class BlogPost {
    id = 0;
    title = '';
    content = '';

    constructor(data = {}) {
        Object.assign(this, data);
    }
}