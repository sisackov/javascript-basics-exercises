/**
 * Using the summation formula :)
 * @param {number} n integer greater than zero
 * @returns {number} sum of numbers of 1....n
 */
function summation(n) {
    return (n * (n + 1)) / 2;
}

console.log(summation(2));//3
console.log(summation(8));//36
console.log(summation(7));//28