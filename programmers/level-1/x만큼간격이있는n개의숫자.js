/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12954
*/
function solution(x, n) {
  const answer = [x]
  for (let i = 2; i <= n; i++) {
    answer.push(i * x)
  }
  return answer
}
