function solution(nums) {
    const pokemon = nums.length / 2
    const set = new Set(nums)
    const arr = [...set]
    if (arr.length <= pokemon) {
        return arr.length
    } else {
        return pokemon
    }
}