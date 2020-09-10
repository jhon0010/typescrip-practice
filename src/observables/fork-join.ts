import { from, forkJoin, interval, of } from "rxjs";
import { mergeMap, map, switchMap, take, delay } from "rxjs/operators";

const firstNumbersObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/**
 * Await to the completness of all observables
 * only return the last value of each observable
 */
const fork = forkJoin(of("Hello").pipe(delay(500)), firstNumbersObs, interval(500).pipe(take(2)));

fork.subscribe(console.log);
