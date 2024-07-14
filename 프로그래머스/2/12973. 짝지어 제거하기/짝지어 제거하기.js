function solution(s) {
    const result = []
    
    for (let i = 0; i < s.length; i++) {
        if (result.at(-1) === s[i]) {
            result.pop();
        } else {
            result.push(s[i]);
        }
    }
    return !result.length ? 1 : 0
}