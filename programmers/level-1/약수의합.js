/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12928
*/
function solution(n, x = 1) {
  let answer = 0
  while (n >= x) {
    if (n % x === 0) {
      answer += x
    }
    x++
  }
  return answer
}
