var number = 0;
var attempts = 0;
var guesses = new Array();

//generate a random number 
function GenerateNumber()
{
    number = (Math.floor(Math.random() * 100));
}
//store user input in a variable, push it into an array using function
function guessNumber() {

    var userInput = parseInt(document.getElementById("guess").value);
    //keep track of numbers which have been guessed, and mock the user when they guess a number for the second time.
    for (var i = 0; i < guesses.length; i++) {
        if (guesses[i] == userInput) {
            document.getElementById("div_response").innerHTML = "<p>This number has already been guessed</p>";
            return;
        }
    }

    guesses.push(userInput);
    attempts = attempts + 1;

    //count the number of guesses and return a response based on that number.
    if (attempts == 100) {
        document.getElementById("guess100").innerHTML = "<p>Are you ever going to get this?</p>";
    }

    if (userInput == number) {
        document.getElementById("div_response").innerHTML = "<p>*** You won the Game ***</p>";
        document.getElementById("btnCheck").disabled = true;
    }

        
   
    document.getElementById("div_numbers").innerHTML += userInput + ", ";

    document.getElementById("div_attempts").innerHTML = "Total Attempts: " + attempts;
}



