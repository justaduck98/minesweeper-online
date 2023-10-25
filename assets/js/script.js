document.getElementById('option1').addEventListener("click", function(){
    /*Call run game function as well as generate bombs with parameter of number of squares and to generate*/
    generateBombs(5);
});

function generateBombs(gridSize){
        let numberOfBombs = Math.floor(Math.random()* gridSize) + 1;
        console.log(numberOfBombs);
}