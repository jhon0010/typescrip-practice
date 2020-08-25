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
