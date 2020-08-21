/**
 * Callback example
 *
 * @param num1
 * @param num2
 * @param callBack
 */
function add(num1, num2, callBack) {
    var result = num1 + num2;
    callBack(result);
}
add(1, 1, function (result) {
    console.log(result);
});
/**
 * Variable arguments example
 * @param firstName
 * @param restOfName
 */
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
/**
 * Generics, like echo output
 * @param arg
 */
function identity(arg) {
    return arg;
}
var output = identity("myString");
var output2 = identity(12);
console.log(output);
console.log(output2);
//literal type
var personType;
// literal value objects
var person = {
    name: "Jhon",
    lastname: "lotero"
};
console.log("" + JSON.stringify(person));
(function (name) { return console.log("" + name); });
/**
 * You can define different kinds of expectes typer arguments using the union types.
 *
 * I think this is because here you dont have method overloaded, you can't have
 * two function with the same name in the same scope.
 * @param arg
 */
function start(arg) {
    // this is super common in JavaScript
    if (typeof arg === "string") {
        return commonCase(arg);
    }
    else if (Array.isArray(arg)) {
        return arg.map(commonCase).join(",");
    }
    else if (typeof arg === "function") {
        return commonCase(arg());
    }
    else {
        return commonCase(arg.s);
    }
    function commonCase(s) {
        // finally, just convert a string to another string
        return s;
    }
}
var some = { a: 7, b: "I am" };
//const otherOneInstance: otherOne = { a: 2, b: "other" }; //Error
// Unions types
"foo"; // has the type "foo"
console.log("" + "foo"); //  literal types
pad("hi", 10, "left");
var s = "rigth";
//pad("hi", 10, s); //ERROR! is not assignable type string to type "left" | "right"  (literal types)
var s2 = "right";
pad("hi", 10, s2); // literally typed
