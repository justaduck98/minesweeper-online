//Default game is 5x5 which is generated once the page is loaded
window.onload = function () {
    runGame(5);
};
//counter to keep track if the user has beat the game
let tilesFound = 0;
let flagToggled = false;

//event listener to the 3 difficulty buttons, running the same function but with different parameter!
document.getElementById('option1').addEventListener("click", function () {
    /*Call run game function as well as generate bombs with parameter of number of squares and to generate*/
    runGame(5);
});

document.getElementById('option2').addEventListener("click", function () {
    runGame(7);
});

document.getElementById('option3').addEventListener("click", function () {
    runGame(9);
});

document.getElementById('flag').addEventListener('change', function(){
    if(flag.checked){
        flagToggled = true;
    }
    else {
        flagToggled = false;
    }
});

/**Generate bombs as a random number between gridsize and at least 1 */
function generateBombs(gridSize) {
    let numberOfBombs = Math.floor(Math.random() * gridSize) + 1;
    document.getElementById("bombs").innerHTML = "Number of Bombs: " + numberOfBombs;
    console.log(numberOfBombs);
}
/**Generate div elements in a grid style using nested loops, and also assigning unique id's
 * to be used as coordinates
 */
function generatePlayingField(gridSize) {
    let playingField = document.createElement('div');
    for (let x = 1; x <= gridSize; x++) {
        //Creates a row container for the following 5 elements
        let tileRow = document.createElement('div');
        tileRow.classList.add('row');
        for (let y = 1; y <= gridSize; y++) {
            // generates id's in a coordinate system to allow checkBombFunction
            id = `${x},${y}`;
            let tile = document.createElement('span');
            tile.setAttribute('id', id);
            tile.textContent = '';
            tile.addEventListener('click', clickTile); 
            tile.addEventListener('right-click', clickTile);
            tileRow.appendChild(tile);
            console.log(id);
        }
        playingField.appendChild(tileRow);
    }
    //removes old playing field if there is one
    let oldField = document.getElementById('gameArea');
    if (oldField.hasChildNodes()) {
        oldField.removeChild(oldField.firstChild);
    }
    //adds playing field to gameArea div
    document.getElementById('gameArea').appendChild(playingField);


}
/**A function to run all the necessary functions to play the game */
function runGame(difficulty) {
    generateBombs(difficulty);
    let game = generatePlayingField(difficulty);
    console.log(game);
}

/**A handler for clicking on a tile on the website */
function clickTile(event) {
    let tile = event.target;
    if(flagToggled == true){
        console.log("flagToggled was true");
        setFlag(tile);
    }
    //adding .id after tile shows the id of the paragraph clicked, instead of outputting "HTMLParagraphElement"
    console.log(`The tile clicked was: ${tile.id}`);
}

function setFlag(tile){
    if(tile.innerHTML.includes('fa-flag')){
        tile.innerHTML= '';
    }
    else{
        tile.innerHTML = `<i class="fa-solid fa-flag"id="flag"></i>`;
    }

    
    
}