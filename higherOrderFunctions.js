// Callback function, passed as a parameter in the higher order function
const callBackFunction = () => {
  console.log("m a callback Function");
};

const higherOrderFunction = (func) => {
  console.log("m i higher order function");
  func();
};

higherOrderFunction(callBackFunction);

// exmaple 1 :

radius = [1, 2, 3];

const area = (radius) => Math.PI * radius * radius;

const diameter = (radius) => 2 * radius;

const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));

// Object.entries() example // it transform an object with properties to an array conataining other arrays with those same key values of the object

const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const entries = Object.entries(person);
console.log("🚀 ~ file: higherOrderFunctions.js:41 ~ entries:", entries);

// conpose() example // compose() takes multiple functions as arguments.
// It creates a new function that runs the functions provided as arguments from right to left (h to f).
// The output of the last function (h) becomes the input for the second-to-last function (g), and so on, until the output of the first function (f) is returned

const compose =
  (...functions) =>
  (value) => {
    return functions.reduceRight((acc, fn) => fn(acc), value);
  };

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const subtractTen = (x) => x - 10;

const composedFunction = compose(subtractTen, multiplyByThree, addTwo);
const result = composedFunction(5);
console.log("🚀 ~ file: higherOrderFunctions.js:59 ~ result:", result);
// Result: subtractTen(multiplyByThree(addTwo(5)))
// Equivalent to: subtractTen(multiplyByThree(7))
// Equivalent to: subtractTen(21)
// Output: 11

// map exmaple

const array0 = [1, 3, 5, 7];
console.log("🚀 ~ file: higherOrderFunctions.js:66 ~ array0:", array0);

const newArray = array0.map((array) => (array += 10));
console.log("🚀 ~ file: higherOrderFunctions.js:69 ~ newArray:", newArray);

// another one

const users = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Doe", age: 30 },
  { firstName: "Jack", lastName: "Doe", age: 35 },
  { firstName: "Jill", lastName: "Doe", age: 40 },
  { firstName: "Joe", lastName: "Doe", age: 45 },
];

const wantedUsers1 = users.map((user) => {
  return user.firstName + " " + user.lastName;
});

console.log(
  "🚀 ~ file: higherOrderFunctions.js:86 ~ wantedUsers ~ wantedUsers1:",
  wantedUsers1

  // const wantedUsers2 = users.map((user) => {
  //   return {
  //   };
  // });
);
// console.log(
//   "🚀 ~ file: higherOrderFunctions.js:91 ~ wantedUsers2 ~ wantedUsers2:",
//   wantedUsers2
// );
