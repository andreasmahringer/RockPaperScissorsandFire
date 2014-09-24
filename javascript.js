//Confirm User wants to play
var Intro = confirm ("Would you like to play 'Rock, Paper, Scissors and FIRE'?");

//Asking User for his/her pick
var userChoice = prompt("What would you like to pick?");
 while (userChoice !== "rock" && userChoice !== "fire" && userChoice !== "paper" && userChoice !== "fire") {
    userChoice = prompt("Invalid pick. Choose again");
    }

console.log("The user's 1st choice: " + userChoice);

//Asking Computer for its pick
var computerChoice = Math.floor(Math.random() * 4);
//console.log(computerChoice);

//Defining the computer's choice
if (computerChoice === 0) {
    computerChoice = "rock";
    }
else if (computerChoice === 1) {
    computerChoice = "paper";
    }
else if (computerChoice === 2) {
    computerChoice = "scissors";
    }
else {
    computerChoice = "fire";
    };

console.log("The computer's 1st choice: " + computerChoice);

//Compare Functions
var compare = function (Choice1, Choice2) {
    // If both choose fire, both should loose  
    if ((Choice1 === Choice2) && (Choice1 === "fire")) {
        return "You just got burned";
        }
    // If both choose a same other, they shall pick again until they pick different
    else if (Choice1 === Choice2) {
        while (Choice1 === Choice2) {
            //New user choice
            userChoice = prompt ("Choose again!");
            Choice1 = userChoice;
            console.log("The user's new choice: " + userChoice);
            
            //New computer choice
            computerChoice = Math.floor(Math.random() * 4);
            
            //Specify new computer choice again, otherwise we compare a "string" (Choice1)  with a number (Choice2) in the function below
             if (computerChoice === 0) {
                    computerChoice = "rock";
                }
            else if (computerChoice === 1) {
                    computerChoice = "paper";
                }
            else if (computerChoice === 2) {
                    computerChoice = "scissors";
                }
            else {
                computerChoice = "fire";
                }
           console.log("The computer's new choice: " + computerChoice);
            Choice2 = computerChoice;
        }
        
    //Call function again w. new choices    
    compare(userChoice, computerChoice);
    }
    
//Defining game logics
    //Rock
    else if (Choice1 === "rock") {
            if (Choice2 === "paper") {
                console.log("paper wins");
                }
            else if (Choice2 === "scissors") {
                console.log("rock wins");
                }
            else {
                console.log("fire wins");
                }
    }
        
    //Paper
    else if (Choice1 === "paper") {
            if (Choice2 === "rock") {
                console.log("rock wins");
                }
            else if (Choice2 === "scissors") {
                console.log("scissors wins");
                }
            else {
                console.log("fire wins");
                }
    }
        
    //Scissors
    else if (Choice1 === "scissors") {
            if (Choice2 === "paper") {
                console.log("paper wins");
                }
            else if (Choice2 === "rock") {
                console.log("rock wins");
                }
            else {
                console.log("fire wins");
                }
    }
        
    //Fire
    else if (Choice1 === "fire") {
                console.log("fire wins");
            
    }
}
//Call function
compare(userChoice, computerChoice);