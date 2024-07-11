function solution(s){
    let result = 0;
    
    if (s[0] === ')') {
        return false;
    }
    
    for(let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            result += 1;
        } else {
            result -= 1;
            if (result < 0) return false
        }
    }
    
    return result === 0
}