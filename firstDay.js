// variables

var age = 25;
console.log("🚀 ~ file: firstDay.js:2 ~ age:", age);

var age = 16;
console.log("🚀 ~ file: firstDay.js:6 ~ age:", age);

let namee = "hhhh";
console.log("🚀 ~ file: firstDay.js:10 ~ namee:", namee);

namee = "badr";
console.log("🚀 ~ file: firstDay.js:14 ~ namee:", namee);

const x = "idk";
console.log("🚀 ~ file: firstDay.js:18 ~ x:", x);

// x = "bruuh";
// console.log("🚀 ~ file: firstDay.js:17 ~ x:", x)

//functions

function add(a, b) {
  return a + b;
}

console.log("🚀 ~ file: firstDay.js:24 ~ add:", add(3, 5));

let multiply = (a, b) => {
  return a * b;
};

console.log("🚀 ~ file: firstDay.js:31 ~ multiply:", multiply(6, 5));

let Me = {
  fullName: "badr",
  lastName: "Eladr",
  location: "Casa",
};

console.log("🚀 ~ file: firstDay.js:43 ~ idk:", Me);

// when affecting obj1 to obj2 they will have the same reference so when chaging obj2
// , obj1 would get the same change // objects AND arrays ARE REFERENCE TYPES

const obj1 = { ana: "Badr" };
console.log("🚀 ~ file: firstDay.js:45 ~ obj1:", obj1);
const obj2 = obj1;
console.log("🚀 ~ file: firstDay.js:46 ~ obj2:", obj2);
obj2.ana = "machiAna";
console.log("🚀 ~ file: firstDay.js:48 ~ obj2:", obj2);
console.log("🚀 ~ file: firstDay.js:45 ~ obj1:", obj1);

// for primitives this not the same . we just pass the values

let e = 10;
console.log("🚀 ~ file: firstDay.js:58 ~ e:", e);
let y = e;
console.log("🚀 ~ file: firstDay.js:61 ~ y:", y);
y = 80;
console.log("🚀 ~ file: firstDay.js:61 ~ y:", y);
console.log("🚀 ~ file: firstDay.js:57 ~ e:", e);

const person = {
  name: "said",
  age: 21,
};
console.log("first time loging person");
console.log("🚀 ~ file: firstDay.js:69 ~ person:", person);

console.log("🚀 ~ file: firstDay.js:71 ~ person.age:", person.name);
console.log("🚀 ~ file: firstDay.js:71 ~ person.age:", person.age);

person.greet = () => {
  console.log("hello");
};
person.greet();

console.log("second time loging person");
console.log("🚀 ~ file: firstDay.js:69 ~ person:", person);

console.log("...");
console.log({ ...person });

// array destructuring

const vehicles = ["vehicle1", "vehicle2", "vehicle3"];

const [car1, car2, car3] = vehicles;

console.log("🚀 ~ file: firstDay.js:90 ~ car1:", car1);
console.log("🚀 ~ file: firstDay.js:90 ~ car2:", car2);
console.log("🚀 ~ file: firstDay.js:90 ~ car3:", car3);

// Object destructuring

let random = {
  subob1: "1",
  subob2: "2",
  subob3: "3",
};

let { subob1: first , subob2: second } = random;

console.log("🚀 ~ file: firstDay.js:104 ~ first:", first)
console.log("🚀 ~ file: firstDay.js:104 ~ second:", second)




