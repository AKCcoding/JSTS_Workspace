//var has global scope
var number = 1;

// let has block scope
{
  let x = 2;
  // var number is logged here in a scope here and still works
  console.log(number);
  console.log(x);
}
//x cannot be used here is not within a block scope

//const cannot be reassigned
const y = 3;
// const cannot be reassigned y = 4 will return an error
console.log(y);
