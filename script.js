function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let computerChoice = choice[Math.floor(Math.random()*choice.length)];
    return computerChoice;
} 

function game(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return "Hey! it's a tie";
    }else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
    return `You lose ${computerSelection} beats ${playerSelection}`;
}else {
    return `You win ${playerSelection} beats ${computerSelection}`;
}
}

const playerSelection = prompt("Enter an input", "").toLowerCase();
const computerSelection = getComputerChoice();
console.log(game(playerSelection, computerSelection));