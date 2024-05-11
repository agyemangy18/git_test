let humanScore = 0;
let computerScore = 0;
const winningScore = 5; // Score needed to win

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function updateResults(message) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = message;
}

function updateScore() {
    const scoreDiv = document.createElement("div");
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    const resultsDiv = document.getElementById("results");
    resultsDiv.appendChild(scoreDiv);
}

function playRound(humanChoice, computerChoice) {
    updateResults(`Human's choice: ${humanChoice}, Computer's choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        updateResults("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        updateResults("You win!");
        humanScore++;
    } else {
        updateResults("Computer wins!");
        computerScore++;
    }

    updateScore();

    if (humanScore === winningScore || computerScore === winningScore) {
        announceWinner();
    }
}

function announceWinner() {
    let winner;
    if (humanScore === winningScore) {
        winner = "Human";
    } else {
        winner = "Computer";
    }
    updateResults(`${winner} wins the game!`);
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", function() {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("scissors");
});