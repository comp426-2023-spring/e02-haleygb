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
    playerChoice = String(shot.value);

}

async function reset() {
    location.reload()
}

async function hide() {
    let hideButton = document.getElementById("hide");
    let rules = document.getElementById("showRules")
    hideButton.className = "inactive";
    rules.className = "inactive";
}

async function rules() {
    let hideButton = document.getElementById("hide");
    let rules = document.getElementById("showRules")
    hideButton.className = "active";
    rules.className = "active";
}

async function play() {
    let endpoint = "app/" + whichGame
    const url = document.baseURI+endpoint
    document.getElementById("warning").innerHTML = ""

    if (playerChoice === null) {

        try{
        await fetch(url)
            .then(function(response) {
                return response.json();
            })

                .then(function(result){
                    console.log(result)
                    document.getElementById("player").innerHTML = "Your Move: " + result.player;
                })
    } catch (error) {
        document.getElementById("warning").innerHTML = "Please select a game and try again."
    }
}

    else {
        await playOpponent(url);
    }

    let section = document.getElementById("results")
    section.className = "active"


}

async function playOpponent(url) {
    let newUrl = url + "/play/" + String(playerChoice)

    console.log("playOpponent")

    await fetch(newUrl)
        .then(function(response) {
            return response.json();
        })

            .then(function(result){
                console.log(result)
                document.getElementById("player").innerHTML = "Your Move: " + result.player;
                document.getElementById("computer").innerHTML = "Your opponent: " + result.opponent;
                document.getElementById("gameResults").innerHTML = "Game Result: " + result.result;
            })


}





// const endpoint = "app/"
//     const url = document.baseURI+endpoint
//     await fetch(url)
//         .then(function(response) {
//             return response.text();
//         })
//             .then(function(result){
//                 console.log(result);
//             })

