// 'list' is a placeholder and is saying: When you call this function give me
// an array (name doesn't matter)
function getComputerChoice(list) {
    // Math.random(): Generates a float number between 0 and 1
    // Multiply by length of list (3 elements) to get another float
    // Math.floor(): Rounds down the float to the nearest integer
    const randomElement = Math.floor(Math.random() * list.length);
    // Returns the integer and uses that index as the computer's random choice
    return list[randomElement];
}

// Get the user's input and return the output
function getHumanChoice() {
    // Asks the user for their input
    const userInput = prompt("Please enter your play: ");
    // Take the user's input and make it lowercase
    return userInput.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        console.log("You win!");
        humanScore += 1;
    } else {
        console.log("Computer Wins!");
        computerScore += 1;
    }
}

function playGame(rounds) {
    for (let i = 1; i <= rounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(plays);
        // playRound("rock", "scissors")
        playRound(humanChoice, computerChoice);

        console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("The Computer won the game!");
    } else {
        console.log("Its a Tie!");
    }
}

let humanScore = 0;
let computerScore = 0;
const plays = ["rock", "paper", "scissors"];

playGame(5);