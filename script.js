const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {startTimer(3)});
startButton.addEventListener("click", function() {startQuiz()});
var questionTitle = document.getElementById("questionTitle");
var questionContainer = document.getElementById("questionContainer");
var validation = document.getElementById("validation");
var correct, incorrect

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
    // Get random question
    allQuestions = quizQuestions.sort(() => Math.random() - .5);
    activeQuestion = 0;
    startButton.style.display = "none";
    // Show options on screen
    questionContainer.style.display = "block";
    getNextQuestion();

};

function getNextQuestion() {
    resetQuestion();
    showQuestion(allQuestions[activeQuestion]);
};

function showQuestion(question) {

    question.choices.forEach(choice => {
        // console.log(quizQuestions[activeQuestion].question);
        console.log(choice.text);
        questionTitle.textContent = quizQuestions[activeQuestion].question;
        console.log("Answer:", quizQuestions[activeQuestion].answer);
        const choices = document.createElement("li");
        choices.innerHTML = choice.text;
        document.getElementById("questionContainer").appendChild(choices);
        choices.addEventListener("click", function(event) {
            console.log("Clicked:", event.target.textContent);
            if (event.target.textContent == quizQuestions[activeQuestion].answer) {
                console.log("correct");
                correct++
                console.log("Total Correct:", correct);
                validation.textContent = "Correct";
                activeQuestion++;
                getNextQuestion();
            } else {
                console.log("Incorrect");
                incorrect++
                console.log("Total Incorrect:", incorrect);
                validation.textContent = "Incorrect";
                activeQuestion++;
                getNextQuestion();
        };
        });

        // choices.addEventListener("click", chooseAnswer);
    });
};

function chooseAnswer(e) {
    
};

function resetQuestion() {
    questionContainer.textContent = "";
};

const quizQuestions = [
    {
        question: "Question 1",
        choices: [
           { text: "Q1 Answer1", correct: false },
           { text: "Q1 Answer2", correct: false },
           { text: "Q1 Answer3", correct: true },
           { text: "Q1 Answer4", correct: false }
        ],
        answer: "Q1 Answer3"
    },
    {
        question: "Question 2",
        choices: [
           { text: "Q2 Answer1", correct: false },
           { text: "Q2 Answer2", correct: false },
           { text: "Q2 Answer3", correct: true },
           { text: "Q2 Answer4", correct: false }
        ],
        answer: "Q2 Answer3"
    },
    {
        question: "Question 3",
        choices: [
           { text: "Q3 Answer1", correct: false },
           { text: "Q3 Answer2", correct: false },
           { text: "Q3 Answer3", correct: true },
           { text: "Q3 Answer4", correct: false }
        ],
        answer: "Q3 Answer3"
    },
    {
        question: "Question 4",
        choices: [
           { text: "Q4 Answer1", correct: false },
           { text: "Q4 Answer2", correct: false },
           { text: "Q4 Answer3", correct: true },
           { text: "Q4 Answer4", correct: false }
        ],
        answer: "Q4 Answer3"
    },
    {
        question: "Question 5",
        choices: [
           { text: "Q5 Answer1", correct: false },
           { text: "Q5 Answer2", correct: false },
           { text: "Q5 Answer3", correct: true },
           { text: "Q5 Answer4", correct: false }
        ],
        answer: "Q5 Answer3"
    }
    ]
