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
            playingField += `
            <td id="${y}">X</td>
            `;
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