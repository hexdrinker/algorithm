function solution(board, moves) {
    const result = [];
    let cnt = 0;
    const columnLen = board[0].length
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < columnLen; j++) {
            if (board[j][moves[i] - 1] !== 0) {
                if (result.at(-1) === board[j][moves[i] - 1]) {
                    result.pop();
                    board[j][moves[i] - 1] = 0;
                    cnt += 2;
                    break;
                } else {
                    result.push(board[j][moves[i] - 1]);
                    board[j][moves[i] - 1] = 0;
                    break;
                }
            }
            
        }
    }
    return cnt;
}