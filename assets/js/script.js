//Default game is 5x5 which is generated once the page is loaded
window.onload = function () {
    runGame(5);
};
//counter to keep track if the user has beat the game
let flagToggled = false;
let gridSize = 0;

//event listener to the 3 difficulty buttons, running the same function but with different parameter!
document.getElementById("option1").addEventListener("click", function () {
    /*Call run game function as well as generate bombs with parameter of number of squares and to generate*/
    gridSize = 5;
    document.getElementsByTagName("h2")[1].innerHTML = `Welcome to MineSweeper! You are playing on ${gridSize}x${gridSize}!`;
    runGame(5);
});

document.getElementById("option2").addEventListener("click", function () {
    gridSize = 7;
    document.getElementsByTagName("h2")[1].innerHTML = `Welcome to MineSweeper! You are playing on ${gridSize}x${gridSize}!`;
    runGame(7);
});

document.getElementById("option3").addEventListener("click", function () {
    gridSize = 9;
    document.getElementsByTagName("h2")[1].innerHTML = `Welcome to MineSweeper! You are playing on ${gridSize}x${gridSize}!`;
    runGame(9);
});

document.getElementById("flag").addEventListener("change", function () {
    if (flag.checked) {
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
    let playingField = document.createElement("div");
    for (let x = 1; x <= gridSize; x++) {
        //Creates a row container for the following 5 elements
        let tileRow = document.createElement("div");
        tileRow.classList.add("row");
        for (let y = 1; y <= gridSize; y++) {
            // generates id's in a coordinate system to allow checkBombPosition function to work
            let id = `${x},${y}`;
            let tile = document.createElement("span");
            tile.setAttribute("id", id);
            tile.textContent = "";
            tile.addEventListener("click", clickTile);
            tile.addEventListener("contextmenu", clickTile);
            tileRow.appendChild(tile);
        }
        playingField.appendChild(tileRow);
    }
    //removes old playing field if there is one
    let oldField = document.getElementById("gameArea");
    if (oldField.hasChildNodes()) {
        oldField.removeChild(oldField.firstChild);
    }
    //adds playing field to gameArea div
    document.getElementById("gameArea").appendChild(playingField);


}
/**Generate bombs as a random number between gridsize and at least 1 */
function generateBombs(gridSize) {

    let numberOfBombs = Math.floor(Math.random() * gridSize) + 3;
    for (let i = 0; i < numberOfBombs; i++) {
        //generate random coordinates
        let xCoord = Math.floor(Math.random() * gridSize) + 1;

        let yCoord = Math.floor(Math.random() * gridSize) + 1;
        //gets the tile.id to insert class="bomb"
        let bomb = document.getElementById(`${xCoord},${yCoord}`);
        //checks if tile.id already has class="bomb"
        if (bomb.classList.contains("bomb")) {
            i--; //makes sure there's no duplicate bombs by making the loop run again
        }
        else {
            bomb.classList.add("bomb");
        }
    }
    document.getElementById("bombs").innerHTML = `Number of bombs: ${numberOfBombs}`;
}
/**A function to run all the necessary functions to play the game */
function runGame(difficulty) {
    let game = generatePlayingField(difficulty);
    generateBombs(difficulty);
    tilesLeft = calculateWinCondition(difficulty);
    console.log(game);
}

/**A handler for clicking on a tile on the website */
function clickTile(event) {
    let tile = event.target;
    if (flagToggled == true) {
        setFlag(tile);
    }
    //Checks if game is won or lost and prevents further input until a button is pressed and a new field is generated!
    if (document.getElementsByTagName("h2")[1].innerHTML == "Would You Like To Play Again?" || document.getElementsByTagName("h2")[1].innerHTML == "You won! Congratulations! Click one of the buttons if you would like to play more!") {
        return;
    }
    else {
        //checks if the clicked tile has a flag, which prevents user from revealing the tile
        if (!tile.classList.contains("flag")) {
            checkBombPosition(tile);
            calculateWinCondition();
        }
    }
}
/**Adds flag placement functionality */
function setFlag(tile) {
    if (tile.innerHTML.includes("fa-flag")) {
        tile.innerHTML = "";
    }
    else {
        tile.innerHTML = `<i class="fa-solid fa-flag"id="flag"></i>`;
    }

}

/**Checks if tile clicked by user contains bomb */
function checkBombPosition(tile) {
    let numberOfBombs = document.getElementById("bombs").textContent[17];
    for (let i = 0; i < numberOfBombs; i++) {
        if (tile.classList.contains("bomb")) {
            let bombTiles = document.getElementsByClassName("bomb");
            bombTiles[i].innerHTML = `<i class="fa-solid fa-bomb"></i>`;
            bombTiles[i].style.color = "black";
            document.getElementById("bombs").innerHTML = "BOOM! You found a bomb! GAME OVER!!";
            document.getElementsByTagName("h2")[1].innerHTML = "Would You Like To Play Again?";
        }
        else {
            revealTile(tile);
        }
    }

}

/**This function will check nearby tiles for bombs and reveal them if there are no bombs */
function revealTile(tile) {

    /**Prevents recursive calling when there is no tile with the called id */
    if (tile && tile.id && !tile.classList.contains("revealed")) {
        let coords = tile.id.split(",");
        let x = parseInt(coords[0]);
        let y = parseInt(coords[1]);
        let nearbyBombs = countBombs(tile);
        tile.classList.add(`b${nearbyBombs}`, "revealed");
        tile.textContent = nearbyBombs;
        tile.style.backgroundColor = "lightgrey";

        if (nearbyBombs === 0) {
            let adjecentTiles = findAdjacentTiles(x, y);
            for (let [adjecentX, adjecentY] of adjecentTiles) {
                let adjecentTile = document.getElementById(`${adjecentX},${adjecentY}`);
                revealTile(adjecentTile);
            }
        }
    }

}

function countBombs(tile) {
    let coords = tile.id;
    let x = parseInt(coords[0]);
    let y = parseInt(coords[2]);
    let bombCount = 0;
    // adds coordinates around the tile to check for bombs
    let adjecentTiles = findAdjacentTiles(x, y);
    /**Loops through the nested array above of x and y coordinates adjacent to the clicked tile */
    for (let [adjecentX, adjecentY] of adjecentTiles) {
        let adjecentTile = document.getElementById(`${adjecentX},${adjecentY}`);
        if (adjecentTile && adjecentTile.classList.contains("bomb")) {
            bombCount += 1;
        }

    }
    return bombCount;

}
/**returns an array of x and y coordinates that are in the closest proximity to the tile */
function findAdjacentTiles(x, y) {
    return [
        [x, y + 1],
        [x + 1, y + 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
        [x - 1, y + 1]
    ];
}

function calculateWinCondition() {
    let totalTiles = document.querySelectorAll("span:not(.bomb)");
    let revealedTiles = document.querySelectorAll("span.revealed:not(.bomb)");
    let tilesLeft = totalTiles - revealedTiles.length;
    if (tilesLeft === 0) {
        document.getElementsByTagName("h2")[1].innerHTML = "You won! Congratulations! Click one of the buttons if you would like to play more!";
    }
    return totalTiles - revealedTiles.length;
}