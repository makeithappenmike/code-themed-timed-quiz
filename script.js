const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {startTimer(3)});
startButton.addEventListener("click", function() {startQuiz()});
var questionTitle = document.getElementById("questionTitle");
var questionContainer = document.getElementById("questionContainer");
var validation = document.getElementById("validation");
var correct, incorrect
var questionsAsked, questionsRemaining

// const questionElement = document.getElementById("question");
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
        if (counter < 0 ) {
            document.getElementById("time-remaining").innerHTML = counter;
            clearInterval(timeAllowed);
            document.getElementById("time-remaining").innerHTML = "0";
            console.log("Time's up!");
        }
    

    }, 1000);

};

// Start Quiz
function startQuiz() {

    console.log("Quiz Started");
    correct = 0;
    incorrect = 0;
    questionsAsked = 0;
    questionsRemaining = 5;
    
    // Get random question
    allQuestions = quizQuestions.sort(() => Math.random() - .5);
    activeQuestion = 0;
    startButton.style.display = "none";
    // Show options on screen
    questionContainer.style.display = "block";
    questionsAsked++;
    questionsRemaining--;
    // console.log("Questions Asked: " + questionsAsked);
    // console.log("Questions Remaining: " + questionsRemaining);
    getNextQuestion();
}; 

function getNextQuestion() {
    resetQuestion();
    showQuestion(allQuestions[activeQuestion]);
    console.log("Questions Asked: " + questionsAsked);
    console.log("Questions Remaining: " + questionsRemaining);

};

function showQuestion(question) {

    question.choices.forEach(choice => {
        // console.log(quizQuestions[activeQuestion].question);
        // console.log(choice.text);
        questionTitle.textContent = quizQuestions[activeQuestion].question;
        // console.log("Answer:", quizQuestions[activeQuestion].answer);
        const choices = document.createElement("li");
        choices.innerHTML = choice.text;
        document.getElementById("questionContainer").appendChild(choices);
        choices.addEventListener("click", function(event) {
            console.log("Clicked:", event.target.textContent);
            if (event.target.textContent == quizQuestions[activeQuestion].answer) {
                console.log("correct");
                correct++;
                console.log("Total Correct:", correct);
                validation.textContent = "Correct! Total Correct:" + correct;
                questionsAsked++;
                questionsRemaining--;
                activeQuestion++;
                console.log("AQ " + activeQuestion);
                console.log(quizQuestions);
                getNextQuestion();
            } else if (event.target.textContent != quizQuestions[activeQuestion].answer) {
                console.log("Incorrect");
                incorrect++;
                console.log("Total Incorrect:", incorrect);
                validation.textContent = "Incorrect! Total Correct:" + correct + "Questions Remaining:" + questionsRemaining;
                questionsAsked++;
                 questionsRemaining--;
                activeQuestion++;
                console.log("AQ " + activeQuestion);
                getNextQuestion();
        }
        });

    });
};

function chooseAnswer(e) {
    
};

function resetQuestion() {
    questionContainer.textContent = "";
};

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
