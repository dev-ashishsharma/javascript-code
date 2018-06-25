//------------------------CLOSURES----------------------
var a =10;

function outer() {
  var b = 20;

  var inner = function() {
    a++;
    b++;
    console.log(a);
    console.log(b);
  };
  return inner;
}

var innerFn = outer();

innerFn();

var innerFn2 = outer();

innerFn2();

// Prints: 11 21, 12 21 : Since a is global, a++ increases. But b everytime new instance is created
// and hence it increases by 1 only.

// Above is closure in action.
// At line 14: where outer is called..b variable exists as it is in scope.
// But after 14, at 16 its a declaration and not an execution and hence b is not
// in scope. But still the value of b is printed.

// When scope is created in JS, then it always knows what scope it has. It knows where to
// go to find the values. It has a pointer to the actual function or values. It deoes not create a
// copy of the variables. The function remembers the scope during the time of declaration irrespective
// of where it is called from.

// The function object also has a property which remembers the a & b instance creation. This means
// that the function object has a reference to a & b. This means that b instance cannot be cleared by GC
// even if the scope of the outer function is over.


//------------------CLOSURES IN CALLBACKS------------------
// when you send one function to other function and that fns executes it.
// JS is single threaded.

var x = 10;

// wait 1 sec

var fn = function () {
  console.log(x);
};
// Send the function and not execute and it waits for a second
// then it prints it. This is the delay concept of JS.
setTimeout(fn,1000);

// Above shows closures, as setTimeout calls your method, but setTimeout library does
// not even know about x, so when you pass a function, along with function the scope information
// also gets passed. The function object knows about it. This is how the callbacks knows about x.

//--------------------MODULE PATTERN-----------------

var person = {
  "firstName" : "ashish",
  "lastName" : "sharma",
  "getFirstName" : function() {
    return this.firstName;
  },
  "getLastName" : function() {
    return this.lastName;
  }
};

// Prevent access to person.firstName property directly. Should
// only be used as getter and setter values. Use scopes as a way to
// hide values.

function createPerson() {
  var firstName = "ashish1";
  var lastName = "sharma1";

  var returnObj = {
  "getFirstName" : function() {
    return firstName;
  },
  "getLastName" : function() {
    return lastName;
  },
  "setFirstName" : function(name) {
    firstName = name;
  },
  "setLastName" : function(name) {
    lastName = name;
  }
 };
  return returnObj;
}

var person1 = createPerson();

console.log(person1.firstName); // cannot access now.

console.log(person1.getFirstName());
// because of scope closures..we can access the value in getFirstName.
// When returnObj was created, which has 2 function objects, which has access to firstName & lastName. So you
// can only access those properties through the function objects and not through returnObj. This is closures.
// Any variables declared in function, gets created everytime the function is called.

person1.setFirstName("Foo");
console.log(person1.getFirstName());
