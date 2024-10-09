const items = {
  id: "1",
  name: "Mouse",
  price: 250,
  getDetails: function () {
    return this.id + " " + this.name + " " + this.price;
  },
};

console.log(items.getDetails());
