// ES6 Functions, Arrow, Class, defaults
// super & extends
const names = ["ashish","astha","swapnil","jay","devendera","reena"]
// Use of Arrow Function.
const upperizedNames = names.map(name => name.toUpperCase())

// Regular Functions can be function declaration or function expressions
// However Arrow Function are always expressions. Full name is
// Arrow Function Expressions. So these can only be used where an expression
// is valid. This includes:
// 1. stored in a variable.
// 2. passed as an argument to a function
// 3. Store in Objects property.
// One Parameter for Arrow Function can be written as below.
const greet = name => `Hello ${name}`

greet('Ashish')

// For more than 1 param or no param we need to wrap in parantheses
const sayHi = () => console.log("Hello Ashish")
sayHi()

// ARROW FUNCTION: CONCISE BODY SYNTAX
// 1. It has no curly braces surrounding the function BODY
// 2. Automatically returns the expression. So this is for 1 line of code.
const upperizedNames = names.map(name => name.toUpperCase())

// ARROW FUNCTION: BLOCK BODY SYNTAX
// 1. It uses curly braces to wrap the function BODY
// 2. and a return statement needs to actually return something from the
// function.
const upperizedNames = names.map(name => {
  name = name.toUpperCase()
  return `${name} has ${name.length} characters in their name`
})

//------------ARROW FUNCTIONS & THIS KEYWORD------------

// OLD Functions usage of this KEYWORD
const mySundae =  new Sundae('Chocolate', ['Sprinkle', 'HotFudge'])
// The value of this inside the Sundae constructor is new objet as
// it was called with new.
