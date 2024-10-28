let num = "";
let guessedNum = "";
let score = 0;
let display = document.getElementById("number");
let scoreDisplay = document.getElementById("score");

let initNum = Math.floor(Math.random() * 10 + 1);
num = initNum;

let setScoreDisplay = function () {
	scoreDisplay.textContent = "Score: " + score;
};

let congratsMessage = function () {
	scoreDisplay.textContent = "Congrats!";

	setTimeout(function () {
		setScoreDisplay();
	}, 3000);
	display.textContent = "Guess the number!";
};

let resetFunc = function () {
	console.log("resetting game");
	guessedNum = "";
	display.textContent = "";
	num = Math.floor(Math.random() * 10 + 1);
	console.log("New number is: " + num);
};

console.log("number is: " + num);
let setCorrect = function () {
	display.textContent = "Guessed Correctly!";
};

let setHigh = function () {
	display.textContent = "Too high!";
};

let setLow = function () {
	display.textContent = "Too low!";
};

let checkFormInput = function () {
	let form = document.getElementById("Form");
	guessedNum = parseInt(form.value);
	console.log(guessedNum);

	if (guessedNum < 1 || guessedNum > 10) {
		console.log("Choose a number between 1 and 10");
		display.textContent = "Choose a number between 1 and 10!";
	} else if (guessedNum === num) {
		console.log("You guessed correctly!");
		setCorrect();
		resetFunc();
		score = 0;
		setScoreDisplay();
		congratsMessage();
	} else {
		score++;
		setScoreDisplay();

		if (guessedNum > num) {
			console.log(">");
			setHigh();
		} else {
			console.log("<");
			setLow();
		}
	}
};

let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (event) {
	event.preventDefault();
	display.textContent = "";
	checkFormInput();

	let form = document.getElementById("Form");
	form.value = "";
});
