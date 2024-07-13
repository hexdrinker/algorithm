function solution(dirs) {
    let x = 0;
    let y = 0;
    const posList = new Set();
    
    for (let i = 0; i < dirs.length; i++) {
        const [nx, ny] = getPos(x, y, dirs[i])
        if (!validPos(nx, ny)) {
            continue;
        }
        posList.add(`${x}${y}${nx}${ny}`);
        posList.add(`${nx}${ny}${x}${y}`);
        [x, y] = [nx, ny];
    }
    
    return posList.size / 2
}

function validPos(x, y) {
    return x <= 5 && x >= -5 && y <= 5 && y >= -5
}

function getPos(x, y, dir) {
    switch (dir) {
        case 'U':
            return [x, y + 1]
        case 'D':
            return [x, y - 1]
        case 'L':
            return [x - 1, y]
        case 'R':
            return [x + 1, y]
    }
}