// JAVASCRIPT Basics DataTypes & Type Coercion.
console.log("Hello World Again");

// Defining Variable. No pre-declaration of type needed.
// No scoping information in variable.
var value = 42;
// or
var value1;
value1 = 44;
var value2 = value + value1;

//------ Primitive Types -----
//1. Number
// All Floating point double precision 64 bit numbers.
console.log(value);
console.log(value1);
console.log(value2);

//2. String
// Its a sequence of Unicode Characters(16-bit). No character type.
// A character is just String of length 1.
var d = "Hello";
console.log(d);

//3. Boolean
// Can be true or false
var e = true;
console.log(e);

// Variable has no type information. Language has no strong typing.
// Loose or Weak Typing. You can assign any value to a varibale.
value = "Hello World";
console.log(value);

//----------------------------------------------
// Type : Undefined
var undefinedValue; // Current value of this is undefined.
// As soon a varibale declared in Javascript, an explicit value is
// assigned to that Variable which is UNDEFINED. This is separate type
// which has only 1 value, UNDEFINED.
console.log(undefinedValue);
//----------------------------------------------
// Type: Null
// Null is also type with only 1 value that is null.
undefinedValue = null;
console.log(undefinedValue);
//-----------------------------------------------

// Difference in Undefined or Null
// Undefined: Means the value has not been provided. Like empty form field.
// null: if you want to assign a value, which is non-value, thats when you assign a value of
// null to it.

//-----------------------------------------------

// ES 6: New Prmitive type added is Symbol.
// symbol is kind of enumeration in other languages, where it can take one value out of many.
//-----------------------------------------------

// Variables & values can be interrogated.
// In Java, C++ the type is obvious. In JS, there is no way of knowing it.
// It depends on what type it is holding it.
// typeof <value>
// typeof <variable>

var type;
console.log(typeof type);
type=10;
console.log(typeof type);
type ="Helllo";
console.log(typeof type);
type=true;
console.log(typeof type);
type=null;
console.log(typeof type); // This shows Object instead of null. LOL
// This is a bug in Javascript. Cannot fix, as could break potentially old behaviour.

//------------------------------------------------------------------------------------

// TYPE COERCION

var i=3;;
var j="4";

var c = i + j;

console.log(c); // Prints 34: Type Coercion happens to join them as String.

//--------------------------------------
// Equals = Operator = Assignment Operator.
// Compare == returns a boolean based on comparison. Goes beyond a level in JS.
// They introduced === This operator does not do typeConversion.

var k=10;
var l=10;

if(k == l) {
  console.log("values are equal");
}

var k=10;
var l = "10";

if(k === l) {
  console.log("values are equal"); // Ideally should not print. But it does.
  // Interpreter does assumptions, which many a times causes mistakes.
  // == here it converts type and checks if they match and assumes one type.
  // === is the right way to check for values. as it does not do typeconversion.
}

//-----Some Quirks of Type Coercion-----

var z=10; // if z is 0, below console.log does not gets printed.
// Every number value is true(including negatives), except 0
// Every String value is true, except Empty String.
// undefined is false, null is false.

if(z) {
  console.log("z is true");
}
