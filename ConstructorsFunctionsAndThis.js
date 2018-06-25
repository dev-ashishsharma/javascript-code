//------OBJECTS--------
var myObj = {}; // Inline empty object.

// This is like a Constructor Functions.
function createEmployeeObject(firstName, lastName, desig, gender) {
  // No need to do first & last line if new keyword is used.
  // JS creates an object by variable this. So assume it adds lines like
  // first n second as below.
  // var this = {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.designation = desig;
  // return this;
}

var emp1 = new createEmployeeObject("Ashish", "Sharma", "Unemployed", "M");
console.log(emp1);

//------------DIFFERENCE BW FUNCTIONS & CONSTRUCTORS----------

// REGULAR FUNCTION
var bicycle1 = createBicycle(50,40,20);
var bicycle2 = createBicycle(20,30,40);

// Calling a regular function with new Keyword Still works.
// The lines JS inserts in function are just wasted. So interpreter 
// works is of no use.
function createBicycle(cadence, speed, gear) {
  var newBicycle = {};
  newBicycle.cadence = cadence;
  newBicycle.speed = speed;
  newBicycle.gear = gear;
  return newBicycle;
}

console.log(bicycle1);
console.log(bicycle2);

///CONSTRUCTOR FUNCTION
// Convention for Constructor in JS is not using Camel Case
// Just use normal case, with first word as Capital.
// Calling this without new keyword does not work. You get undefined returned.
function Bicycle(cadence, speed, gear) {
  // var this = {};
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  // return this;
}

// Constructor mode in JS, is a way in which you call
// a function in JS.
var bicycle3 = new Bicycle(10,20,30);

//---IMP---
// if you call constructor function without new..
// it creates those properties on global this object..
// but you are not returning anything and hence undefined is returned by default in JS.

console.log(bicycle3);


//---------PRACTICAL EXAMPLE AND ISSUE WITH THIS-----
// using the Bicycle Constructor.
// So in below example there are 2 different functions and hence
// can have 2 different this pointers.
function Bicycle1(cadence, speed, gear, tirePressure) {
  // var this = {};
  // Here the this reference for properties in constructor
  // mode is the new object that is being created.
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;
  this.inflateTyres = function() {
    // Here the this reference is the object which is calling this
    // method to inflate tyres.
    this.tirePressure += 3;
  }
  // return this;
}

var bicycle4 = new Bicycle1(10,20,30, 25);
bicycle4.inflateTyres();
console.log(bicycle4);

function Mechanic(name) {
  this.name = name;
}

// Now i want capability to Mike to inflate tyres.
var mike = new Mechanic("Mike");
// Can do something like this below.
mike.inflateTyres = bicycle4.inflateTyres();

// What happens when we do below: It gives an Error. as 
// mike object has no tirePressure property.
// ----ERROR ----mike.inflateTyres();

// What if i can tell JS that rather than the default 
// way of using JS, bind this to the object i want it to.

mike.inflateTyres.call(bicycle4);

console.log(bicycle4);



//----- TYPES IN WAY YOU CALL FUNCTIONS IN JS-----
function foo() {
  console.log("Hello Foo");
}

foo(); // Method 1 of calling functions in JS.

var obj = {};
obj.foo  = function() {
  console.log("Hello from function property.");
};

obj.foo(); // Method 2 : Calling function from Object Handler.

//  Method 3 : Using the new keyword to use in Constructor mode. new Foo();

// Method 4-----IMPORTANT
// Every function in JS has a property call. You can use that to call a function.
// Its imp, as call takes an object as prarmeter and binds the this reference to this object.
foo.call({});


//--------Execution Context in JS----------

// Method 1.
function foo1() {
  console.log("Hello Foo1");
  console.log(this);
}

foo1();

// When a function is called like this. The valiue of 
// this keyword is the Global Object. If running in browser
// it is the Window object. So based on where you run, it is the Global Object.

// Method 2

var obj1 = {"prop": "This is the obj itself"};
obj1.foo  = function() {
  console.log("Hello from function property 1.");
  console.log(this);
};

obj1.foo();

// If calling in context of Object. Then this is the refers to this
// object whose property you are calling like Java..

// Method 3 : new
new foo1(); 
// this refers to the newly object created on fly. which is the empty object.
