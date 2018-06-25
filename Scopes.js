// JS Scopes
// Scope dictatates a code of program, where varibale has scope.
// JS has function scoping & not block scoping like C++ or Java.
var name = "Ashish";

function allocateDepartment() {
  if (name === "Ashish") {
    var department = "Engineering";
  }
}
allocateDepartment();

// This does not work as department is scoped 
// for function.
// console.log(department);

// A method argument is creating a new variable
// in local scope for that method with name equal to parmater name.
// Anonymous function call.

// --------IIFE: Immediately Invoked Funtion Expression.---
// Execute code right away, No need to give name and pollute global;
// or local namespace.
(function() {
  var a = 10;
  var b = 15;
  console.log("The sum is " + (a+b));
})();

// ----READ n WRITE OPERATIONS------
var i =10; // reading operation
var j = i ; // reading i and writing to j.

//---
// If you perform a read operation on a varibale without
// declaring it, It gives you an error. If you do a write operation
// on a variable without declaration, it is fine.

//---------GLOBAL OBJECT-------------
// the GO holds all objects. Depends on what runtime you are using. Since
// we are using Firefox, the Global Object is the Window Object, where you loaded
// you code and it holds all the global data.
// Every GLOBAL variable is a property on GLOBAL OBJECT.
// Same happens for each GLOBAL Functions.



