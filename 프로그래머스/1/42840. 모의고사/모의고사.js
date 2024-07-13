function solution(answers) {
    const result = [];
    const method1 = [1,2,3,4,5];
    const method2 = [2,1,2,3,2,4,2,5];
    const method3 = [3,3,1,1,2,2,4,4,5,5];
    const cntArr = [0, 0, 0]
    
    for (let i = 0; i < answers.length; i++) {
        if (method1[i % 5] === answers[i]) {
            cntArr[0] += 1
        }
        if (method2[i % 8] === answers[i]) {
            cntArr[1] += 1
        }
        if (method3[i % 10]=== answers[i]) {
            cntArr[2] += 1
        }
    }
    const max = Math.max(...cntArr)
    cntArr.forEach((cnt, idx) => {
      if (max === cnt) {
          result.push(idx + 1);
      }
    })
    return result;
}