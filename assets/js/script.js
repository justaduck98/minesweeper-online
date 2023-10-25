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
            // generates id's in a coordinate system to allow checkBombPosition function to work
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
/**Generate bombs as a random number between gridsize and at least 1 */
function generateBombs(gridSize) {

    let numberOfBombs = Math.floor(Math.random() * gridSize) + 3;
    let bombPositions = []
    for (let i = 0; i< numberOfBombs;i++){
        //generate random coordinates
        let xCoord = Math.floor(Math.random() * gridSize) + 1;
        
        let yCoord = Math.floor(Math.random() * gridSize) + 1;
        //gets the tile.id to insert class="bomb"
        let bomb = document.getElementById(`${xCoord},${yCoord}`);
        //checks if tile.id already has class="bomb"
        if(bomb.classList.contains(bomb)){
            i--; //makes sure there's not too few bombs by making the loop run again
        }
        else{
            bomb.classList.add("bomb");
        }
    }
    document.getElementById("bombs").innerHTML = "Number of bombs: ";
    document.getElementById("bombs").innerHTML += numberOfBombs;
    console.log(bombPositions);
    return bombPositions;
}
/**A function to run all the necessary functions to play the game */
function runGame(difficulty) {
    let game = generatePlayingField(difficulty);
    generateBombs(difficulty);
    console.log(game);
}

/**A handler for clicking on a tile on the website */
function clickTile(event) {
    let tile = event.target;
    if(flagToggled == true){
        console.log("flagToggled was true");
        setFlag(tile);
    }
    else{
        checkBombPosition(tile);
    }
    //adding .id after tile shows the id of the paragraph clicked, instead of outputting "HTMLParagraphElement"
    console.log(`The tile clicked was: ${tile.id}`);
}
/**Adds flag placement functionality */
function setFlag(tile){
    if(tile.innerHTML.includes('fa-flag')){
        tile.innerHTML= '';
    }
    else{
        tile.innerHTML = `<i class="fa-solid fa-flag"id="flag"></i>`;
    }

}

/**Checks if tile clicked by user contains bomb */
function checkBombPosition(tile){
    let numberOfBombs = document.getElementById("bombs").textContent[17];
    for(let i = 0; i <numberOfBombs; i++){
        if(tile.classList.contains('bomb')){
            bombTiles = document.getElementsByClassName('bomb');
            bombTiles[i].innerHTML = `<i class="fa-solid fa-bomb"></i>`;
            bombTiles[i].style.color = "black";
            document.getElementById('bombs').innerHTML = "BOOM! You found a bomb! GAME OVER!!";
            document.getElementsByTagName('h2')[1].innerHTML = "Would You Like To Play Again?";
        }
    }
    
}