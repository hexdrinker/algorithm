/*
  https://school.programmers.co.kr/learn/courses/30/lessons/86051
*/
function solution(numbers) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    .filter((num, idx) => !numbers.includes(num))
    .reduce((acc, cur, idx) => (acc += cur), 0)
}
