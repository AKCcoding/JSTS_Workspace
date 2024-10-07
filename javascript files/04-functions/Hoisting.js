// hoisting happens when you call the variables/ function before declaring it.

//Example 1
carName = "Lamborghini Aventador";

var carName;

//Example 2 old function hoisting
const result = add(1, 2);

function add(num1, num2) {
  return num1 + num2;
}
//Will produce error you cannot do this in ES6 but you can change the arrow function to old function implementation
// to fix you need to put output after getDetails
getDetails = (name, age, gender) => {
  return `My name is ${name}, Age is ${age}, Gender is ${gender}`;
};

output = getDetails("Alrae", 25, "M");

console.log(carName);
console.log(result);
console.log(output);
