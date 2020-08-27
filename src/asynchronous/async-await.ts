/**
 * ****************** Async await
 *
 * Is a syntactic sugar for promises and generator functions function
 *
 */

/**
 * Generator function example
 */
/* function* generatorFunction() {
  const data = getData();
  yield data;
  console.log(`${data}`);
} */

const hasMeeting: boolean = false;

const meetingPromise = new Promise((resolve, reject) => {
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

const addToCalendar = (meeting) => {
  const calendar = `The ${meeting.name} is schedule at ${meeting.when}`;
  return Promise.resolve(calendar);
};

/**
 * This is a more readable code.
 */
async function myMeeting() {
  try {
    const meeting = await meetingPromise;
    const message = await addToCalendar(meeting);
    console.log(`${message}`);
  } catch (error) {
    console.log(`${error}`);
  }
}

/**
 * We can hanlde the possible error calling the catch block
 * myMeeting().catch((error) => console.log(`${error}`));
 */

myMeeting();

let Characteristic: {
  id: number;
  slug: string;
  value: number;
};

const inputCharacteristics = [
  { id: 0, slug: "area", value: 50 },
  { id: 0, slug: "nro-cuartos", value: 4 },
];
const dbCharacteristics = [
  { slug: "area", id: 92 },
  { slug: "nro-cuartos", id: 110 },
];

let returnWithId = (
  dbCharacteristic: { id: number; slug: string; value: number },
  input: { id: number; slug: string; value: number }
) => {
  input.id = dbCharacteristic.id;
  return input;
};

const characteristics = dbCharacteristics.map((db) =>
  inputCharacteristics.filter((input) => input.slug === db.slug).map((db, input) => returnWithId)
);

console.log(`********************** ${JSON.stringify(characteristics)}`);

console.log(typeof null); // is an object

/**
 * This is known as an IIFE (Immediately Invoke Function Expression)
 *
 * This was for avoid collision in variables names, but now we just use let and const
 */
(function sum(num1, num2) {
  return num1 + num2;
})(5, 2);
