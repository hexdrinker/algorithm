function solution(N, stages) {
    let userCnt = stages.length;
    const failRate = []
    for (let i = 1; i <= N; i++) {
        const failListLength = stages.filter(stage => stage === i).length
        failRate.push([i, failListLength / userCnt])
        userCnt -= failListLength;
    }
    return failRate.sort((a, b) => b[1] - a[1]).map(item => item[0])
}