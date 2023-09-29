import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, scan, takeWhile } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public sequentialNumbers: number[] = [];
  public randomNumbers: string[] = [];

  private sequentialSubscription: Subscription | undefined;
  private randomSubscription: Subscription | undefined;

  private isSequentialRunning = false;
  private isRandomRunning = false;

  public ngOnInit(): void {
    this.toggleSequential();
    this.toggleRandom();
  }

  public toggleSequential() {
    this.isSequentialRunning = !this.isSequentialRunning;

    if (this.isSequentialRunning) {
      this.sequentialSubscription = interval(2000)
        .pipe(
          takeWhile(() => this.isSequentialRunning),
          scan((acc, _) => acc + 1, 0)
        )
        .subscribe((number) => {
          this.sequentialNumbers.push(number);
        });
    } else {
      this.sequentialSubscription?.unsubscribe();
    }
  }

  public toggleRandom() {
    this.isRandomRunning = !this.isRandomRunning;

    if (this.isRandomRunning) {
      this.randomSubscription = interval(2000)
        .pipe(
          takeWhile(() => this.isRandomRunning),
          map(() => {
            const randomValue = Math.floor(Math.random() * 1000);
            return `Random Value: ${randomValue}`;
          })
        )
        .subscribe((value) => {
          this.randomNumbers.push(value);
        });
    } else {
      this.randomSubscription?.unsubscribe();
    }
  }
}
