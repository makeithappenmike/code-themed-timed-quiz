function askQuestions() {
    // Start questions
    var startButton = document.getElementById("startButton");
    var question = document.getElementById("question");
    var questions = document.getElementById("questions");
    var question2 = document.getElementById("question2");
    var question3 = document.getElementById("question3");
    var question4 = document.getElementById("question4");
    var question5 = document.getElementById("question5");
    var choice = document.getElementById("choice");
    var answer1 = "";
    var answer2 = "";
    var answer3 = "";
    var answer4 = "";
    var answer5 = "";

    const quizQuestions = [
        {
            question: "Question 1",
            choices: {
                1: "Answer1",
                2: "Answer2",
                3: "Answer3",
                4: "Answer4",
            },
            correctAnswer: "3"
        },
        {
            question: "Question 2",
            choices: {
                1: "Answer1",
                2: "Answer2",
                3: "Answer3",
                4: "Answer4",
            },
            correctAnswer: "2"
        },
        {
            question: "Question 3",
            choices: {
                1: "Answer1",
                2: "Answer2",
                3: "Answer3",
                4: "Answer4",
            },
            correctAnswer: "4"
        },
        {
            question: "Question 4",
            choices: {
                1: "Answer1",
                2: "Answer2",
                3: "Answer3",
                4: "Answer4",
            },
            correctAnswer: "1"
        },
        {
            question: "Question 5",
            choices: {
                1: "Answer1",
                2: "Answer2",
                3: "Answer3",
                4: "Answer4",
            },
            correctAnswer: "3"
        },
    ];

    console.log(startButton);
    // console.log(question1);
    console.log(quizQuestions[0].question);
    console.log(quizQuestions[0].choices);
    startButton.addEventListener("click", function() {
        startButton.style.display = "none";
        question.textContent = quizQuestions[0].question;
        questions.style.display = "block";
        for (i = 0; i > options.length; i++) {
            
        }
    });

    questions.addEventListener("click", function() {
        // answer1 = question1.textContext;
        // console.log(answer1);
        question.textContent = quizQuestions[1].question;
        content.textContent = quizQuestions[0].choices;
        // question2.style.display = "block";
    });

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