/*
  https://school.programmers.co.kr/learn/courses/30/lessons/87389
*/
function solution(n) {
  let answer = 1
  while (n >= answer) {
    if (n % answer === 1) {
      return answer
    }
    answer += 1
  }
}
