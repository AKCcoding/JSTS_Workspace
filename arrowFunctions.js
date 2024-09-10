// function add(num1, num2) {
//   return num1 + num2;
// }

//expression sample

// const add = function (num1, num2) {
//   return num1 + num2;
// };

//Arrow with shorter declaration
// const add = (num1, num2) => num1 + num2;
//or
// const add = (num1, num2) => {
//   return num1 + num2;
// };

const subtract = (a, b) => a - b;
const mul = (a, b) => a * b;
const divide = (a, b) => {
  return a / b;
};

console.log(add(10, 3));
console.log(subtract(99, 90));
console.log(mul(9, 9));
console.log(divide(2, 8));
