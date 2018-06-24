//-------------LET & CONST--------------------
// let & const added other than var.
// var had an issue with variable hoisting. They were either scoped globally
// or locally to entire function scope.
//
//let & const are scoped to block, not to function
// RULES:
// 1. Variables declared with let can be re-assigned, but cannot be
// redeclared in the same scope.
// 2. Variables declared with const must be assigned an initial value,
// but can't be redeclared in the same scope & can't be re-assigned.
let ashish = 'ASHISH'
const ashish1 = 'SHARMA'

console.log(ashish)
console.log(ashish1)

//------------TEMPLATE LITERALS-----------------
//Previously + was used to concatenate to string literals
//Template Literals are essentially string literals that include
//embedded expressions.
//Denoted with backticks (``) instead of single quotes or double quotes
//template literals can contain placeholders which are represented using
//${expression}. This makes it easier to build strings
let message  = teacher.name + '\n\n' + 'Please excuse' +
  student.name + '.\n' + 'is recovering from flu'

// New way. Backtick can evaulate expression as well as concat.
// They can do MUCH MORE: You can perform operations, call functions
// & use loops inside embedded expressions.
let note = `${student.name} please see ${teacher. name} in ${teacher.room}
  to pick up the report card.`

//----------------DESTRUCTURING-------------------------
//Here you can extract data from arrays & objets into distinct
//variables using de-strucuturing
// OLD way
const point = [10, 20, 30]

const x = point[0]
const y = point[1]
const z = point[2]

console.log(x,y,z)

// For an Object the OLD way was
const gemstone  = {
  type: 'quartz',
  color: 'rose',
  carat: 21
};

const type = gemstone.type
const color = gemstone.color
const carat =  gemstone.carat

console.log(type, color, carat)

// SO what is DESTRUCTURING

const point1 = [10,30,50]
// Here x,y,z destructures and stores point values without being defined
// which index to use. The indexes are implied. The Square braces are using
// destructuring to store the values.
const [x, y, z] = point1

// Can also do. This eliminates the y coordinates and discards it.
const[r, ,t] = point

console.log(x, y, z)

// DESTRUCTURING from an Object

const gemston =  {
  type  : 'diamond',
  color : 'transparent',
  carat :  25
};

// Here the curly braces are used for destrucring an Object. Since the name
// of the property matches, there is no need to mention name.
const {type, color, carat} = gemston

// Can also do. This will only select color from gemston
let {color} = gemston

// TRIKY EXAMPLE
const circle = {
  radius : 10,
  color : 'orange',
  getArea : function() {
    return Math.PI * this.radius * this.radius
  },
  getCircumference : function() {
    return 2 * Math.PI * this.radius
  }
};

const {radius, getArea, getCircumference} = circle

// Now call the function getArea
getArea() // What does this return.
// NaN. When we destructure an object and store getArea() method into
// the getArea variable. it no longer has access to this in the circle Object
// which results in NaN.


//-----------------OBJECT LITERAL SHORTHAND----------------
//eg:
let type = 'quartz'
let color = 'orange'
let carat = 22

const gemstonee = {
  type : type,
  color : color,
  carat : carat
}
// Lot of repetition going above.
// Can do below, If object properties have the same name as Variables
// assigned to them, then can drop variable names.
const gemstoneee = {type, color, carat}

// ---- SHORTHAND Method names
// OLD Way
let gem = {
  type,
  carat,
  color,
  calculateWorth = function() {
    // Do anything here
  }
}

//In ES6 there is no need for function keyword
let gem1 = {
  type,
  carat,
  color,
  calculateWorth() {
    // Do something here
  }
}
//--------------------------------------------------

//------------------ITERATION-----------------------
// OLD For loops
// // DOWNSIDES: Keep track of the counter & exit condition
// for in loop
const digits = [1,2,3,4,5,6,7,8,9]
for (int i=0; i<digits.length ; i++) {
  console.log(digits[i])
}
// DOWNSIDES: Still have to use index to access the digits
// for in loops discouraged for arrays, as it can iterate over any enumerable
// which can be a function also.
for (const index in digits) {
  console.log(digits[index])
}
// forEach loop only for arrays and no way to stop or
// breal the loop

//---------_FOR OF LOOP---------------
//exactly like for in
for (const digit of digits) {
  console.log(digit)
}
// You can stop or break a loop anytime & it only iterates
// over the values in an object.
for (const digit of digits) {
  if (digit % 2  ===0) {
    continue
  }
  console.log(digit)
}


//----------------SPREAD OPERATOR--------------------------
// Its written as three consequitive dots(...). It gives you the
// ability to expand/spread iterable objects into multiple elements.
const books = ["Nagraj","Dhruva","Chacha","Parmanu","Phantom"]
console.log(...books) // Prints all the books.

const primes = new Set([2,3,5,7,11,13,17,19,23,29])
console.log(...primes)

// COMBINING arrays
const fruits = ["apple", "banana", "pears"]
const vegetables = ["corn","potatoes", "carrots"]

const produce = fruits.concat(vegetables) // Combines both the arrays..old way

const produceNew =  [...fruits,...vegetables] // Same result as above

//------------------REST OPERATOR---------------
//This is the opposite of Spread. If spread operator is like
//unboxing the contents of a package, rest is taking all of them and put
// inside a package.
// Also three dots(...). It allows you to represent an indefinite number of
// elements in an array.
const order = [21, 22, 45, "cheese", "eggs", "milk", "bread"]
const [total, subtotal, tax , ...items]
// Prints as : 21, 22, 45, ["cheese", "eggs", "milk", "bread"]
// So items becomes an array.

//-----------VARIADIC FUNCTIONS--------------
//VARIADIC functions are functions which take an indefinite
//number of arguments. Previously this was handled by the
//arguments object. This is an array like object that is avaialble
//inside all functions.It contains a value for each argument being passed
//into a function.
// USE REST PARAMETER FOR VARIADIC FUNCTIONS makes it cleaner.
// This function can take infinite arguments.
function sum(...nums) {
  let total =0
  for (const num of nums) {
    total += num
  }
  return total
}
