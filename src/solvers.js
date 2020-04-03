/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) { // n = 2
  var solution = board.rows(); //fixme
  // Create a new board = Board({n: n})
  // Iterate through rows
  // Iterate through col



  // Loop by n rooks
  // Loop through rows
  // breakLoop = false
  // Loop through columns
  // If the square has a value of 0
  // Set the value of the square to 1
  // Set breakLoop = true
  // Break loop
  // If breakLoop is true
  // break row loop

  //____________________________________________________________________________

  //findNRooksSolution(2)
  //define newBoard = new Board(n);
  //define holderArray

  //define recursive(newBoard)
  // does newBoard have any pawns?
  //loop through each coordinate
  //if coordinate = 1, yes
  //else , no


  // if not,
  //for each square 1, 2, 3, 4,
  //create branchBoard = new Board(n)
  //put pawn on that square
  //reassign newBoard to branchBoard
  //run recursive function with input newBoard

  //if yes,
  //for each square available after the LATEST occurence of a pawn
  //for each square available ----> 2, 3, 4
  //create copy of newBoard called babyBoard
  //put pawn on that square (now there's two pawns on the board) IF no conflict
  //if number of pawns = n:
  //push that complete matrix in a holderArray
  //else
  // reassign newBoard = babyBoard
  //run recursive function with input babyBoard






  // for each rook (two rooks)
  //   for each square+counter: <--- start from the first square again
  //     put rook on the square
  //     if rowConflicts = false
  //     put rook there
  //     else
  //     continue




  //place the first rook at coordinates 0,0
  //for the second rook, rotate the placement of it until hasAnyRooksConflict = false;
  //place rook there
  //return solution matrix


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // Returns a matrix [[1,0], [0,1]]
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  var board = new Board({n: n});

  // Recursive function
  var findSolutions = function (row) {
    // Base case
    // if (row === n) {
    if (row === n) {
      //   if matrix passes test, increment solutionCount
      solutionCount++;
      return;
    }
    // Recursion case
    // Loop through the 'columns' (amount of rows) (n)
    for (var i = 0; i < n; i++) {
      // Place a piece on the current square
      board.togglePiece(row, i);
      // Check if placing the piece caused any conflicts in the board
      if (!board.hasAnyRooksConflicts()) {
        // If it's safe (no conflicts)
        // Call the recursion function passing in the next row as the argument
        findSolutions(row + 1);
      }
      board.togglePiece(row, i);
      // Toggle piece to reset the board to a state right before we placed piece down
    }
  };

  findSolutions(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme

  var board = new Board({n: n});

  // Recursive function
  var findSolutions = function (row) {
    // Base case
    // if (row === n) {
    if (row === n) {
      //   if matrix passes test, increment solutionCount
      solutionCount++;
      return;
    }
    // Recursion case
    // Loop through the 'columns' (amount of rows) (n)
    for (var i = 0; i < n; i++) {
      // Place a piece on the current square
      board.togglePiece(row, i);
      // Check if placing the piece caused any conflicts in the board
      if (!board.hasAnyQueensConflicts()) {
        // If it's safe (no conflicts)
        // Call the recursion function passing in the next row as the argument
        findSolutions(row + 1);
      }
      board.togglePiece(row, i);
      // Toggle piece to reset the board to a state right before we placed piece down
    }
  };

  findSolutions(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};