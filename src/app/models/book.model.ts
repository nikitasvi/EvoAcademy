export class Book implements IBook {
  public number: number;
  public name: string;
  public author: string;

  constructor(number: number, name: string, author: string) {
    this.number = number;
    this.name = name;
    this.author = author;
  }
}

export interface IBook {
  number: number;
  name: string;
  author: string;
}
