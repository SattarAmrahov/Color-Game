var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var numberOfSquares = 6;

init();

function init(){
	setupModeButtons();
	setupSquares();	
	reset();
}


function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numberOfSquares = 3;
			} else {
				numberOfSquares = 6;
			}

			reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square 
			var clickedColor = this.style.background;

			// compare color to pickedColor
			if (clickedColor === pickedColor) {
				changeColors(clickedColor);
				messageDisplay.textContent = "Correct";
				h1.style.background = pickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	// Loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr =[];

	for (var i = 0; i < num; i++){
		// get random color and push to the array
		//arr.push(randomColor());
		arr[i] = randomColor();
	}

	// return that array
	return arr;
}


function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}
