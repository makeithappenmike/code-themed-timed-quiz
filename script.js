function askQuestions() {
    // Start questions
    var startButton = document.getElementById("startButton");
    var question = document.getElementById("question");
    var question1 = document.getElementById("question1");
    var question2 = document.getElementById("question2");
    var question3 = document.getElementById("question3");
    var question4 = document.getElementById("question4");
    var question5 = document.getElementById("question5");
    var choice = document.getElementById("choice");
    var answer1 = "";

    const questions = [
        {
            question: "Question 1",
            answers: {
                1: "Answer1",
                2: "Answer2",
                3: "Answer3",
                4: "Answer4",
            },
            correctAnswer: "3"
        }
    ];

    console.log(startButton);
    console.log(question1);
    startButton.addEventListener("click", function() {
        startButton.style.display = "none";
        question.textContent = "QUESTION 1";
        question1.style.display = "block";
    });

    question1.addEventListener("click", function() {
        answer1 = question1.textContext;
        console.log(answer1);
        question1.style.display = "none";
        question.textContent = "QUESTION 2";
        question2.style.display = "block";
    });

    question2.addEventListener("click", function() {
        question2.style.display = "none";
        question.textContent = "QUESTION 3";
        question3.style.display = "block";
    });

    question3.addEventListener("click", function() {
        question3.style.display = "none";
        question.textContent = "QUESTION 4";
        question4.style.display = "block";
    });

    question4.addEventListener("click", function() {
        question4.style.display = "none";
        question.textContent = "QUESTION 5";
        question5.style.display = "block";
    });

    question5.addEventListener("click", function() {
        question5.style.display = "none";
        question.textContent = "QUIZ FINISHED";
        score.style.display = "block";
    });

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