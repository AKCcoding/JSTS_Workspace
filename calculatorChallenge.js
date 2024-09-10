const calculator = (num1, num2, operator) => {
  //   if (operator === "+") {
  //     return num1 + num2;
  //   } else if (operator === "-") {
  //     return num1 - num2;
  //   } else if (operator === "*") {
  //     return num1 * num2;
  //   } else;
  //   {
  //     return num1 / num2;
  //   }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      console.log(`please put operator`);
      break;
  }
};
console.log(calculator(8, 2, "/"));
