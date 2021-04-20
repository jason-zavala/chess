
var board,
    game = new Chess();

// Actions after any move
var onMoveEnd = function(oldPos, newPos) {
  //check if game is over
  if (game.game_over() === true) {
    alert('Game Over');
  }

  // Log the current game position
  console.log(game.fen());
};

// Check before pick pieces that it is white and game is not over
var onDragStart = function(source, piece, position, orientation) {
  if (game.game_over() === true || piece.search(/^b/) !== -1) {
    return false;
  }
};

// Update the board position after the piece snap
// for castling, en passant, pawn promotion
var onSnapEnd = function() {
  board.position(game.fen());
};

// function to respond to players move (i.e. this is called when the white player drops their piece)
var onDrop  = function(source, target)
{
  var move = game.move({
    from:source,
    to: target, 
    promotion: 'r' //could be queen but rooks are more spicy imo
  });

  console.log("here I am ");

  window.setTimeout(function() {
    moveMe();
  }, 250);
};

var cfg = 
{
  draggable: true,
  dropOffBoard: 'snapback',
  position: 'start',
  onDrop: onDrop,
}

board = ChessBoard('board', cfg);