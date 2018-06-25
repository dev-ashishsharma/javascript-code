// Objects. JS is Object Oriented Language. But it is not class based oo language.
// Most simple Object. Empty Object.
// Objects have data & methods. Data is called as properties.
var myObj = {
};
console.log(myObj);
// Objects are like Map where you can assign a Key n Value.
myObj.prop = "Hello";
myObj.prop2 =23;
// Above added properties on Fly.
console.log(myObj);

console.log("The Number Property is " +myObj.prop2);

// ------------Object Literal-----------------------
var newObj = {
  "prop": "New Hello",
  "prop1": 234,
  "prop3": true,
  //wrong prop, as it should start by number.invalid identifier.
  "1": "one",
  "objectProp":{
     "innerProp": "Inner Property"
   }
};

// This way to access property is DOT notation.
console.log("The prop of String is " +newObj.prop);

// No Accesor Limitations. You can change structre at any time. Any property
// is always accessible.

// If property not present, then just tells it undefined.
console.log("Accessing property which does not exist leads to + " +newObj.prop2);

// Another way to Access property [] notation. When to use this:
//1. Property name is a reserved word/invalid identifier. I cannot access 1 by
// Dot Notation.
//2. Property name starts with a number.
//3. Property name is dynamic.
console.log("Accessing using Square bracket notation " +newObj["1"]);

// Case 3: Lets say you dont know what property want to access.
var propertyName = "prop1";
// Here you dont know the property name, but can still access it.
console.log("The property when you dont know property name " +newObj[propertyName]);

// -----------------OPTIMIZATION-------------
// The square bracket reduces the optimization that the JS Engine can do as it does not know what
// the property can be. On dot notation, it knows what code does and hence can optimize the code. So dot faster.

// --------------NESTED OBJECTS--------------
// Can mix n match the property.
console.log("Printing Inner Object property " +newObj.objectProp.innerProp);
//or
console.log("Printing Inner Object property MIX " +newObj.objectProp["innerProp"]);

//---Equality Operator In Objects-----
// The Javascript operator checks if both objects are pointing to same place in Memory.
var newObjj1 = newObj;

console.log("The new Copy of obj " +newObjj1.prop);
if (newObj === newObjj1) {
  console.log("The objects are Equal");
}

//---------Undefined & Null for Objects--------------
var person = {
  "firstName": "Ashish",
  "middleName": null,
  "lastName": "Sharma",
  "Age": 25
};
// This is undefined in Output.
console.log("The person Age is " +person.age);

// Whatif you want to convey that property does not exist. you specify the NUll
console.log("The person middleName is " +person.middleName);

// ---------Removing a Property-------
delete person.Age;
console.log("The Age is deleted " +person.Age);
console.log("The Person Age is deleted " +person);

//-------------WRAPPER OBJECTS---------------------
var string = "Hello World";
// How can you use dot operator on primitive ?
var length = string.length;

// JS has equal Objects for Primitive Data Types.
// JS converts the string to String object and then calls length method on it.

//--Type Wrapper--
// String..Number..Boolean..Symbol --all primitive have corresponding Objects.
