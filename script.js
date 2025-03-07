/******RECUP HTML**** */
const containerPlayer = document.getElementById('displayContainerPlayer');
const howMuchPlayer = document.getElementById('HowMuchPlayers');
const numOfPlayers = document.getElementById('numOfPlayers');
const displayMatches = document.getElementById('numOfMatches');

let totalMatches = 20;

/******FONCTION SECONDAIRES*****
*****************************/
function removeMatches (matchesTotal, matchesPlayer) {
    let result = matchesTotal - matchesPlayer;
    return result;
}

function winning (labelPlayer) {
    if (totalMatches == 0) {
        displayMatches.innerText = `${labelPlayer} remporte la partie !!!`;
        containerPlayer.style.display = 'none'; // retire l'interface des joueurs
    }
}

function disabledPlayer (player) {
    player.disabled = true;
}

function createPlayers () {
    array.forEach(elem => {
        let divPlayer = document.createElement('div');
        containerPlayer.appendChild(divPlayer);
        divPlayer.classList.add("allSelect");

        let labelPlayer = document.createElement('label');
        divPlayer.appendChild(labelPlayer);
        labelPlayer.classList.add("labelPlayer");
        labelPlayer.setAttribute("id", `label${elem}`)
        labelPlayer.innerText = `Joueur ${elem}`;
        
        let selectPlayer = document.createElement('select');
        divPlayer.appendChild(selectPlayer);
        selectPlayer.setAttribute("id", `select${elem}`);
        

        for (let j = 0; j <= 6; j++) {
            let optionPlayer = document.createElement('option');
            if (j == 0) {
                optionPlayer.setAttribute("value", "");
                optionPlayer.innerText = '--Make a choice--';
            } else {
            optionPlayer.setAttribute("value", j);
            optionPlayer.innerText = j;
            }
            selectPlayer.appendChild(optionPlayer);
        }

        selectPlayer.addEventListener("change", () => {
            playerChoice(selectPlayer);
            winning(labelPlayer.innerText);
        })
    })
}

/******FONCTION PRINCIPALE*****
 *****************************/
function playerChoice (player) {
    const choice = player.value; // stock le choix du select dans choice
    if (parseInt(choice) > totalMatches) { // parseInt change le "1" de la value html en 1.
        displayMatches.innerText = `Il reste ${totalMatches} allumettes, tu dois donc prendre un nombre d'allumettes inférieur ou égal à ${totalMatches}`;
    } else {
        totalMatches = removeMatches(totalMatches, parseInt(choice)); //
        displayMatches.innerText = `Il reste ${totalMatches} allumettes`;
    }
    player.value = ""; // remet le choix défault du select après avoir fait son choix
}
 
/***********LANCEMENT********
******************************/
let array = [];

numOfPlayers.addEventListener("change", () => {
    const players = numOfPlayers.value;
    for (let i = 1; i <= parseInt(players); i++) {
        array.push(i);
    }
    createPlayers();
    howMuchPlayer.style.display = 'none';
    numOfPlayers.style.display = 'none';
});


/********REJOUER ********
*************************/

/******Notion de tour****

Cela permettrait d'activer un joueur et désactiver les autres.
On pourrait initiliaser une variable turn à 1, et la comparer à l'index du tableau du nombre de joueurs. Si c'est égale on active le joueur de l'index et desactive les autres.
A chaque AEL on fait un turn++. Si turn++ est supérieur ou égale à nombre de joueurs total, on remet turn = 1;
 
**************************/













