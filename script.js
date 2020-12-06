let startQuiz = document.querySelector(".startBtn");
let instructionContainer = document.querySelector("#instructionContainer");
let questionContainer = document.querySelector("#questionContainer");
let resultContainer = document.querySelector("#resultContainer");
let remainingTime = 60;
let timerID;
let score = 0;
let currentQuestion = -1;

const questions = [
	{
		question: "What is a HTML header used for?",
		choices: [
			"Titles or subtitles that you want to display on a webpage.",
			"Text at the bottom of the page.",
			"Styles your HTML",
			"All the above",
		],
		correctAnswer: 0,
	},
	{
		question: "What is the use for CSS?",
		choices: [
			"To clean your page.",
			"To open your website on a browser.",
			"Lets you style your website.",
			"Lets your website be responsive.",
		],
		correctAnswer: 2,
	},
	{
		question: "Which of the following is correct about features of JavaScript?",
		choices: [
			"JavaScript variable names must begin with a letter or the underscore character.",
			"JavaScript variable names are case sensitive.",
			"Both of the above.",
			"None of the above.",
		],
		correctAnswer: 2,
	},
	{
		question:
			"Which built-in method removes the last element from an array and returns that element?",
		choices: ["last()", "get()", "pop()", "None of the above"],
		correctAnswer: 2,
	},
	{
		question:
			"Which built-in method returns the string representation of the number's value?",
		choices: ["toValue()", "toNumber()", "toString()", "None of the above."],
		correctAnswer: 2,
	},
];
startQuiz.addEventListener("click", function () {
	instructionContainer.style.display = "none";
	questionContainer.style.display = "block";
	showNextQuestion();
	startTimer();
});

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

function startTimer() {
	timerID = setInterval(updateTime, 1000);
}

function stopTimer() {
	clearInterval(timerID);
}

function checkAnswer() {
	let answers = document.getElementsByName("question");
	let selectedAnswer;

	for (let i = 0; i < answers.length; i++) {
		if (answers[i].checked) {
			selectedAnswer = i;
		}
	}

	if (selectedAnswer == questions[currentQuestion].correctAnswer) {
		alert("correct");
		score++;
	} else {
		alert("wrong");
	}

	showNextQuestion();
}

questionContainer
	.querySelector("button")
	.addEventListener("click", checkAnswer);

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

function showResults() {
	questionContainer.style.display = "none";
	resultContainer.style.display = "block";

	document.querySelector("#totalScore").innerHTML = "You scored " + score;
}
