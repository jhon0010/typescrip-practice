var persons = [
    { name: "Jhon", last: "Lotero" },
    { name: "Peter", last: "Whatever" },
];
console.log("Hello");
persons.map(function (person, index, original) {
    console.log("" + person);
    console.log("" + index);
    console.log("" + original);
});
