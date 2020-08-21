/**
 * take the result of the function in x time
 *
 * the funcion inside is the actual callback.
 *
 */
setTimeout(() => console.log(`Taking dinner`), 300);
console.log(`Taking bf`);
console.log(`Taking lunch`);

const names = ["Jhon", "Doe", "Maria"];

/**
 * The function inside is also known as anonymous function.
 */
const mapped = names.map((name) => `Hello ${name}`);
console.log(mapped);

/**
 * Named function.
 * @param name
 */
function greeting(name: string) {
  console.log(`Hello ${name}`);
}

let greetingVariableFUnction = (name: string) => {
  console.log(`Hello! - ${name}`);
};

/**
 * Using a callback function.
 *
 * The problem start when you try to call 3 or more nested functions this is also knows as
 *  THE CALLBACK HELL
 * @param firstName
 * @param lastName
 * @param callback
 */
function printInfoPerson(firstName: string, lastName: string, callback: Function) {
  const fullName = `${firstName} ${lastName}`;
  callback(fullName);
}

printInfoPerson("John", "Doe", greetingVariableFUnction);

let failerFunction = () => console.log(`Handling errors .. `);

/**
 * Promises :  excecute some code when the promise is resolved.
 *
 * We can defer excecution until async block is completed.
 *
 * Have three states : Peding, fulfilled and rejected.
 *
 */
const hasMeeting: boolean = false;
import { Promise } from "es6-promise";
const meeting = new Promise((resolve, reject) => {
  //do stuff

  const meeting = {
    name: "Important meeting",
    where: "Slack",
    When: "20-08-2020 09:am",
  };

  if (!hasMeeting) {
    resolve(meeting);
  } else {
    reject(new Error("You already have a schedueld meeting!!!"));
  }
});

meeting
  .then((res) => {
    console.log(`Meeting scheduled! ${res}`);
  })
  .catch((err) => {
    console.error(err.message);
  });
