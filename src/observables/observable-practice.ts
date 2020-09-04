import { Observable, interval, throwError, Subject } from "rxjs";

import { map, throttle, throttleTime, catchError } from "rxjs/operators";

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
const intervalObservable = interval(1000);

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

setInterval(() => {
  subject.next("Emit this event from subject");
}, 100);
