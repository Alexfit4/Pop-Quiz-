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
});
