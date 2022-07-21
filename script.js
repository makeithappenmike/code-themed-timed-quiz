function startTimer(seconds) {

    // Set timer to value passed onClick
    let counter = seconds;

    // Timer
    var timeAllowed = setInterval(() => {
        console.log(counter);

        // document.getElementById("time-remaining").innerHTML = "3";

        // Decrement timer
        counter--;
        document.getElementById("time-remaining").innerHTML = counter + 1;

        // // Grab Time Remaining
        // var timeRemaining = document.getElementsByClassName("time-remaining").innerHTML;
        // console.log(timeRemaining);

        // When counter reaches 0, stop counting down
        if (counter < 0 ) {
            document.getElementById("time-remaining").innerHTML = counter;
            clearInterval(timeAllowed);
            document.getElementById("time-remaining").innerHTML = "0";
            console.log("Time's up!");
            // alert("Time's Up!");
        }
    

    }, 1000);
};