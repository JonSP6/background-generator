var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// 2) Display the initial CSS linear gradient property on page load
window.addEventListener('load', displayCSS, '');

function displayCSS() { 
	css.textContent = "linear-gradient(to right, " 
	+ color1.value
	+ ", "
	+ color2.value
	+ ");";
};

// 3) Creating a Random Button and having it generate a random hex number for the Inputs
var randomButton = document.createElement('button');
var randomButtonContent = document.createTextNode('Random');
randomButton.appendChild(randomButtonContent);
body.appendChild(randomButton);

randomButton.addEventListener('click', randomNumbers,'');

function randomNumbers() {
	// var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
	// var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
	// body.style.background = 
	// "linear-gradient(to right, " 
	// + randomColor1
	// + ", " 
	// + randomColor2
	// + ")";

	// css.textContent = "linear-gradient(to right, " 
	// + randomColor1
	// + ", "
	// + randomColor2
	// + ");";

	color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}

// 1) Color inputs match the background generated on first page load.
// The easy way is to just set the value to the CSS background linear-gradient color directly in HTML.

// window.addEventListener('load', defaultGradient, '');

// function defaultGradient() {
// 	var compStyle = window.getComputedStyle(body);
// 	var thisBackgroundColor = compStyle.getPropertyValue('background-image');
// 	// var firstColor = backgroundColor
// 	alert(thisBackgroundColor);
// };