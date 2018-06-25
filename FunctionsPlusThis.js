// Functions in JS
// The below method is called as function declarations where you declare and define a function.
function sayHello() {
  console.log("Hello from JS Function");
}
sayHello();

function sayName(a,b) {
  console.log("Hello " +a +" " +b);
}

sayName("Ashish", "Good Morning");

//------Flexible Argument counts------
// Can do below..JS still gets called. Not sent arguments are sent as Undefined.
sayName("Ashish");

// More parameters
// Still works...3rd paramter is essentially ignored.
sayName("Ashish", "Good Afternoon", "Why Am I here");

// OVERLOADED FUNCTIONS not possible in JS, due to above Argument functionality.

//---RETURN VALUES------
// If Empty return is used, then it returns undefined.
function returnValue(a,b) {
  return "Hello " +a +" " +b;
}

var returnValue = returnValue("Ashish", "Good Night");

console.log("The return value is " +returnValue);

//------------FUNCTION EXPRESSIONS--------
// Function itself is a Value in JS.

var f = function foo() {
  console.log("Hello Function");
};

f();

//-----------Anoynomous Function Expressions-------
// You never use foo name for function above. You dont need that name
var k = function () {
  console.log("Hello Anoynomous Function Expression");
};

k();

//-------------Functions as Arguments-----------------
var executor = function(fn) {
  fn();
};

// call function 1 with value of function 2
executor(k);

// ---- Functions as Property in Objects-------------
// Function as Object Property. This is how methods work in Objects. Since there is 
// no class, properties can work as functions. 

var myObj = {
  "testProp": true,
  "myMethod": function() {
    console.log("My function in Object");
  }
}

// Since the property is function..need to call it like one.
myObj.myMethod();

// Can also add a function property like you do for variables.
myObj.method2 = function() {
  console.log("This is the other function of my Object");
}

myObj.method2();

//----The this keyword--------

var person = {
  "firstName" : "Ashish",
  "lastName": "Sharma",
  "getFullName" : function(){
    // return person.firstName + " " + person.lastName;
    // This is how the method should return as you should have access to 
    // the object which has firstName & lastName. It is that Object. You are not concerned with 
    // name of Object.
    return this.firstName + " " + this.lastName;
  }
};

var fullName = person.getFullName();

console.log(fullName);

// This method is using person name..which can be changed in JS
var person2 = person;
// This overwrites the person object to Empty.
person = {};

console.log(person2.getFullName()); // Returns Undefined Undefined.

// This is why its a fragile code as no access to person object.
// Need to change the line above with this pointer//

//---------------DEFAULT FUNCTION ARGUMENTS--------------
// 2 default arguments you get for free in JS. arguments & this.
// Var args in C++ & java.
// JS does this implicitly.

// So this function sums all arguments sent, instead of 
// only receiving 2 as per function definition.
var add = function() {
  // arguments is first default available in JS.
  // If you send more than intended arguments, they are 
  // all captured in this arguments.
  console.log(arguments);
  var sum=0;
  //-----IMPORTANT----
  // Arguments value is not an array, even if we used as below. It is an Object
  // we use square bracket operator to get the value.
  for (var i =0 ; i< arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
};

// FUNCTIONS ARE ALSO OBJECTS. JS creates function as 
// an object and assign to variable that object.

console.log("The sum is  " + add(4,5,10,45,34));























