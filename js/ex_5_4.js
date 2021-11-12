/**
 * @param {string} str string consists of only alphabetical characters and spaces(' ').
 * @returns {string} str with all even indexed characters in each word upper cased, 
 * and all odd indexed characters in each word lower cased
 */
function toWeirdCase(str) {
    let weird = '';
    const space = ' ';
    const strLen = str.length;
    for (let i = 0; i < strLen; i++) {
        let char = str.charAt(i);
        if (char === space) {
            weird += char;
        } else {
            weird += i % 2 ? char.toLowerCase() : char.toUpperCase();
        }
    }
    return weird;
}

console.log(toWeirdCase("String"));//"StRiNg"
console.log(toWeirdCase("Weird string case"));//"WeIrD StRiNg cAsE"
