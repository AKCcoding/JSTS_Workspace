let str = "5" + 5;
//Implicit if JavaScipt automatically converts, returns string even there is a number
console.log(str, typeof str);

//Explicit if manually declared, returns false 0 is a falsy value and true if one or more
let bool = Boolean(0);
console.log(bool, typeof bool);

let str1 = true + 1;
//outputs 2 true is coerced to 1 then + 1
console.log(str1);
