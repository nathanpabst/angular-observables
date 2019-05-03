import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// tslint:disable-next-line: import-blacklist
import 'rxjs/Rx';
// tslint:disable-next-line: import-blacklist
import { Observer } from 'rxjs/Observer';
// tslint:disable-next-line: import-blacklist
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubcription: Subscription;
  customObsSubcription: Subscription;



  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numbersObsSubcription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      // this code will not run because we've stopped/completed the observer
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });
    this.customObsSubcription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
      );
  }

  // cleans up space and memory and elimates data leaks
  ngOnDestroy() {
    this.numbersObsSubcription.unsubscribe();
    this.customObsSubcription.unsubscribe();
  }
}
