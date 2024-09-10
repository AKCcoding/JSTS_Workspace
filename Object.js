const person = {
  name: "Alrae",
  age: 24,
  isAdmin: true,
  isRich: true,
};

person.greet = function () {
  return `Hello my name is ${this.name}, my age is ${this.age}`;
};

person.evaluate = function () {
  if (person.isRich == true) {
    return `${this.name} is rich`;
  } else {
    return `${this.name} is poor`;
  }
};
