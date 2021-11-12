/**
 * @param {string} str non-empty string of words
 * @returns {number} length of the longest word(s)
 */
function longestWordLength(str) {
    let max = 0;
    let words = str.split(' ');
    for (const word of words) {
        let len = word.length;
        max = len > max && len || max;
    }
    return max;
}

console.log(longestWordLength('Your task is to write a function maskify'));//8
console.log(longestWordLength('String will never be empty'));//6
console.log(longestWordLength('account for different data types'));//9