const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {startTimer(10)});
startButton.addEventListener("click", function() {startQuiz()});
var questionTitle = document.getElementById("questionTitle");
var questionContainer = document.getElementById("questionContainer");
var validation = document.getElementById("validation");
var correct, incorrect
var questionsAsked, questionsRemaining

const answerButtonsElement = document.getElementById("answerButton");

var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

let allQuestions, activeQuestion

// Create timer
function startTimer(seconds) {

    // Set timer to value passed onClick
    let counter = seconds;

    // Timer
    var timeAllowed = setInterval(() => {
        console.log(counter);  

        // Decrement timer
        counter--;
        document.getElementById("time-remaining").innerHTML = counter + 1;

        // When counter reaches 0, stop counting down
        if (counter < 0) {
            document.getElementById("time-remaining").innerHTML = counter;
            clearInterval(timeAllowed);
            document.getElementById("time-remaining").innerHTML = "0";
            console.log("Time's up!");

            // Display final score 
            // finalScore();
        }

    }, 1000);

};

// Start Quiz
function startQuiz() {

    // Log start
    console.log("Quiz Started");

    // Set defaults
    correct = 0;
    incorrect = 0;
    questionsAsked = 0;
    activeQuestion = 0;
    
    // Get random question from quizQuestions
    allQuestions = quizQuestions.sort(() => Math.random() - .5);

    // Hide Start button
    startButton.style.display = "none";

    // Show question 1
    questionContainer.style.display = "block";

    // Increment question count
    questionsAsked++;

    // Ask next question
    getNextQuestion();
}; 

// Get next question
function getNextQuestion() {

    // Reset elements on screen 
    resetQuestion();

    // Show activeQuestion on screen
    showQuestion(allQuestions[activeQuestion]);

};

// Show a question on the screen
function showQuestion(question) {

    // Loop through Choices from activeQuestion
    question.choices.forEach(choice => {
        
        // Set question Title to activeQuestion question
        questionTitle.textContent = quizQuestions[activeQuestion].question;

        // Create a new LI and place it in the questionContainer
        const choices = document.createElement("li");
        choices.innerHTML = choice.text;
        document.getElementById("questionContainer").appendChild(choices);
        
        // Listen for a click and use the Target ID to detemine if correct / incorrect
        choices.addEventListener("click", function(event) {

            // If its the correct answer
            if (event.target.textContent == quizQuestions[activeQuestion].answer) {

                // Increment the correct count
                correct++;

                // Show results below
                validation.textContent = "Correct! Current Score:" + correct + "/5";

                // Remove activeQuestion from available questions
                allQuestions.shift();
                console.log("QR: " + allQuestions.length);
                if (allQuestions.length == 0) {
                    finalScore();
                } else {
                    // Ask next question
                    getNextQuestion();
                };
            } 
            else if (event.target.textContent != quizQuestions[activeQuestion].answer) {

                // Show results below
                validation.textContent = "Incorrect! Current Score:" + correct + "/5";

                // Remove activeQuestion from available questions
                allQuestions.shift();
                console.log("QR: " + allQuestions.length);
                if (allQuestions.length == 0) {
                    finalScore();
                } else {
                    // Ask next question
                    getNextQuestion();
                };
        }

        });

    });
};
 
function finalScore() {
    questionTitle.textContent = "FINAL SCORE";
    validation.textContent = "";
    var newLine = "\r\n";
    var message = "Game Over!";
    message += newLine;
    message += "Final Score: " + correct + "/5";
    questionContainer.textContent = message;
    alert(message);
};

// Reset content
function resetQuestion() {
    questionContainer.textContent = "";
};

// Define questions and answers
const quizQuestions = [
    {
        question: "What is 2+2?",
        choices: [
           { text: "4" },
           { text: "9" },
           { text: "Null" },
           { text: "8" }
        ],
        answer: "4"
    },
    {
        question: "What is a Semantic element?",
        choices: [
           { text: "An element with color" },
           { text: "An element with meaning" },
           { text: "An element with the same width and height" },
           { text: "An element with no background" }
        ],
        answer: "An element with meaning"
    },
    {
        question: "Can you nest functions?",
        choices: [
           { text: "Yes" },
           { text: "No" }
        ],
        answer: "Yes"
    },
    {
        question: "What is JSON?",
        choices: [
           { text: "The name of the person that invented JavaScript" },
           { text: "Just Sign On Null" },
           { text: "It doesn't mean anything" },
           { text: "JavaScript Object Notation" }
        ],
        answer: "JavaScript Object Notation"
    },
    {
        question: "Where you can read more?",
        choices: [
           { text: "The Library" },
           { text: "Documentation" },
           { text: "Your room" },
           { text: "The back of your computer" }
        ],
        answer: "Documentation"
    }
    ]
