function askQuestions() {
    // Start questions
    var startButton = document.getElementById("startButton");
    var question = document.getElementById("question");
    var question1 = document.getElementById("question1");
    var question2 = document.getElementById("question1");
    var question3 = document.getElementById("question1");
    var question4 = document.getElementById("question1");
    var question5 = document.getElementById("question1");

    console.log(startButton);
    console.log(question1);
    startButton.addEventListener("click", function() {
        startButton.style.display = "none";
        question.textContent = "QUESTION 1";
        question1.style.display = "block";
    });

    question2.addEventListener("click", function() {
        question1.style.display = "none";
        question.textContent = "QUESTION 2";
        question2.style.display = "block";
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