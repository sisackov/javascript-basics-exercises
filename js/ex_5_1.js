/**
 * @param {string} str string with at least 2 characters
 * @returns {string} str with the first and last chars removed
 */
const trimStr = (str) => str.substring(1, str.length - 1);

console.log(trimStr('ab'));//''
console.log(trimStr('abc'));//'b'
console.log(trimStr('abcd'));//'bc'
console.log(trimStr('abcde'));//'bcd'