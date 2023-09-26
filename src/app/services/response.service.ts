import { Injectable } from '@angular/core';
import { ResponseItem } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  private responseItems: ResponseItem[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
  ];

  getResponseItems(): ResponseItem[] {
    return this.responseItems;
  }
}
