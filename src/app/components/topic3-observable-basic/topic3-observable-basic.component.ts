import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic3-observable-basic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic3-observable-basic.component.html'
})
export class Topic3ObservableBasicComponent implements OnInit {

  logs: string[] = [];
  subscription!: Subscription;

  ngOnInit(): void {

    const observable = new Observable<number>((subscriber) => {
      let count = 1;

      const intervalId = setInterval(() => {
        subscriber.next(count++);
      }, 1000);

      // cleanup logic (runs on unsubscribe)
      return () => {
        clearInterval(intervalId);
        console.log('interval cleared');
      };
    });

    this.log('subscribing...');

    this.subscription = observable.subscribe(value => {
      this.log('value ' + value);
    });
  }

  // ngOnDestroy(): void {
  //   this.log('unsubscribing...');
  //   this.subscription.unsubscribe();
  // }

  unsubscribeManually() {
    this.log('manual unsubscribe...');
    this.subscription.unsubscribe();
  }

  private log(message: string) {
    console.log(message);
    this.logs.push(message);
  }
}
