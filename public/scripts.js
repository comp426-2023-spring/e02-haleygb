// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

let whichGame = ""
let playerChoice = null
async function chooseRPS() {
    let rps = document.getElementById("opponentRPS");
    let rpsls = document.getElementById("opponentRPSLS");
    rps.className = "active";
    rpsls.className = "inactive";
    whichGame = "rps";
}

async function chooseRPSLS() {
    let rpsls = document.getElementById("opponentRPSLS");
    let rps = document.getElementById("opponentRPS");
    rpsls.className = "active";
    rps.className = "inactive";
    whichGame = "rpsls";
}

async function setOpponent() {
    let shot = document.getElementById("opponents");
    console.log(shot.value)
    playerChoice = shot.value;

}

