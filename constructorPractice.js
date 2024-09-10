function Person() {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.contactNumber = contactNumber;
  this.gender = gender;
  this.money = money;
}

const father = new Person(
  "Alconi",
  "Chaluangco",
  "1003 J. Trinidad Street",
  "09917813023",
  "M",
  100000
);
const mother = new Person(
  "Israelita",
  "Chaluangco",
  "1003",
  "0991378162361",
  "F",
  1000000
);

mother.changeName = function (name) {
  this.lastName = name;
};

father.changeName = function (name) {
  this.lastName = name;
};

mother.getMoney = function (money) {
  this.money = money;
};

console.log(mother.getMoney(100000));

console.log(father);
console.log(mother);
