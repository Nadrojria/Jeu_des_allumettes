/******RECUP HTML**** */
const displayGame = document.getElementById('playerAndMatches'); // englobe nb allumettes et joueurs
const displayMatches = document.getElementById('numOfMatches');
const playerOne = document.getElementById('playerOne');
const playerTwo = document.getElementById('playerTwo');
const playerThree = document.getElementById('playerThree');
const playerFour = document.getElementById('playerFour');
const namePlayerOne = document.getElementById('namePlayerOne');
const namePlayerTwo = document.getElementById('namePlayerTwo');
const namePlayerThree = document.getElementById('namePlayerThree');
const namePlayerFour = document.getElementById('namePlayerFour');

let totalMatches = 20;

/******FONCTION SECONDAIRES*****
*****************************/
function displayPlayer () {
    displayGame.style.display = 'none';
//     displayMatches.style.display = 'none';
//     playerOne.style.display = 'none';
//     namePlayerOne.style.display = 'none';
//     playerTwo.style.display = 'none';
//     namePlayerTwo.style.display = 'none';
//     playerThree.style.display = 'none';
//     namePlayerThree.style.display = 'none';
//     playerFour.style.display = 'none';
//     namePlayerFour.style.display = 'none';
}

function removeMatches (matchesTotal, matchesPlayer) {
    let result = matchesTotal - matchesPlayer;
    return result;
}

function winning (player) {
    if (totalMatches == 0) {
        displayMatches.innerText = `${player} remporte la partie !!!`;
        playerOne.disabled = true;
        playerTwo.disabled = true;
        playerThree.disabled = true;
        playerFour.disabled = true;
    }
}

function disabledPlayer (player, nextPlayer, nonePlayerB, nonePlayerC) {
    player.disabled = true;
    nextPlayer.disabled = false;
    nonePlayerB.disabled = true;
    nonePlayerC.disabled = true;
}

/******FONCTION PRINCIPALE*****
 *****************************/
function playerChoice (player, nextPlayer, nonePlayerB, nonePlayerC) {
    const choice = player.value; // stock le choix du select dans choice
    if (player.value > totalMatches) {
        displayMatches.innerText = `Il reste ${totalMatches} allumettes, tu dois donc prendre un nombre d'allumettes inférieur ou égal à ${totalMatches}`;
    } else {
        totalMatches = removeMatches(totalMatches, parseInt(choice)); //parseInt change le "1" en 1.
        displayMatches.innerText = `Il reste ${totalMatches} allumettes`;
        disabledPlayer(player, nextPlayer, nonePlayerB, nonePlayerC);
    }
    player.value = ""; // remet le choix défault du select après avoir fait son choix
}
 
/***********LANCEMENT********
******************************/
playerOne.addEventListener("change", () => {
    playerChoice(playerOne, playerTwo, playerThree, playerFour);
    winning(namePlayerOne.innerText);
});
playerTwo.addEventListener("change", () => {
    playerChoice(playerTwo, playerThree, playerFour, playerOne);
    winning(namePlayerTwo.innerText);
});
playerThree.addEventListener("change", () => {
    playerChoice(playerThree, playerFour, playerOne, playerTwo);
    winning(namePlayerThree.innerText);
});
playerFour.addEventListener("change", () => {
    playerChoice(playerFour, playerOne, playerTwo, playerThree);
    winning(namePlayerFour.innerText);
});











