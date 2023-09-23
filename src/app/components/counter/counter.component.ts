import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  public counter: number = 1;

  public ngOnInit(): void {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  }
}