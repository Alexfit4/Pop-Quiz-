"use scrict";
let timeEl = document.querySelector(".time");
let mainEl = document.getElementById("main");
let btnEL = document.querySelector(".myButton");
let centerTextEl = document.querySelector(".center-text");
let divClass = document.querySelector("#TestsDiv");
let secondsLeft = 61;

let secondQuestionEl = document.querySelector(".secondQuestion");

divClass.setAttribute("class", "hide");

document.querySelector(".myButton").addEventListener("click", function () {
	// let T = document.getElementById("TestsDiv");
	// T.style.display = "block"; // <-- Set it to block

	let timerInterval = setInterval(function () {
		secondsLeft--;
		timeEl.textContent = "Time: " + secondsLeft;

		if (secondsLeft === 0) {
			clearInterval(timerInterval);
		}
	}, 1000);
	//------- Hide DIV----------//
	divClass.setAttribute("class", "show");
	centerTextEl.setAttribute("class", "hide");

	//----------------------------------------------------------//

	// function sendMessage() {
	// 	timeEl.textContent = " ";

	// 	let imgEl = document.createElement("img");

	// 	imgEl.setAttribute("src", "images/image_1.jpg");
	// 	mainEl.appendChild(imgEl);
	// }
});
