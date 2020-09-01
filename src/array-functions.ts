const persons = [
  { name: "Jhon", last: "Lotero" },
  { name: "Peter", last: "Whatever" },
];
console.log(`Hello`);

/**
 * In the map funcion you can accesss to the current object , the index of this object and then to all original array
 */
persons.map((person, index, original) => {
  console.log(`${JSON.stringify(person)}`);
  console.log(`${JSON.stringify(index)}`);
  console.log(`${JSON.stringify(original)}`);
});

const numbers = [4, 5, 6, 8, 4];

const sum = numbers.reduce((total, num) => {
  return total + num;
});

console.log(`${sum}`);

const someNUmberGreaterThanTen = numbers.some((num) => num > 10);
console.log(`${someNUmberGreaterThanTen}`);

const everyNUmberGreaterThanThree = numbers.every((num) => num > 3);
console.log(`${everyNUmberGreaterThanThree}`);
