let humanScore = 0
let computerScore = 0
// Gets the computers choice by using math random method
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3)
    return choices[choice]
    // console.log(choices[choice])
}

function getHumanChoice(){
    const choices = ["rock", "paper", "scissors"];
    let choice = prompt("What guess would you like to make: ")
    choice = choice.toLowerCase();
    while(!choices.includes(choice)){
        choice = prompt("Invalid answer. Enter between Rock, Paper or Scissors: ")
    }
    return choice
    // console.log(choice);
}



function playRound(humanChoice, computerChoice){
    console.log("Welcome to Rock, Paper, Scissors.\n You will be playin against the computer")
    console.log("Computer's choice", computerChoice)
    console.log("Human's choice", humanChoice)

    if (humanChoice == computerChoice){
        console.log("It's a tie!")
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }

    console.log("Your score is " ,humanScore)
    console.log("Computer's score is " ,computerScore)
}

function playGame()
{
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

}

playGame()




    



