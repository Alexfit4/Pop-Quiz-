// Variables //

let startQuiz = document.querySelector(".startBtn");
let instructionContainer = document.querySelector("#instructionContainer");
let questionContainer = document.querySelector("#questionContainer");
let resultContainer = document.querySelector("#resultContainer");
let remainingTime = 60;
let timerID;
let score = 0;
let currentQuestion = -1;

// My array with the questions and answers //
const questions = [
	{
		question: "1) What is a HTML header used for?",
		choices: [
			" Titles or subtitles that you want to display on a webpage.",
			" Text at the bottom of the page.",
			" Styles your HTML",
			" All the above",
		],
		correctAnswer: 0,
	},
	{
		question: "2) What is the use for CSS?",
		choices: [
			" To clean your page.",
			" To open your website on a browser.",
			" Lets you style your website.",
			" Lets your website be responsive.",
		],
		correctAnswer: 2,
	},
	{
		question:
			"3) Which of the following is correct about features of JavaScript?",
		choices: [
			" JavaScript variable names must begin with a letter or the underscore character.",
			" JavaScript variable names are case sensitive.",
			" Both of the above.",
			" None of the above.",
		],
		correctAnswer: 2,
	},
	{
		question:
			"4) Which built-in method removes the last element from an array and returns that element?",
		choices: [" last()", " get()", " pop()", " None of the above"],
		correctAnswer: 2,
	},
	{
		question:
			"5) Which built-in method returns the string representation of the number's value?",
		choices: [
			" toValue()",
			" toNumber()",
			" toString()",
			" None of the above.",
		],
		correctAnswer: 2,
	},
];

// When user clicks "CLICK HERE TO START" quiz timer starts and first line of questions begin. //
startQuiz.addEventListener("click", function () {
	instructionContainer.style.display = "none";
	questionContainer.style.display = "block";
	showNextQuestion();
	startTimer();
});

// function to update time every second, and when time is up it alerts the user the quiz is over and show their results. //
function updateTime() {
	remainingTime--;
	document.querySelector(".time").innerHTML = "Time: " + remainingTime;
	if (remainingTime <= 0) {
		stopTimer();
		alert("Time's up!");
		showResults();
	} else {
	}
}

// Function to start the timer. //
function startTimer() {
	timerID = setInterval(updateTime, 1000);
}

// funtion to stop the timer
function stopTimer() {
	clearInterval(timerID);
}

// function that checks the answer to each question and depending if the user got the answer right or wrong they are alerted. If the user is wrong 10 seconds are removed from there remaining time. Then after they submit the question the next line of questions show up. //
function checkAnswer() {
	let answers = document.getElementsByName("question");
	let selectedAnswer;

	for (let i = 0; i < answers.length; i++) {
		if (answers[i].checked) {
			selectedAnswer = i;
		}
	}

	if (selectedAnswer == questions[currentQuestion].correctAnswer) {
		alert("Correct!");
		score++;
	} else {
		alert("Wrong");
		remainingTime = remainingTime - 10;
	}

	showNextQuestion();
}

questionContainer
	.querySelector("button")
	.addEventListener("click", checkAnswer);

// Function showing the next question and when there arent anymore questions the timer stops and the results are shown. //
function showNextQuestion() {
	let question = questions[(currentQuestion += 1)];
	let answers = [];
	if (!question) {
		stopTimer();
		return showResults();
	}

	questionContainer.querySelector("h1").innerHTML = question.question;

	// for each question...
	for (let i = 0; i < question.choices.length; i++) {
		//add an html radio button
		answers.push(
			"<label>" +
				'<input type="radio" name="question' +
				'" value="' +
				i +
				'">' +
				(i + 1) +
				": " +
				question.choices[i] +
				"</label>"
		);
	}

	questionContainer.querySelector("#divChoice").innerHTML = answers.join(
		"<br>"
	);
}

// Function showing the final score the user recieved. //

function showResults() {
	questionContainer.style.display = "none";
	resultContainer.style.display = "block";

	document.querySelector("#totalScore").innerHTML =
		"You scored " + score + " out of 5 points";
}
