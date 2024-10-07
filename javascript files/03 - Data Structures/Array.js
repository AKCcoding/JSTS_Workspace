const products = ["mouse", "mousepad", "keyboard"];

// you can reassign the elements in the array
// Output :[ 'monitor', 'mousepad', 'keyboard' ]
products[0] = "monitor";

//push onto the last element of products array
//Output: [ 'monitor', 'mousepad', 'keyboard', 'Headphones' ]
products.push("Headphones");

//pop the last element of products array
//Output: [ 'monitor', 'mousepad', 'keyboard']
products.pop();

//get the length or total number of items in array
//Output: 3
products.length;

console.log(products.length);
