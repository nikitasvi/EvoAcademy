import { Component } from '@angular/core';
import { ResponseItem } from 'src/app/interfaces/response.interface';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent {
  responseItems: ResponseItem[] = [];

  constructor(private responseService: ResponseService) {}

  ngOnInit(): void {
    this.responseItems = this.responseService.getResponseItems();
  }
}
