const cars = [
    "McLaren", "BMW", "Ford",
    "Lambo", "Pagani", "Ferrari"
];
cars.push("Audi");

document.getElementById("cars").innerHTML = cars.sort();