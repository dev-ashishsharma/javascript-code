//-------PROTOTYPES IN JS-------
// Prototypes is what creates a blueprint for objects to
// be created in. Not exactly like class, but create behaviours.
function Bicycle(cadence, speed, gear, tirePressure) {
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;
  // Here each object gets a copy of this function object
  // Which is a waste for each object.
  this.inflateTires = function() {
    this.tirePressure += 3;
  }
}

var bicycle = new Bicycle(50, 40, 30 , 20);

console.log(bicycle);

//----------------How JS processsing functions----------
// When JS processing functions, it creates an Object of that function..function object.
// But it does not create 1 object but 2 objects. One is the function object
// and the second is the Prototype Object.
function foo() {}

// So to access the Prototype object, you need to access the prototype property
// on that function. JS creates a property prototype for each function which holds the 
// prototype object.
console.log(foo.prototype);
foo.prototype.test = "To check that they all access Function prototype of Foo";

var myObj = new foo();

console.log("This is PROTO Obj below :"); // Prints the same as above for this object.
console.log(myObj.__proto__);


// myObj is an object of foo type. Then in this Object
// JS adds a property __proto__ which points to the prototype object
// of the function.

// So FUNCTION PROTOTYPE is copied to object that are based on that function.
// So foo.prototype == new myObj.__proto__

myObj.__proto__.hello = " This is the property from Prototype";

// The hello property is not in the object. After this JS engine goes one step further
// and checks the prototype object. There it has the property, so it returns that value.
// This is like defer of responsibility.
console.log(myObj.hello);

myObj.test = "This is my Object value & not proptotype";

// So here the JS engine would look in the object and return test
// property as it has this. If no property in object then it goes to prototype
// and see if it exists in prototype object.
console.log(myObj.test);

// PROTOTYPE PROPERTIES are important as they can be used to behave like functions of a class
// where there is only 1 copy of that function which all the objects of the function can use.
// Plus you can add prototype properties on the Fly and adds property to each object.
// 
// Property has a DIFFERNT NAME : DUNDER PROTO

// PROTOTYPE OBJECT Has a PROPRTY which points to Function: called CONSTRUCTOR.: They are just references.
console.log(myObj.__proto__.constructor); // Tells which function object referes to.

// NOT RECOMMENED TO USE DUNDER PROTO PROTOTYPE. Better to use prototype property of function and set values on
// top of that.

















