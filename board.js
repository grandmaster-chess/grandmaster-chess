function onDragStart(source,piece){

if(game.game_over()) return false

if(piece.search(/^b/) !== -1) return false

}

function onDrop(source,target){

let move=game.move({

from:source,
to:target,
promotion:'q'

})

if(move===null) return "snapback"

updateMoves()

board.position(game.fen())

requestMove()

}

board = Chessboard("board",{

draggable:true,
position:"start",
onDragStart:onDragStart,
onDrop:onDrop

})
