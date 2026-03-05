// Export current game
function exportPGN(){
    const pgn = game.pgn()
    const blob = new Blob([pgn], {type: "text/plain"})
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "game.pgn"
    a.click()
}

// Load PGN from text
function loadPGN(pgnText){
    const loaded = game.load_pgn(pgnText)
    if(loaded){
        board.position(game.fen())
        updateMoves()
        return true
    }
    return false
}
