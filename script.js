const startButton = document.getElementById("startButton");
const rules = document.getElementById("rules");
const reTrytButton = document.getElementById("reTryButton");
const answerButtonsElement = document.getElementById("answerButton");
// Time is set here in startTimer
startButton.addEventListener("click", function() {startTimer(30)});
startButton.addEventListener("click", function() {startQuiz()});
reTrytButton.addEventListener("click", function() {reTryQuiz()});
var questionTitle = document.getElementById("questionTitle");
var questionContainer = document.getElementById("questionContainer");
var validation = document.getElementById("validation");
var correct;
let counter;
var questionsAsked, questionsRemaining;
var allHighScores = [];
var currentHighScore = localStorage.getItem("highScore");
let allQuestions, activeQuestion;

// Create timer
function startTimer(seconds) {

    // Set timer to value passed above
    counter = seconds;

    // Timer
    var timeAllowed = setInterval(() => {
        // console.log(counter);

        // Decrement timer
        counter--;
        document.getElementById("time-remaining").innerHTML = counter + 1;

        // When counter reaches 0 or all questions have been asked, stop counting down
        if (counter < 0) {
            document.getElementById("time-remaining").innerHTML = counter;
            clearInterval(timeAllowed);
            document.getElementById("time-remaining").innerHTML = "0";
            finalScore("Time's up!");
        } else if (allQuestions.length == 0) {
            clearInterval(timeAllowed);
        }

    }, 1000);

};

// Start Quiz
function startQuiz() {
    
    // Set defaults
    correct = 0;
    questionsAsked = 0;
    activeQuestion = 0;
    
    // Get random question from quizQuestions
    allQuestions = quizQuestions.sort(() => Math.random() - .5);

    // Hide Start button and rules
    startButton.style.display = "none";
    rules.style.display = "none";

     // Show content
     document.getElementById("content").style.display = "block";

    // Show question 1
    questionContainer.style.display = "block";

    // Increment question count
    questionsAsked++;

    // Ask next question
    getNextQuestion();
}; 

// reTry Quiz (reloads page)
function reTryQuiz() {
    location.reload();
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
        
        // Listen for a click and use the Target ID to detemine if correct
        choices.addEventListener("click", function(event) {

            // If its the correct answer
            if (event.target.textContent == quizQuestions[activeQuestion].answer) {

                // Increment the correct count
                correct++;

                // Show results below
                validation.textContent = "Correct! Current Score: " + correct + "/5";

                // Remove activeQuestion from available questions
                allQuestions.shift();
                if (allQuestions.length == 0) {
                    finalScore("Quiz Complete!");
                } else {

                    // Ask next question
                    getNextQuestion();
                };
            } 
            else if (event.target.textContent != quizQuestions[activeQuestion].answer) {
                
                // Decrement time 5 seconds
                counter+=-5;

                // Show results below
                validation.textContent = "Incorrect! Current Score: " + correct + "/5";

                // Remove activeQuestion from available questions
                allQuestions.shift();

                // If there are no more quesitons left
                if (allQuestions.length == 0) {
                    finalScore("Quiz Complete!");
                } else {

                    // Ask next question
                    getNextQuestion();
                };
        }
        });

    });
};
 
// Show final score
function finalScore(message) {

    // Show startQuiz button
    reTryButton.style.display = "block";

    // When the button is clicked
    reTryButton.addEventListener("click", function() {reTryQuiz()});

    // Set Final Score header
    questionTitle.textContent = "FINAL SCORE";

    // Clear validation
    validation.textContent = "";

    // Set message
    message += " Final Score: " + correct + "/5";
    questionContainer.textContent = message;
    alert(message);

    // Set high score to local storage
    if (correct > currentHighScore) {
        localStorage.setItem("highScore", correct);
    };
    
    // Handle high scores
    // Create new elements
    var lineBreak = document.createElement("br");
    var nameInput = document.createElement("input");
    var submitButton = document.createElement("submitButton");
    var highScoreContainer = document.createElement("highScoreContainer");
    var submitHighScoreContainer = document.createElement("submitHighScoreContainer");


    // Set attributes
    submitHighScoreContainer.innerHTML =`<section id="submitHighScoreContainer"><p><strong>Add your initials to track your score!</strong></p></section>`
    nameInput.type = "text";
    nameInput.value = "";
    submitButton.innerHTML = "SUBMIT";
    submitButton.setAttribute("id", "submitButton");
    highScoreContainer.style.display = "none";
    highScoreContainer.innerHTML = `
    
    <h1 id="highScoreHeader" style="display:">ALL SCORES</h1>
        <section id="highScores">
            <ul id="scores">
            </ul>
        </section>

    `;

    // Add new elements to the screen
    document.getElementById("questionContainer").appendChild(submitHighScoreContainer);
    document.getElementById("submitHighScoreContainer").appendChild(lineBreak);
    document.getElementById("submitHighScoreContainer").appendChild(nameInput);
    document.getElementById("submitHighScoreContainer").appendChild(submitButton);
    document.getElementById("questionContainer").appendChild(highScoreContainer);
    
    // When the submit button is clicked
    submitButton.addEventListener("click", function () {
        
        // Update attributes
        submitHighScoreContainer.hidden = true;
        submitButton.hidden = true;
        nameInput.hidden = true;
        highScoreContainer.style.display = "block";

        // Get High Scores from local storage and create high score array
        var currentHighScores = [];
        if (localStorage.getItem("allHighScores") != null) {
            currentHighScores = JSON.parse(localStorage.getItem('allHighScores'));
        };

        // Add name and score to the New High Score object
        var newHighScore = { "name": nameInput.value, "score": correct };

        // Add the New High Score to AllHighScores
        currentHighScores.push(newHighScore);

        // Sort high scores by score (this isn't currently working, muting for now)
        // currentHighScores = currentHighScores.sort(function (a, b) {
        //     return a[1] - b[1];
        // });

        // console.log(currentHighScores);

        if (currentHighScores) {

            // Loop through current high scores 
            currentHighScores.forEach(score => {

            // Create a new LI and place it in the questionContainer
            const scoreItem = document.createElement("li");
            scoreItem.setAttribute("id", "scoreLi")
            scoreItem.innerHTML = score.name + "<span> got </span>" + score.score + "<span> correct.</span>";
            document.getElementById("questionContainer").appendChild(scoreItem);
        });
            // Update the highScores array and set to local storage
            var updatedHighScores = [...allHighScores, ...currentHighScores];
            localStorage.setItem("allHighScores", JSON.stringify(updatedHighScores));
        } else {
            var updatedHighScores = [...allHighScores];
            localStorage.setItem("allHighScores", JSON.stringify(updatedHighScores));
        };

    })
    
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
        question: "What is Syntax?",
        choices: [
           { text: "Grammar for code" },
           { text: "A method of multiplication for variables" },
           { text: "When something is without tax" },
           { text: "None of these options" }
        ],
        answer: "Grammar for code"
    }
    ]
