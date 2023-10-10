export class Post implements IPost {
    public userId: number;
    public id: number;
    public title: string;
    public body: string;
    
    constructor(userId: number, id: number, title: string, body: string) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
}

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}