/******RECUP**** */
const displayMatches = document.getElementById('numOfMatches');
const select = document.getElementById('matches');

let totalMatches = 20;

/******FONCTION SECONDAIRES*****
*****************************/
function playerChoice () {
    const choice = select.value; // stock le choix du select dans choice
    if (select.value > totalMatches) {
        displayMatches.innerText = `Il reste ${totalMatches} allumettes, tu dois donc prendre un nombre d'allumettes inférieur ou égal à ${totalMatches}`;
    } else {
        totalMatches = removeMatches(totalMatches, parseInt(choice)); //parseInt change le "1" en 1.
        displayMatches.innerText = `Il reste ${totalMatches} allumettes`;
    }
    select.value = ""; // remet le choix défault du select après avoir fait son choix
}

function removeMatches (matchesTotal, matchesPlayer) {
    let result = matchesTotal - matchesPlayer;
    return result;
}

function winning () {
    if (totalMatches == 0) {
        displayMatches.innerText = `Tu as gagné !!!`;
        select.disabled = true;
    }
}

/******FONCTION PRINCIPALE*****
 *****************************/
function playGame () {
    playerChoice();
    winning();
}
 
/***********LANCEMENT********
******************************/
select.addEventListener("change", playGame);







// function playGame () {
//     while (totalMatches > 0) {
//         let playerMatches = prompt("Choose between 1 and 6 matches plz");
//         if (playerMatches < 1 || playerMatches > 6) {
//             alert("Between 1 and 6 plz");
//         } else {
//         totalMatches = removeMatches(totalMatches, playerMatches);
//         alert(`Il reste ${totalMatches} matches`);
//         displayMatches.innerText = `Il reste ${totalMatches} matches`;
//         }
//     } if (totalMatches <= 0) {
//         displayMatches.innerText = `You win`;
//     }
// }


// if (choice === "1") {
    //     totalMatches = removeMatches(totalMatches, parseInt(choice));
    //     displayMatches.innerText = `Il reste ${totalMatches} allumettes`
    // } else if (choice === "2") {
    //     totalMatches = removeMatches(totalMatches, parseInt(choice));
    //     displayMatches.innerText = `Il reste ${totalMatches} allumettes`;
    // } else if (choice === "3") {
    //     totalMatches = removeMatches(totalMatches, parseInt(choice));
    //     displayMatches.innerText = `Il reste ${totalMatches} allumettes`;
    // } else if (choice === "4") {
    //     totalMatches = removeMatches(totalMatches, parseInt(choice));
    //     displayMatches.innerText = `Il reste ${totalMatches} allumettes`;
    // } else if (choice === "5") {
    //     totalMatches = removeMatches(totalMatches, parseInt(choice));
    //     displayMatches.innerText = `Il reste ${totalMatches} allumettes`;
    // } else if (choice === "6" && totalMatches >= 0) {
    //     totalMatches = removeMatches(totalMatches, parseInt(choice));
    //     displayMatches.innerText = `Il reste ${totalMatches} allumettes`;
    // }






