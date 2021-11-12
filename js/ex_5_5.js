/**
 * Converts a name into initials
 * @param {string} str two words with one space in between them
 * @returns {string} two capital letters with a dot separating them
 */
const abbreviateToWords = (str) => (
    str.charAt(0).toUpperCase() + '.' + str.charAt(str.indexOf(' ') + 1).toUpperCase()
)


console.log(abbreviateToWords('Sam Harris'));//S.H
console.log(abbreviateToWords('Patrick Feeney'));//P.F
