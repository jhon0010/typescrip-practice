/**
 * Callback example
 *
 * @param num1
 * @param num2
 * @param callBack
 */
function add(num1: number, num2: number, callBack: (result: number) => void) {
  const result = num1 + num2;
  callBack(result);
}

add(1, 1, (result: number) => {
  console.log(result);
});

/**
 * Variable arguments example
 * @param firstName
 * @param restOfName
 */
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

/**
 * Generics, like echo output
 * @param arg
 */
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
let output2 = identity<number>(12);

console.log(output);
console.log(output2);

//literal type
let personType: {
  name: string;
  lastname: string;
};

// literal value objects
let person = {
  name: "Jhon",
  lastname: "lotero",
};

console.log(`${JSON.stringify(person)}`);

(name: string) => console.log(`${name}`);

/**
 * You can define different kinds of expectes typer arguments using the union types.
 *
 * I think this is because here you dont have method overloaded, you can't have
 * two function with the same name in the same scope.
 * @param arg
 */
function start(arg: string | string[] | (() => string) | { s: string }): string {
  // this is super common in JavaScript
  if (typeof arg === "string") {
    return commonCase(arg);
  } else if (Array.isArray(arg)) {
    return arg.map(commonCase).join(",");
  } else if (typeof arg === "function") {
    return commonCase(arg());
  } else {
    return commonCase(arg.s);
  }

  function commonCase(s: string): string {
    // finally, just convert a string to another string
    return s;
  }
}

// Intersections

type Combined = { a: number } & { b: string };
const some: Combined = { a: 7, b: "I am" };

type Conflicting = { a: number } & { a: string };
type otherOne = Combined & Conflicting;

//const otherOneInstance: otherOne = { a: 2, b: "other" }; //Error

// Unions types

"foo"; // has the type "foo"
console.log(`${"foo"}`); //  literal types

declare function pad(s: string, n: number, direction: "left" | "right"): string;
pad("hi", 10, "left");
let s = "rigth";
//pad("hi", 10, s); //ERROR! is not assignable type string to type "left" | "right"  (literal types)

let s2: "left" | "right" = "right";
pad("hi", 10, s2); // literally typed
