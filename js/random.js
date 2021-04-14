
var randMove = function() {
    var potMoves = game.moves();
    var rand = Math.floor(Math.random() * potMoves.length);
    return potMoves[rand];
}

//this is a dry run... 
var move = function(){
    if(game.game_over() === true){
        console.log('game over loser');
        return;
    }

    game.move(randMove());
    board.position(game.fen());
}


