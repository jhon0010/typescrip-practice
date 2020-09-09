import { from } from "rxjs";
import { mergeMap, map, switchMap } from "rxjs/operators";

const firstsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const firstNumbersObs = from(firstsNumbers);
const secondNumbersObs = from(secondNumbers);

firstNumbersObs
  .pipe(
    /**
     * The merge map always react to events emitted by the inner observable.
     */
    mergeMap((num1) => {
      return secondNumbersObs.pipe(
        map((num2) => {
          console.log(`Receiving num1 ${num1} and num2 ${num2}`);
          return num1 + num2;
        })
      );
    })
  )
  .subscribe({ next: (value) => console.log(`The mergeMap result is = `, value) });

firstNumbersObs
  .pipe(
    /**
     * Change the stream to the inner observable.
     * emitting values only from the most recently projected Observable.
     */
    switchMap(() => {
      return secondNumbersObs;
    })
  )
  .subscribe({ next: (value) => console.log(`SwitchMap value`, value) });
