//1. state. needs A. questions themselves (store as objects in an array). B. the choices and the correct answer C. what question they're on -->array.length
//D. what questions they have gotten correct ex. [true, false, true, true, true]
//questions [0, 1, 2, 3, 4] page [titlepage, 0, 1, 2, 3, 4, finalpage]
var state = {
	questions: [
		{
			title: "Who is Big Papi?",
			choices: ["Nomar Garciaparra", "David Ortiz", "Gregg Popovich", "Pedro Martinez"],
			correctAnswer: 1
		},
		{
			title: "How many Super Bowl rings does Bill Belichick have?",
			choices: ["6", "8", "7", "5"],
			correctAnswer: 2
		},
		{
			title: "Ted Williams...",
			choices: ["walked over twice as often as he struck out", "was a right-handed left fielder", "batted over .400 for his career", "fought in World War I"],
			correctAnswer: 0
		},
		{
			title: 'A local throws tea at you and screams, "Mahcus Smaht pahked his cah on Hahvahd Yahd!" Who is "Mahcus"?',
			choices: ["A Patriots offensive weapon", "A Celtics guard", "A Red Sox infielder", "Say again, but in English this time"],
			correctAnswer: 1
		},
		{
			title: "Tom Brady is...",
			choices: ["better than Peyton Manning", "the Greatest football player Of All Time", "always comfortable in his Uggs", "all of the above"],
			correctAnswer: 3
		}
	],
	qCorrect: []
};

//2. functions that modify the state or rely on information from state
//A. evaluateUserAnswer function
	// it should receive a number that corresponds to the id of user's choice
	// it compares that id to the number in correctAnswer
	// if equal push true, if not equal push false to qCorrect

function evaluateUserAnswer(state, answerReal, answerUser) {
	if (answerReal === answerUser) {
		state.qCorrect.push(true);
	}
	else {
		state.qCorrect.push(false);
	}
}

//B. getNumCorrect
	// loop through qCorrect array and use a counter to count the number of true
	// return counter
function getNumCorrect(state) {
	let totalCorrect = 0;
	for (let i = 0; i < state.qCorrect.length; i++) {
		if (state.qCorrect[i] === true) {
			totalCorrect++;
		}
	}
	return totalCorrect;
}

//C. getQNum = arraylength.
	// We use qCorrect for determining what question they're on

function getQNum (state) {
	return state.qCorrect.length;
}
//3. functions that render based on the state
//A. Render landing page function
	// use jQ hide method to hide buttons
	// Title div: Render html string with title of quiz and our 'start quiz' button
	// Use jQuery method html()

function renderLanding ($btnDiv, $titleDiv, $choices) {
	$btnDiv.hide();
	var quizTitleHtml = "<h1>How big of a Masshole are you (at least when it comes to sports)?</h1>";
	$titleDiv.html(quizTitleHtml);
	var buttonHtml = "<button class='btn-start'>Start!</button>";
	$choices.html(buttonHtml);
}

renderLanding($(".btn-container"), $(".js-question-title"), $(".js-choices"));



//B. Render questions and choices
  // Title div: The question and choices
	// var currentQuestion = state.questions[qCorrect.length];
	// Pass in the index position of the question we need to grab our current question object
	// Each choice is given an id equal to the value of it's index position
	// We could use array method map to iterate through the choices array for that question and pass 	each choice its ID
	// use jQuery html method and render the 'title' in the title div
	// use jQuery html method and render the choices in the choices div

function makeChoiceHtml (qObj) {
	return qObj["choices"].map(function(str, index){
		return `<div id='${index}'>${str}</div>`
	});
}

function renderQ (state, $btnDiv, $titleDiv, $choices) {
	var num = getQNum(state);
	var currentQObj = state.questions[num];
	var choiceArrayHtml = makeChoiceHtml(currentQObj);
	$btnDiv.show();
	$titleDiv.html(currentQObj.title);
	$choices.html(choiceArrayHtml);
}

renderQ(state, $(".btn-container"), $(".js-question-title"), $(".js-choices"));
//C. render numQuestions (render into top left div)
	// invoke getQNum function, save return value
	// input that value in the DOM (top left div) using jQuery html method
function numQuestions (state, $numCount) {
	var num = getQNum(state) + 1;
	var total = state.questions.length;
	$numCount.html(`You are on question ${num} out of ${total}.`)
}
numQuestions(state, $(".js-q-num-count"));


//D. render number correct (only render into the top middle div)
	// invoke getNumCorrect, save the return value
	// input that value into the DOM using jQuery html method

function correctQuestions (state, $numCorrect) {
	var num = getNumCorrect(state);
	$numCorrect.html(`You have gotten ${num} question(s) correct.`)
}
correctQuestions(state, $(".js-score-count"));
//E. render msgToUser function
	// Look at the last value in the qCorrect array.
	// If false, html string says "sorry you got it wrong"
	// If true, html string says "hurray you got it right"
	// use JQ html method to input into the DOM
function msgToUser (state, $selector) {
	var num = getQNum(state) - 1;
	var lastQ = state.qCorrect[num];
	if (lastQ === true) {
		$selector.html("You got it right!")
	}
	else {
		$selector.html("You disappoint me.")
	}
}

msgToUser(state, $(".js-right-wrong"));
//F. render final page function
	// Title div: Render html string with final score and our 'reset quiz' button
	// Use jQuery method html() to input this

function renderFinal ($btnDiv, $titleDiv) {
	$btnDiv.hide();
	var MH;
	var correct = getNumCorrect(state);
	if (correct < 2) {
		MH = "Move to New York already."
	}
	else if (correct < 5) {
		MH = "Keep drinking Dunkin' and sacrificing puppies to Coach Belichick and one day you'll get there."
	}
	else {
		MH = "You start to sweat when you have an opportunity to cut someone else off. You've engaged in fistfights with Yankees fans, Lakers fans, and hockey fans. You know Jets fans aren't worth your time. Great job!"
	}
	var quizTitleHtml = `<p>You got ${correct} question(s) right. ${MH}</p>`;
	$titleDiv.html(quizTitleHtml);
}
renderFinal($(".btn-next"), $(".js-question-title"));

//1. user clicks on button. 2. state is changed to reflect correct answer 3. re render page partially to convey whether they got question right or wrong 4. User clicks on next question button 5. we re-render whole page

//4. event listeners
//A. handleNextQuestion $btn
	// When user clicks on next question button
	// in our callback function we are going to invoke B, C and D functions
//B. handleUserAnswer
	// get the id of the element user clicks on using jQ traversal methods
	// Attach the event listener to the div in which choices are rendered.
	// use the event.currentTarget to identify the clicked on element
	// Use jQuery method attr('id') to get user's choice
	// invoke evaluateUserAnswer with user's choice
	// invoke render functions D and E
// C. handleReset function
	// wipe clear qCorrect
	// invoke render function A (landing page)
// D. handleStartQuiz
	// invoke the handleNextQuestion BUT instead of passing in the 'next question' button as the

// Document Ready...




/*
$("parentDiv").on("click", "childDiv", function(event) {
	let userChoice = $(event.currentTarget).attr("id");
});
*/
