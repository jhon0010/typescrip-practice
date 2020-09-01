const people = [
  { name: "Jhon", last: "Lotero" },
  { name: "Peter", last: "Whatever" },
];

const jhon = { name: "Jhon", last: "Lotero" };

function getPrototype() {
  console.log(`Hello ${Object.getPrototypeOf(jhon)}`);
}

setTimeout(() => {
  Object.keys(jhon).forEach((key, index) => console.log(`${key} : ${index}`));
}, 3000);

setTimeout(getPrototype, 100);

// we can cancel the timeout if a condition occurs

let cancel: boolean = false;

const timeout = setTimeout(() => console.log(`You can't cancel to me`), 500);

setTimeout(() => {
  cancel = true;
}, 100);

/**
 * We can cancel process in background
 */
setTimeout(() => {
  if (cancel) {
    clearTimeout(timeout);
  }
}, 100);

/**
 * We can pass also arguments to this function with timeout
 * @param name
 */
const greeting = (name: string) => console.log(`Hello ${name} !!`);

setTimeout(greeting, 400, "Jhon");
