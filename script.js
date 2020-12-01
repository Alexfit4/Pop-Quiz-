let timeEl = document.querySelector(".time");
var buttonEl = document.getElementById("button");
let secondsLeft = 61;

buttonEl.addEventListener("click", function () {
	let timerInterval = setInterval(function () {
		secondsLeft--;
		timeEl.textContent = "Time: " + secondsLeft;

		if (secondsLeft === 0) {
			clearInterval(timerInterval);
		}
	}, 1000);

	document.querySelector(".section1").setAttribute("class", "hide");

	document.querySelector("#section2").setAttribute("class", "show");

	// function sendMessage() {
	// 	timeEl.textContent = " ";

	// 	let imgEl = document.createElement("img");

	// 	imgEl.setAttribute("src", "images/image_1.jpg");
	// 	mainEl.appendChild(imgEl);
	// }
});

//----Section 2 --- //

let secTwo = document.querySelector("#section2");

document.querySelector("#section2").addEventListener("click", function () {
	//------- Hide DIV----------//

	secTwo.setAttribute("class", "hide");
	document.querySelector("#section3").setAttribute("class", "show");
});
