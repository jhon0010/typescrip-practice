"use strict";
exports.__esModule = true;
/**
 * take the result of the function in x time
 *
 * the funcion inside is the actual callback.
 *
 */
setTimeout(function () { return console.log("Taking dinner"); }, 300);
console.log("Taking bf");
console.log("Taking lunch");
var names = ["Jhon", "Doe", "Maria"];
/**
 * The function inside is also known as anonymous function.
 */
var mapped = names.map(function (name) { return "Hello " + name; });
console.log(mapped);
/**
 * Named function.
 * @param name
 */
function greeting(name) {
    console.log("Hello " + name);
}
var greetingVariableFUnction = function (name) {
    console.log("Hello! - " + name);
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
function printInfoPerson(firstName, lastName, callback) {
    var fullName = firstName + " " + lastName;
    callback(fullName);
}
printInfoPerson("John", "Doe", greetingVariableFUnction);
var failerFunction = function () { return console.log("Handling errors .. "); };
/**
 * Promises :  excecute some code when the promise is resolved.
 *
 * We can defer excecution until async block is completed.
 *
 * Have three states : Peding, fulfilled and rejected.
 *
 */
var hasMeeting = false;
var es6_promise_1 = require("es6-promise");
var meeting = new es6_promise_1.Promise(function (resolve, reject) {
    //do stuff
    var meeting = {
        name: "Important meeting",
        where: "Slack",
        When: "20-08-2020 09:am"
    };
    if (!hasMeeting) {
        resolve(meeting);
    }
    else {
        reject(new Error("You already have a schedueld meeting!!!"));
    }
});
