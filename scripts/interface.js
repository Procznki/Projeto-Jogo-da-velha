



document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)

    })

})

function handleClick(event) {

    if (!gameOver) {
        let square = event.target;
        let position = square.id;

        if (handleMove(position)) {
           
            setTimeout(() => {

                alert("game over")
            }, 10)


        }
        updateSquares()
    }
}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
        if (symbol != '') {
            square.innerHTML = `<div class= '${symbol}'></div>`
        }

    })

}

let but = document.getElementById("botao")

 but.addEventListener('click', restart)

 function restart(){
    board = ['', '', '', '', '', '', '', '', '', ];
    playerTime = 0;
    gameOver = false
    

    document.querySelectorAll(".square").forEach(square => square.innerHTML = "")
}

