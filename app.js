//1. state. needs A. questions themselves (store as objects in an array). B. the choices and the correct answer C. what question they're on -->array.length
//D. what questions they have gotten correct ex. [true, false, true, true, true]
//questions [0, 1, 2, 3, 4] page [titlepage, 0, 1, 2, 3, 4, finalpage]
var state = {
	questions: [
		{
		title: "who is big papi?",
		correctAnswer: 2 //var anything = correctAnswer wrongchoices.A unsure if wrongChoices.correctAnswer would work
		choices: ["Nomar", "guy", "David Ortiz", "asldjfklj"] //wrongchoices.forEAch()
		},
		{

		}
	]
	qCorrect: []
}

//2. functions that modify the state or rely on information from state
//A. evaluateUserAnswer function
	// it should receive a number that corresponds to the id of user's choice
	// it compares that id to the number in correctAnswer
	// if equal push true, if not equal push false to qCorrect
//B. getNumCorrect
	// loop through qCorrect array and use a counter to count the number of true
	// return counter
//C. getQNum = arraylength.
	// We use qCorrect for determining what question they're on

//3. functions that render based on the state
//A. Render landing page function
	// use jQ hide method to hide buttons
	// Title div: Render html string with title of quiz and our 'start quiz' button
	// Use jQuery method html()
//B. Render questions and choices
  // Title div: The question and choices
	// var currentQuestion = state.questions[qCorrect.length];
	// Pass in the index position of the question we need to grab our current question object
	// Each choice is given an id equal to the value of it's index position
	// We could use array method map to iterate through the choices array for that question and pass 	each choice its ID
	// use jQuery html method and render the 'title' in the title div
	// use jQuery html method and render the choices in the choices div
//C. render numQuestions (render into top left div)
	// invoke getQNum function, save return value
	// input that value in the DOM (top left div) using jQuery html method
//D. render number correct (only render into the top middle div)
	// invoke getNumCorrect, save the return value
	// input that value into the DOM using jQuery html method
//E. render msgToUser function
	// Look at the last value in the qCorrect array.
	// If false, html string says "sorry you got it wrong"
	// If true, html string says "hurray you got it right"
	// use JQ html method to input into the DOM
//F. render final page function
	// Title div: Render html string with final score and our 'reset quiz' button
	// Use jQuery method html() to input this

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
