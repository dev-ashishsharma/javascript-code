// Arrays in JS.
// No ArrayIndex of bounds exception. Just undefined.Arrays are 0 based.
// Every JS array is an Object. It just has some additional stuff.
var myArray = ["Hello","World","JS"];

console.log("Hello Arrays 0 Index" +myArray[0]);
console.log("Hello Arrays 1 Index" +myArray[1]);
console.log("Hello Arrays 2 Index" +myArray[2]);
console.log("Hello Arrays Outside --3 Index" +myArray[3]);

//-------Add an Element to Array-----
// Just assume & put element at that position.
myArray[3] = "AddedElement";
console.log("Hello Arrays 3 Index " +myArray[3]);

//Array Length
console.log("Array Length " +myArray.length);

// Array are Objects in JS
// Array are stored as Key-Value pair, where Index is the property.
console.log("my Array " +myArray);
// myArray[0] works as myArray["0"] : Here typeCoercion happens where JS
// interpreter does that and accessing the element.

// ---Length does not count How many elements are there. It just adds 1 to the Last index of Array.
// So if you store an index with 400, the Length is 401, even if it only has 4 elements.
myArray[400] = "Test";
console.log("Array Length " +myArray.length); // here it comes as 401, even if there are only 4 elements

//-- Make Sure Array has Integer Index Elements---
// But below shows that Array is actually an Object
myArray["foo"] = "Do not do this";
console.log("Array Length " +myArray.length); // Still 400 as Indexes have to be Integers to consider as Array.

//---------ARRAYS Methods---------
// Array are JS objects.
var newArray = ["One", "Two", "Three"];

newArray.push("New Element") // Add an Element to Array.
console.log(newArray);
newArray.pop(); // Removes last Element out of array
newArray.shift(); // Removes Element from Front of Array.
newArray.unshift(43); // Adds an Element to the Front of the Array.
console.log(newArray);


//--------FOR EACH for ARRAYs----------
//It uses feature of passing functions as arguments to other functions.

// For each accepts the function as an argument and then executes the function
// for each of the elements of array.
// Foreach by default passes the each array element to your function. So you can
// do whatever with that value of Array.
// Item: Item of Array for which the loop is running.
// Index: For which index this element is in array.
// Array: the complete array on which this loop is working on.
newArray.forEach(function(item, index , array) {
  console.log("For an element " +item +" " +index +" " +array);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// Math Object..Date Object..
