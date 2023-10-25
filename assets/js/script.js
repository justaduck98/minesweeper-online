//Default game is 5x5 which is generated once the page is loaded
window.onload = function(){
    runGame(5);
}
    

document.getElementById('option1').addEventListener("click", function(){
    /*Call run game function as well as generate bombs with parameter of number of squares and to generate*/
    runGame(5);
});

document.getElementById('option2').addEventListener("click", function(){
   runGame(7);
});

document.getElementById('option3').addEventListener("click", function(){
    runGame(9);
});

function generateBombs(gridSize){
        let numberOfBombs = Math.floor(Math.random()* gridSize) + 1;
        document.getElementById("bombs").innerHTML = "Number of Bombs: " + numberOfBombs;
        console.log(numberOfBombs);
}

function generatePlayingField(gridSize){
    let playingField = document.createElement('div');
    for(let x = 1; x <=gridSize; x++){
        //Creates a row container for the following 5 elements
        let tileRow = document.createElement('div');
        tileRow.classList.add('row');
        for (let y= 1; y <= gridSize; y++){
            // generates id's in a coordinate system to allow checkBombFunction
            id= `${x},${y}`;
            let tile = document.createElement('p');
            tile.setAttribute('id', id);
            tile.textContent = 'X';
            tile.addEventListener('click', clickTile);
            tileRow.appendChild(tile);
            console.log(id);
        }
        playingField.appendChild(tileRow);
    }
    //removes old playing field if there is one
    /*let oldField = document.getElementById('gameArea');
    if(oldField){
        document.getElementById('gameArea').removeChild(playingField);
    }*/
    //adds playing field to gameArea div
    document.getElementById('gameArea').appendChild(playingField);
}

function runGame(difficulty){
    generateBombs(difficulty);
    let game = generatePlayingField(difficulty);
    console.log(game);
}

function clickTile(event){
    console.log('I was clicked');
}