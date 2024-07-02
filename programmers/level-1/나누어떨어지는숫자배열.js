/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12910
*/
function solution(arr, divisor) {
  const result = arr
    .filter((num, idx) => num % divisor === 0)
    .sort((a, b) => a - b)
  return result.length ? result : [-1]
}
