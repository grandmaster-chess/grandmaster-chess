const puzzles = [
    {fen:"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
     solution:["Nxe5"]},
    {fen:"8/8/8/8/2k5/5R2/8/4K3 w - - 0 1",
     solution:["Rf5#"]},
]

let currentPuzzle=0

function loadPuzzle(index){
    game.load(puzzles[index].fen)
    board.position(game.fen())
    updateMoves()
}

function checkPuzzle(move){
    const sol = puzzles[currentPuzzle].solution[0]
    if(move.san == sol){
        alert("Correct!")
        currentPuzzle = (currentPuzzle+1)%puzzles.length
        loadPuzzle(currentPuzzle)
    } else {
        alert("Try again!")
    }
}

board = Chessboard("board",{
    draggable:true,
    position:"start",
    onDrop:function(source,target,piece,prevPos,orientation){
        const move = game.move({from:source,to:target,promotion:"q"})
        if(move!=null) checkPuzzle(move)
        return move===null?"snapback":null
    }
})
