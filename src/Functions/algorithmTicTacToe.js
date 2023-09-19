function evaluate(board,player) {
    //checking rows
    for (let row = 0; row < 3; row++) {
        if (board[row][0] !== 'N' && 
            board[row][0] === board[row][1] && 
            board[row][1] === board[row][2]) {
            if(board[row][0]===player)
                return 10;
            return -10;
        } 
        if (board[row][0] !== 'N' && 
            board[row][0] === board[row][1] ) {
            if(board[row][0]===player)
                return 5;
            return -5;
        }    
        if (board[row][1] !== 'N' && 
            board[row][1] === board[row][2]) {
            if(board[row][1]===player)
                return 5;
            return -5;
        } 
        if (board[row][0] !== 'N' && 
            board[row][0] === board[row][2] ) {
            if(board[row][0]===player)
                return 5;
            return -5;
        } 
        if (board[row][0] !== 'N') {
            if(board[row][0]===player)
                return 2;
            return -2;
        }  
        if (board[row][0] !== 'N' && board[row][1] == 'N' && board[row][2] == 'N') {
            console.log('aqui')
            if(board[row][0]===player)
                return 1;
            return -1;
        }  
    }
    //checking columns
    for (let col = 0; col < 3; col++) {
        if (board[0][col] !== 'N' && 
            board[0][col] === board[1][col] && 
            board[1][col] === board[2][col]) {
            if(board[0][col]===player)
                return 10;
            return -10;
        }
        if (board[0][col] !== 'N' && 
        board[0][col] === board[1][col] ) {
        if(board[0][col]===player)
            return 5;
        return -5;
    }    
    if (board[1][col] !== 'N' && 
        board[1][col] === board[2][col]) {
        if(board[1][col]===player)
            return 5;
        return -5;
    } 
    if (board[0][col] !== 'N' && 
        board[0][col] === board[2][col] ) {
        if(board[0][col]===player)
            return 5;
        return -5;
    } 
    if (board[0][col] !== 'N') {
        if(board[0][col]===player)
            return 2;
        return -2;
    }  
    }
    //checking diagonal
    if (board[0][0] !== 'N' &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]) {
        if(board[0][0]===player)
            return 10;
        return -10;
      }
      if (board[0][0] !== 'N' &&
        board[0][0] === board[1][1] ) {
        if(board[0][0]===player)
            return 5;
        return -5;
      }
      if (board[1][1] !== 'N' &&
        board[1][1] === board[2][2]) {
        if(board[1][1]===player)
            return 5;
        return -5;
      }
      if (board[0][0] !== 'N' &&
        board[0][0] === board[2][2]) {
        if(board[0][0]===player)
            return 5;
        return -5;
      }
    
      if (board[0][2] !== 'N' &&
          board[0][2] === board[1][1] &&
          board[1][1] === board[2][0]) {
            if(board[0][2]===player)
            return 10;
         return -10;
      }
      if (board[0][2] !== 'N' &&
          board[0][2] === board[1][1])  {
            if(board[0][2]===player)
            return 5;
         return -5;
      }
      if (board[1][1] !== 'N' &&
          board[1][1] === board[2][0]) {
            if(board[2][0]===player)
            return 5;
         return -5;
      }
      if (board[0][2] !== 'N' &&
          board[0][2] === board[2][0]) {
            if(board[0][2]===player)
            return 5;
         return -5;
      }

      return 0;
    
}
function isMovesLeft(board) {
    for (let col = 0; col < 3; col++) {
        for (let row = 0; row < 3; row++) {
            if (board[row][col]==='N') {
                return true
            }
        }
    }
    return false;
}




function minmax(board,player, depth,isMaximizingPlayer) {
    let actualScore =evaluate(board,player)
    
    if(actualScore >0 || actualScore <0)
        return actualScore
    if(!isMovesLeft(board))
        return 0;

    if(isMaximizingPlayer){
        let bestVal = -1000;
        for (let col = 0; col < 3; col++) {
            for (let row = 0; row < 3; row++) {
                if(board[row][col]==='N'){
                    board[row][col]=player
                    const value = minmax(board,player, depth+1, false)
                    bestVal = Math.max( bestVal, value)
                    board[row][col]='N'
                }
            }
        }
        return bestVal
    }else{
        let bestVal = 1000;
        for (let col = 0; col < 3; col++) {
            for (let row = 0; row < 3; row++) {
                if(board[row][col]==='N'){
                    board[row][col]=player
                    const value = minmax(board,player, depth+1, true)
                    bestVal = Math.max( bestVal, value)
                    board[row][col]='N'
                }
            }
        }
    }

    
}


export function findBestMove(board,player) {
    let bestMove=null;
    let rowBM=-1;
    let colBM=-1;

    for (let col = 0; col < 3; col++) {
        for (let row = 0; row < 3; row++) {
            if(board[row][col]==='N'){
                board[row][col]=player
                const actualVal = minmax(board,player, 0, false);
                //console.log(board)
                //console.log(row,col,actualVal)
                board[row][col]='N'
                if(actualVal>bestMove){
                    bestMove=actualVal;
                    rowBM=row;
                    colBM=col;
                }

            }
        }
    }
    return [rowBM,colBM,bestMove];
}

/*
        
let board=[[ 'X', 'O', 'N'],
        [ 'N', 'X', 'O'],
        [ 'N', 'N', 'O']];
 
console.log(findBestMove(board,'X'));
*/
