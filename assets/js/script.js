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
    let playingField;
        playingField = `
        <table>
            <tbody>`
    for(let x = 0; x <gridSize; x++){
        playingField += `
        <tr id= "${x}">`;
        for (let y= 0; y < gridSize; y++){
            // generates id's in a coordinate system to allow checkBombFunction
            id= `${x}` + "," + `${y}`;
            playingField += `
            <td  id="${id}">X</td>
            `;
            console.log(id);
        }
        playingField += `
        </tr>
        `;
    }
    playingField += `
        </tbody>
    </table>`;
    return playingField;
}

function runGame(difficulty){
    generateBombs(difficulty);
    let game = generatePlayingField(difficulty);
    document.getElementsByTagName("span")[0].innerHTML = game;
    console.log(game);
}