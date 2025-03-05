/******RECUP**** */
const displayMatches = document.getElementById('numOfMatches');
const playerOne = document.getElementById('playerOne');
const playerTwo = document.getElementById('playerTwo');
const namePlayerOne = document.getElementById('namePlayerOne');
const namePlayerTwo = document.getElementById('namePlayerTwo');

let totalMatches = 20;

/******FONCTION SECONDAIRES*****
*****************************/

function removeMatches (matchesTotal, matchesPlayer) {
    let result = matchesTotal - matchesPlayer;
    return result;
}

function winning (player) {
    if (totalMatches == 0) {
        displayMatches.innerText = `${player} remporte la partie !!!`;
        playerOne.disabled = true;
        playerTwo.disabled = true;
    }
}

function disabledPlayer (player1, player2) {
    player1.disabled = true;
    player2.disabled = false;
}

/******FONCTION PRINCIPALE*****
 *****************************/
function playerChoice (player, nonePlayer) {
    const choice = player.value; // stock le choix du select dans choice
    if (player.value > totalMatches) {
        displayMatches.innerText = `Il reste ${totalMatches} allumettes, tu dois donc prendre un nombre d'allumettes inférieur ou égal à ${totalMatches}`;
    } else {
        totalMatches = removeMatches(totalMatches, parseInt(choice)); //parseInt change le "1" en 1.
        displayMatches.innerText = `Il reste ${totalMatches} allumettes`;
        disabledPlayer(player, nonePlayer);
    }
    player.value = ""; // remet le choix défault du select après avoir fait son choix
}
 
/***********LANCEMENT********
******************************/
playerOne.addEventListener("change", () => {
    playerChoice(playerOne, playerTwo);
    winning(namePlayerOne.innerText);
});
playerTwo.addEventListener("change", () => {
    playerChoice(playerTwo, playerOne);
    winning(namePlayerTwo.innerText);
});







