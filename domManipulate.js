let h1 = document.querySelector("h1")
h1.style.color = "pink";

// GetElementById
let idElement = document.getElementById("highlight")
idElement.style.color = "red"

let classElement = document.getElementsByClassName("bolded")
// Returns node list object if more than one Element. No loop for these
// node list elements. The classElement[0] is a big whole JS object.
classElement[0].style.color = "blue"

// Again a Node list is returned. Tags like h1/li
let elemTag = document.getElementsByTagName("li");
elemTag[2].style.color = "purple";


// querySelector
// Returns the first-element that matches a given CSS style selector
// Only gives the first match and not a node list. Can also take a tag name.
//

let selector = document.querySelector(".bolded")

// querySelectorAll returns the ALl elements. Returns the Node List.
let selectorAll = document.querySelectorAll("li")

// Manipulate the Elements after Selection.
// STYLE Property. Huge Property. 1 for each CSS property.
idElement.style.color = "red"
idElement.style.border = "20px red solid"
idElement.style.fontSize = "50px"
idElement.style.background = "yellow"
idElement.style.marginTop = "100px"

// Using CSS to add presentation by JS
// Adds a CSS class which can change the presentation of the Page and // apply some properties.
idElement.classList.add("anotherclass")
// Removes a CSS class which can change the presentation of the Page and remove those properties.
idElement.classList.remove("anotherclass")
// Toggle a CSS class. Whe hat this means is that, if the class if already
// present, then remove it else add it. So it toggle the class to the // element.
idElement.classList.toggle("anotherclass")

// Manipulating the Text & Content.

let para = document.querySelector("p")
// Dangerous as it overrides everything. Any styles like bold are lost.
para.textContent = "I just changes the para"

// Another property which keeps the proper html ELements.
para.innerHTML //This returns the html style tags which are in the element.
// if you overide innerHTML its overrides everything as textContent.
//
//
// ATTRIBUTE MODIFICATION
//----getAttribute("href") or setAttribute("href", "www.google.com")
//----setAttribute("src" , "corgi.png");

// DOM Events
let body = document.querySelector("body")
let btn = document.querySelector("button")
let color = false;
btn.addEventListener("click", () => {
  document.body.classList.toggle("purple")
})
