const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {startTimer(3)});
startButton.addEventListener("click", function() {startQuiz()});
var questionTitle = document.getElementById("questionTitle");
var questionContainer = document.getElementById("questionContainer");
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
    // Get random question
    allQuestions = quizQuestions.sort(() => Math.random() - .5);
    activeQuestion = 0;
    startButton.style.display = "none";
    questionTitle.textContent = "Question 1"
    // Show options on screen
    questionContainer.style.display = "block";
    getNextQuestion();

};

function getNextQuestion() {
    showQuestion(allQuestions[activeQuestion]);
};

function showQuestion(question) {
    questionTitle.textContent = question.question;
    question.choices.forEach(choice => {
        console.log(choice.text);
        option = document.createElement("li");
        option.textContent = choice.text;

    });
};

function chooseAnswer() {

};

const quizQuestions = [
    {
        question: "Question 1",
        choices: [
           { text: "Q1 Answer1", correct: false },
           { text: "Q1 Answer2", correct: false },
           { text: "Q1 Answer3", correct: true },
           { text: "Q1 Answer4", correct: false }
        ]
    },
    {
        question: "Question 2",
        choices: [
           { text: "Q2 Answer1", correct: false },
           { text: "Q2 Answer2", correct: false },
           { text: "Q2 Answer3", correct: true },
           { text: "Q2 Answer4", correct: false }
        ]
    },
    {
        question: "Question 3",
        choices: [
           { text: "Q3 Answer1", correct: false },
           { text: "Q3 Answer2", correct: false },
           { text: "Q3 Answer3", correct: true },
           { text: "Q3 Answer4", correct: false }
        ]
    },
    {
        question: "Question 4",
        choices: [
           { text: "Q4 Answer1", correct: false },
           { text: "Q4 Answer2", correct: false },
           { text: "Q4 Answer3", correct: true },
           { text: "Q4 Answer4", correct: false }
        ]
    },
    {
        question: "Question 5",
        choices: [
           { text: "Q5 Answer1", correct: false },
           { text: "Q5 Answer2", correct: false },
           { text: "Q5 Answer3", correct: true },
           { text: "Q5 Answer4", correct: false }
        ]
    }
    ]


// function askQuestions() {

//     // Start questions
//     var startButton = document.getElementById("startButton");
    // var questionTitle = document.getElementById("questionTitle");
    // var questionContainer = document.getElementById("questionContainer");
//     // var questionNumber = 0;
//     // var content = document.getElementById("content");
//     // var content1 = document.getElementById("content1");
//     // var choice1 = document.getElementById("choice1");
//     // var choice2 = document.getElementById("choice2");
//     // var choice3 = document.getElementById("choice3");
//     // var choice4 = document.getElementById("choice4");
//     // var answer1 = "";
//     // var answer2 = "";
//     // var answer3 = "";
//     // var answer4 = "";
//     // var answer5 = "";
//     // var options = [];
//     // var option1 = "";
//     // var option2 = "";
//     // var option3 = "";
//     // var option4 = "";

//     // // Write funciton to update options
//     // function updateOptions(activeQuestion, activeAnswers) {
        
//     //     // Update question title
//     //     questionTitle.textContent = activeQuestion;

//     //     // Update options
//     //     options.push(activeAnswers);

//     //     // Loops through options and update screen
//     //     options.forEach(function(option) {
//     //         option1 = option[1];
//     //         option2 = option[2];
//     //         option3 = option[3];
//     //         option4 = option[4];
//     //     });
        
//     //     // Set choices to available options
//     //     choice1.textContent = option1;
//     //     choice2.textContent = option2;
//     //     choice3.textContent = option3;
//     //     choice4.textContent = option4;
//     // };

//     // Create questions array
    
    // const quizQuestions = [
    //     {
    //         question: "Question 1",
    //         choices: [
    //            { text: "Q1 Answer1", correct: false },
    //            { text: "Q1 Answer2", correct: false },
    //            { text: "Q1 Answer3", correct: true },
    //            { text: "Q1 Answer4", correct: false }
    //         ]
    //     },
    //     {
    //         question: "Question 2",
    //         choices: [
    //            { text: "Q2 Answer1", correct: false },
    //            { text: "Q2 Answer2", correct: false },
    //            { text: "Q2 Answer3", correct: true },
    //            { text: "Q2 Answer4", correct: false }
    //         ]
    //     },
    //     {
    //         question: "Question 3",
    //         choices: [
    //            { text: "Q3 Answer1", correct: false },
    //            { text: "Q3 Answer2", correct: false },
    //            { text: "Q3 Answer3", correct: true },
    //            { text: "Q3 Answer4", correct: false }
    //         ]
    //     },
    //     {
    //         question: "Question 4",
    //         choices: [
    //            { text: "Q4 Answer1", correct: false },
    //            { text: "Q4 Answer2", correct: false },
    //            { text: "Q4 Answer3", correct: true },
    //            { text: "Q4 Answer4", correct: false }
    //         ]
    //     },
    //     {
    //         question: "Question 5",
    //         choices: [
    //            { text: "Q5 Answer1", correct: false },
    //            { text: "Q5 Answer2", correct: false },
    //            { text: "Q5 Answer3", correct: true },
    //            { text: "Q5 Answer4", correct: false }
    //         ]
    //     }
    //     ]
    //  };

//     // // Define 
//     // var firstQuestion = quizQuestions[0].question;
//     // var secondQuestion = quizQuestions[1].question;
//     // var thirdQuestion = quizQuestions[2].question;
//     // var fourthQuestion = quizQuestions[3].question;
//     // var fifthQuestion = quizQuestions[4].question;
//     // var firstChoices = quizQuestions[0].choices;
//     // var secondChoices = quizQuestions[1].choices;
//     // var thirdChoices = quizQuestions[2].choices;
//     // var fourthChoices = quizQuestions[3].choices;
//     // var fifthChoices = quizQuestions[4].choices;

//     // When start button is clicked, show question 1
//     startButton.addEventListener("click", function() {

//         // Quiz Started
//         console.log("Quiz Started");
        
//         // Hide the start button
//         startButton.style.display = "none";

//         // Show options on screen
//         questionContainer.style.display = "block";

//         // Update stuff
//         updateOptions(firstQuestion, firstChoices);

//         // // Update ID
//         // content.setAttribute("id", "content1");

//         console.log(questionTitle.textContent);

//         // questionNumber += 1;
//         // console.log("Question: #", questionNumber);

//         content.setAttribute("id", "content1");

//     });

//     // // When an answer in question 1 is selected, show question 2
//     // content1.addEventListener("click", function(event) {

//     //     console.log(event.currentTarget.id);
//     //     // console.log("event:", event.target.id);

//     //     if (event.currentTarget.id === "content1") {

//     //     // Update stuff
//     //     updateOptions(secondQuestion, secondChoices);
    
//     //     };

//     //     // content.setAttribute("id", "content2");

//     //     console.log("content set to 2");

//     //     console.log(event.currentTarget.id);

        
//     //     if (event.currentTarget.id === "content2") {

//     //         // Update stuff
//     //         updateOptions(thirdQuestion, thirdChoices);
        
//     //     }; 
    
//     // });