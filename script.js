let timeEl = document.querySelector(".time");
var buttonEl = document.getElementById("button");
let secondsLeft = 61;
let correctAnswer = document.querySelector("#correct");
let scoreEl = document.getElementById("score");
let scoreLeft = 0;

let theCorrectAnswer = (correctAnswer.onclick = function () {
	correctAnswer.style.color = "green";
	// scoreLeft++;
	// scoreEl.textContent = "Score: " + scoreLeft;
});

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

//----Section 2 --- //

let secTwo = document.querySelector("#section2");

let submitTwo = document
	.querySelector("#button2")
	.addEventListener("click", function () {
		
			scoreLeft++;
			scoreEl.textContent = "Score: " + scoreLeft;
		
		//------- Hide DIV----------//

		secTwo.setAttribute("class", "hide");
		document.querySelector("#section3").setAttribute("class", "show");
	});
console.log(submitTwo);
console.log(theCorrectAnswer);

// ----------------------------------------///
//--- TESTING AREA ---///

// console.log(questions);

// function getQuestion() {
// 	console.log("We are here!");

// 	var h1El = document.getElementById("question");
// 	h1El.textContent = questions[0].question;
// 	var divChoice = document.getElementById("divChoice");

// 	divChoice.innerHTML = "";

// 	var test = document.getElementById("testing");

//divChoice.textContent = questions[0].choices;

// for (let i = 0; i < questions[0].choices.length; i++) {
// 	var button = document.createElement('button');
// 	button.textContent = questions[0].choices[i]
// 	divChoice.append(button);

// 	button.onclick = checkAnswer

// var divEl = document.createElement("div");
// divEl.setAttribute("class", "form-check");
// var input = document.createElement("input");
// input.setAttribute("class", "form-check-input");
// input.setAttribute("type", "radio");
// input.setAttribute("value", questions[0].choices[i]);

// var label = document.createElement("label");
// label.setAttribute("class", "form-check-label");
// label.textContent = questions[0].choices[i];
// input.append(label);
// divEl.append(input);

// console.log("divEl", divEl);
// divChoice.append(divEl);
// test.append(divEl);
// }
// }

// -------------------------------------------------------- //
// getQuestion();

// function sendMessage() {
// 	timeEl.textContent = " ";

// 	let imgEl = document.createElement("img");

// 	imgEl.setAttribute("src", "images/image_1.jpg");
// 	mainEl.appendChild(imgEl);
// }

// ----------------------------------------------------------//
// let questions = [
// 	{
// 		question: "What is a HTML header used for?",
// 		choices: [
// 			"Titles or subtitles that you want to display on a webpage.",
// 			"Text at the bottom of the page.",
// 			"Styles your HTML",
// 			"All the above",
// 		],
// 		correctAnswer: "Titles or subtitles that you want to display on a webpage.",
// 	},
// 	{
// 		question: "What is the use for CSS?",
// 		choices: [
// 			"To clean your page.",
// 			"To open your website on a browser.",
// 			"Lets you style your website.",
// 			"Lets your website be responsive.",
// 		],
// 		correctAnswer: "Lets you style your website.",
// 	},
// 	{
// 		question: "What is a HTML header used for?",
// 		choices: [
// 			"Titles or subtitles that you want to display on a webpage.",
// 			"Text at the bottom of the page.",
// 			"Styles your HTML",
// 			"All the above",
// 		],
// 		correctAnswer: "Titles or subtitles that you want to display on a webpage.",
// 	},
// ];
