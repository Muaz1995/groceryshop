// The following JS code is for the background color changer

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function colorChanger() {
	body.style.background = "Linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorChanger);
color2.addEventListener("input", colorChanger);

// The following code is for the grocery list

var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var button1 = document.createElement("button");
	button1.innerHTML = "Delete";
	button1.addEventListener('click', event => List.removeChild(li))
	li.appendChild(button1);
	li.setAttribute("id","deleteButton");
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if(inputLength() > 0) {	
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.which === 13) {					// Here we check if the user has inputted something
		createListElement() // When the user clicks enter, it will remove whatever is in the input box. 
	}
}
button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress",addListAfterKeypress);
// -----------------------------------------------------------------