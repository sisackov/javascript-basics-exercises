/**
 * @param {string} str non-empty string of words
 * @returns {number} length of the shortest word(s)
 */
function shortesWordLength(str) {
    let min = str.length;//initialising to big number
    let words = str.split(' ');
    for (const word of words) {
        let len = word.length;
        min = len < min && len || min;
    }
    return min;
}

console.log(shortesWordLength('Your task is to write a function maskify'));//1
console.log(shortesWordLength('String will never be empty'));//2
console.log(shortesWordLength('account for different data types'));//3