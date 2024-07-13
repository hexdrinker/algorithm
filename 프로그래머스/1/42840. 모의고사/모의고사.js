function solution(answers) {
    const method1 = [1,2,3,4,5];
    const method2 = [2,1,2,3,2,4,2,5];
    const method3 = [3,3,1,1,2,2,4,4,5,5];
    const cntObjectArray = [
        { id: 1, cnt: 0 },
        { id: 2, cnt: 0 },
        { id: 3, cnt: 0 },
    ]
    for (let i = 0; i < answers.length; i++) {
        if (method1[i % 5] === answers[i]) {
            cntObjectArray[0].cnt += 1
        }
        if (method2[i % 8] === answers[i]) {
            cntObjectArray[1].cnt += 1
        }
        if (method3[i % 10]=== answers[i]) {
            cntObjectArray[2].cnt += 1
        }
    }
    const max = Math.max(...cntObjectArray.map(item => item.cnt))
    const result = [];
    cntObjectArray.forEach(item => {
      if (max === item.cnt) {
          result.push(item.id);
      }
    })
    return result;
}