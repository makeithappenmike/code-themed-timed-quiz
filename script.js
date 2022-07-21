// function startTimer() {
//     setInterval(function() {

//     }, 1000)
// }

function startTimer(seconds) {
    let counter = seconds;
    var timeAllowed = setInterval(() => {
        console.log(counter);
        counter--;

        // When counter reaches 0, stop counting down
        if (counter < 0 ) {
            clearInterval(timeAllowed);
            console.log("Time's up!");
        }

    }, 1000);
};