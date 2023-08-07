const myDiv = document.createElement("div");
myDiv.setAttribute("id", "myDiv");
myDiv.style.border = "5px red solid";
myDiv.style.backgroundColor = "yellow";
document.body.appendChild(myDiv);

const headingElement = document.createElement("h1");
headingElement.setAttribute("class", "heading");
headingElement.style.fontSize = "xx-large";
headingElement.innerText = "My name is Nithya";
headingElement.style.color = "red";
myDiv.appendChild(headingElement);

const paragraphElement = document.createElement("p");
paragraphElement.setAttribute("class", "paragraph");
paragraphElement.style.fontSize = "x-large";
paragraphElement.innerText = "My name is Nithya";
paragraphElement.style.color = "blue";

myDiv.appendChild(paragraphElement);
