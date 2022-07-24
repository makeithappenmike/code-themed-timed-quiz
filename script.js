function askQuestions() {

    // Start questions
    var startButton = document.getElementById("startButton");
    var questionTitle = document.getElementById("questionTitle");
    var questionContainer = document.getElementById("questionContainer");
    var choice1 = document.getElementById("choice1");
    var choice2 = document.getElementById("choice2");
    var choice3 = document.getElementById("choice3");
    var choice4 = document.getElementById("choice4");
    var answer1 = "";
    var answer2 = "";
    var answer3 = "";
    var answer4 = "";
    var answer5 = "";
    var options = [];
    var option1 = "";
    var option2 = "";
    var option3 = "";
    var option4 = "";

    const quizQuestions = [
        {
            question: "Question 1",
            choices: {
                1: "Q1 Answer1",
                2: "Q1 Answer2",
                3: "Q1 Answer3",
                4: "Q1 Answer4",
            },
            correctAnswer: "3"
        },
        {
            question: "Question 2",
            choices: {
                1: "Q2 Answer1",
                2: "Q2 Answer2",
                3: "Q2 Answer3",
                4: "Q2 Answer4",
            },
            correctAnswer: "2"
        },
        {
            question: "Question 3",
            choices: {
                1: "Q3 Answer1",
                2: "Q3 Answer2",
                3: "Q3 Answer3",
                4: "Q3 Answer4",
            },
            correctAnswer: "4"
        },
        {
            question: "Question 4",
            choices: {
                1: "Q4 Answer1",
                2: "Q4 Answer2",
                3: "Q4 Answer3",
                4: "Q4 Answer4",
            },
            correctAnswer: "1"
        },
        {
            question: "Question 5",
            choices: {
                1: "Q5 Answer1",
                2: "Q5 Answer2",
                3: "Q5 Answer3",
                4: "Q5 Answer4",
            },
            correctAnswer: "3"
        },
    ];

    var firstQuestion = quizQuestions[0].question;
    var secondQuestion = quizQuestions[1].question;
    var thirdQuestion = quizQuestions[2].question;
    var fourthQuestion = quizQuestions[3].question;
    var fifthQuestion = quizQuestions[4].question;
    var firstChoices = quizQuestions[0].choices;
    var secondChoices = quizQuestions[1].choices;
    var thirdChoices = quizQuestions[2].choices;
    var fourthChoices = quizQuestions[3].choices;
    var fifthChoices = quizQuestions[4].choices;

    console.log(firstQuestion);
    console.log(firstChoices);
    
    // When start button is clicked, show question 1
    startButton.addEventListener("click", function() {
        
        // Hide the start button
        startButton.style.display = "none";

        // Update question title
        questionTitle.textContent = firstQuestion;

        options.push(firstChoices);
        // console.log(options);
        options.forEach(function(option) {
            option1 = option[1];
            option2 = option[2];
            option3 = option[3];
            option4 = option[4];
            console.log(option1);
            console.log(option2);
            console.log(option3);
            console.log(option4);
        });

        //
        questionContainer.style.display = "block";
        choice1.textContent = option1;
        choice2.textContent = option2;
        choice3.textContent = option3;
        choice4.textContent = option4;

    });

    // // When an answer in question 1 is selected, show question 2
    // questions.addEventListener("click", function() {
    //     // answer1 = question1.textContext;
    //     // console.log(answer1);
    //     questionTitle.textContent = quizQuestions[1].question;
    //     content.textContent = quizQuestions[0].choices;
    //     // question2.style.display = "block";
    // });

    // question2.addEventListener("click", function() {
    //     question2.style.display = "none";
    //     question.textContent = questions[2].question;
    //     question3.style.display = "block";
    // });

    // question3.addEventListener("click", function() {
    //     question3.style.display = "none";
    //     question.textContent = "QUESTION 4";
    //     question4.style.display = "block";
    // });

    // question4.addEventListener("click", function() {
    //     question4.style.display = "none";
    //     question.textContent = questions[3].question;
    //     question5.style.display = "block";
    // });

    // question5.addEventListener("click", function() {
    //     question5.style.display = "none";
    //     question.textContent = questions[4].question;
    //     score.style.display = "block";
    // });

} askQuestions();

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