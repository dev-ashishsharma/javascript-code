//------------COMPILATION & INTERPRETATION ---------
// At runtime the browser executes the source code directly..
// This is what is meant by language being interpreted as there is no
// compiled object which the browser is working on. It executes direct source code.

// There is also a Compilation step that browser does.
// This is where browser looks at the code to see what it needs. Once that step
// is done, then browser executes the code. both steps happen very closely in time.
// There is a compilation step. JS is both compiled and Interpreted.

// ------------JS COMPILATION STEPS------
var a = 10;

var b = 20;

// In this code, compilation step just registers a & b in global scope.
console.log(a+b);

// Here there are 4 things
// Var c, d,e and this function declaration. It creates myFun variable and
// assigns it to myFun function declaration. d & e are registered inside the
// myFun scope.
 var c =20;

function myFun() {
  var d =10;
  var e =10;
  console.log(d+e);
}

myFun();

// Creates a varibale myName, greet for function.
// It also registers name which is the parameter for your function.
// So it creates 3 variables, Ashish later is assigned to name when called. name variable
// is in the scope for greet.

var myName = "Ashish";

function greet(name) {
  console.log("Hello " +name);
}

greet(myName);

//---------INTERPRETATION---------
// Execution steps not look at var and declarations.
// When it needs to find the varibale, it looks at the scope chain created
// when the compiling step was done & uses variables from there.

//-------------GLOBAL SCOPE PROBLEM------------------
var k =10;

function myTest() {
  var z =k;
  console.log(z);
  // x does not exist.
  // console.log(x);
  // This variable q is created in Global Scope as it does not find this
  // variable in any scope. When it reaches global scope & does not find it
  // it creates the varibale in global scope. JS global variable are really bad.
  q = 100;
}

myTest();
//-----INTERSESTING BEHAVIOUR--- HOISTING----
console.log(m);
var m = 20;
// ABOVE m is undefined. This is not an access of an undeclared variable as
// variable is declared below. What happens is that Compiler runs before, and hence
// the interpreter does not throw exception. Only thing is m is undefined as the value is not
// yet allocated.

// Feels like all var variables are hoisted to the top  by compiler and then they are executed by Interpreter.
// It doesnt matter where you declare vars, as compiler gets to var first.

myFn1();

function myFn1() {
  console.log("I can execute even before i was declared");
}

// -- This behaviour is important in recursive multiple actions.
// A depends on B and B on A. So how you decide which one declaration is first
// This is why it does not matter where declaration is done as compiler steps is done first.
//----IMPORTANT-- This happens only for Function Declarations only and not for Function Expressions.
// As during function declaration, the function object is created in compiled step only.

//---------------STRICT MODE --------------------
"use strict"; // Make this first line of your script.
// Can use inside function to make function strict.
var myName = "";

myname = "Ashish";

*/
