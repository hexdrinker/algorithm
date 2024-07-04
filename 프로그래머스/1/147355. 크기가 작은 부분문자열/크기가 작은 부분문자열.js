function solution(t, p) {
    let result = 0;
    const length = p.length;
    for (let i = 0; i <= t.length - length; i++) {
        if (parseInt(t.slice(i, i + length)) <= parseInt(p)) {
            result++;
        }
    }
    return result;
}