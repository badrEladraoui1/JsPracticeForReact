// map // creates a new array
// map – it creates a new array from calling a function iteratively on every array element.
// array.map(function(currentValue, index, arr), thisValue)

const array = [1, 2, 3, 4];

const func = (num) => {
  return num + 1;
};

const newArr = array.map(func);

console.log("🚀 ~ file: firstDay.js:111 ~ Oldarray:", array);
console.log("🚀 ~ file: firstDay.js:118 ~ newArr:", newArr);

// filter // creates a new array
// filter – this array method creates a new array contained with the elements that are filtered
//  based on the function condition while iterating
//  on the array.
// array.filter(function(currentValue, index, arr), thisValue)


const salaries = [1000, 2030, 7290, 1092];

const checkSalary = (salarie) => {
  return salarie > 2000;
};

const above2000Slarie = salaries.filter(checkSalary);
console.log("🚀 ~ file: firstDay.js:126 ~ salaries:", salaries);
console.log("🚀 ~ file: firstDay.js:132 ~ above2000Slarie:", above2000Slarie);


 // same as doing this like in react


const lowerSlaries = salaries.filter((salarie) => {
  return salarie <= 2000;
  
});
console.log(
  "🚀 ~ file: firstDay.js:140 ~ salaries.map ~ lowerSlaries:",
  lowerSlaries
);

// reduce
// reduce – this array method returns a single resultant value by applying a function on every element of the array.
// array.reduce( function(total, currentValue, currentIndex, arr), initialValue )


// let arrw = [1 , 2 , 3 , 4 , 5];

// const sumOfArr = (sum , num) => {
//         return sum + num
// }

// const funct = (item) => {
//     console.log(arrw.reduce(func))
// }



let arr = [10, 20, 30, 40, 50, 60]; 
   
function sumofArray(sum, num) { 
    return sum + num; 
} 
function myGeeks() { 
    console.log(arr.reduce(sumofArray)); 
} 
myGeeks()
