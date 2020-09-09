import { Observable, interval, throwError, Subject, pipe, of, from } from "rxjs";

import {
  map,
  throttle,
  throttleTime,
  catchError,
  filter,
  flatMap,
  debounceTime,
  distinctUntilChanged,
  reduce,
  scan,
  pluck,
} from "rxjs/operators";

/**
 * We can create a observer based on an object
 * that implements the function contracts (next, error, complete)
 *
 * This functions are used for the observer to react for events.
 */
let observer = {
  next: function (value) {
    console.log(`${value}`);
  },
  error: function (error) {
    console.log(`${error}`);
  },
  complete: function () {
    console.log(`The observable get completed.`);
  },
};

/**
 * We can see that the argument in new observable is an observer that implements this methods.
 */
const observable = new Observable((observer) => {
  observer.next("Jhon"); // When we call the function we emit a value to the observer
  setTimeout(() => {
    observer.complete();
  }, 2000);

  setTimeout(() => {
    observer.error("OMG Error!!"); // onces an error is emited the complete flow is over.
  }, 3000);
}).subscribe(observer);

/**
 * You need to unsubscribe to avoid memory leaks
 */
setTimeout(() => {
  observable.unsubscribe();
}, 5000);

/**
 * Observable that emits events each x milliseconds
 */
const intervalObservable = interval(100);

/**
 * As a value recives a eventId that is autonumeric
 */
intervalObservable
  .pipe(
    map((value) => value * 2),
    throttleTime(2000), // the values that arrives in the throttle time elapse are missing.
    catchError((error) => throwError("Something bad happen!", error))
  )
  .subscribe(observer);

/***
 * With subject we can emit the events when we want to
 */
const subject = new Subject();

subject.subscribe({
  // we can define the object on the fly
  next: function (value) {
    console.log(`${value}`);
  },
  error: function (error) {
    console.log(`${error}`);
  },
  complete: function () {
    console.log(`The observable get completed.`);
  },
});

subject.subscribe({
  next: (value) => console.log(`I receive a value ${value}`),
});

setInterval(() => {
  subject.next("Emit this event from subject");
}, 10000);

intervalObservable
  .pipe(
    filter((num: number) => num % 2 == 0),
    map((num) => {
      console.log(`Only pairs ${num}`);
      return num;
    })
  )
  .subscribe({
    next: (num) => {
      console.log(`Arrives ${num}`);
    },
  });

intervalObservable
  .pipe(
    debounceTime(110) // this function wait for  emit the last emited event when their timestamp pass this time (argument) in miliseconds
  )
  .subscribe({
    next: (value) => console.log(`Receiving a  ${value}`),
  });

intervalObservable
  .pipe(
    map((value) => {
      return value < 10; // this return true 10 times and false for the rest
    }),
    distinctUntilChanged() // this operator allow to us to filter the same emited values
  )
  .subscribe({
    next: (value) => console.log(`Uniques values a  ${value}`), // only arrives once true and false
  });

from([1, 2, 3, 4, 5])
  .pipe(
    reduce((accumulator, currentValue) => {
      accumulator = accumulator + currentValue;
      return accumulator;
    }, 0)
  )
  .subscribe({ next: (value) => console.log(`Arrives a value`, value) });

from([1, 2, 3, 4, 5])
  .pipe(
    scan((accumulator, currentValue) => {
      // scan is similar to reduce but it emits the value of each step
      accumulator = accumulator + currentValue;
      return accumulator;
    }, 0)
  )
  .subscribe({ next: (value) => console.log(`Arrives a value`, value) });

of([1, 2, 4]) // emit the copmpleted array
  .pipe(pluck("length")) // allow to us to access to the objects property directly with a string value
  .subscribe({ next: (value) => console.log(`SIZE = `, value) });
