//1. state. needs A. questions themselves (store as objects in an array). B. the choices and the correct answer C. what question they're on -->array.length
//D. what questions they have gotten correct ex. [true, false, true, true, true]
//questions [0, 1, 2, 3, 4] page [titlepage, 0, 1, 2, 3, 4, finalpage]
var state = {
	questions: [
		{	title: "who is big papi?",
		correctAnswer: 2 //var anything = correctAnswer wrongchoices.A unsure if wrongChoices.correctAnswer would work
		choices: ["Nomar", "guy", "David Ortiz", "asldjfklj"] //wrongchoices.forEAch()
		}, 
		{SECOND QUESTION}]
	qCorrect: 
}

//2. functions that modify the state or rely on information from state 
//A. if user gets true or false, push that into qCorrect. We USE qCorrect for determining what question they're on B. getNumCorrect
//C. getQNum = arraylength. 

//3. functions that render based on the state A. landing page B. questions and choices C. number correct D. final page
//4. event listeners

// Document ready
// renderLandingPage()
// handleStartQuiz()