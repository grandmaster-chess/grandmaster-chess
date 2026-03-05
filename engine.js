let engine = new Worker(
"https://cdn.jsdelivr.net/npm/stockfish/stockfish.js"
)

function requestMove(){

engine.postMessage("position fen "+game.fen())

let depth=document.getElementById("difficulty").value

engine.postMessage("go depth "+depth)

}

engine.onmessage=function(event){

if(event.data.startsWith("bestmove")){

let move=event.data.split(" ")[1]

game.move({

from:move.substring(0,2),
to:move.substring(2,4),
promotion:'q'

})

board.position(game.fen())

updateMoves()

}

}
