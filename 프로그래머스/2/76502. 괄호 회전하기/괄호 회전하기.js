function rotateString(s, index) {
    const length = s.length;
    return `${s.substring(index, length)}${s.substring(0, index)}`
}

function isValidString(str) {
    const result = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[' || str[i] === '{' || str[i] === '(') {
            result.push(str[i])
        } else {
            if (`${result.at(-1)}${str[i]}` === '{}' || `${result.at(-1)}${str[i]}` === '()' || `${result.at(-1)}${str[i]}` === '[]') {
                result.pop();
                continue;
            }
            result.push(str[i]);
        }
    }
    console.log(result.length)
    return !result.length 
}

function solution(s) {
    let cnt = 0;
    
    for (let i = 0; i < s.length; i++) {
        const str = rotateString(s, i);
        if (isValidString(str)) {
            cnt += 1;
        }
    }
    return cnt;
}