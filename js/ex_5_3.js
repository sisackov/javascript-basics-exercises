/**
 * Converts dash/underscore delimited words into camel casing. 
 * The first word within the output should be capitalized only 
 * if the original word was capitalized
 * @param {string} str 
 * @param {string}
 */
function toCamelCase(str) {
    // const regexp = /^[-_]+$/;//the + allowsto match strings with length>1
    const dash = '-';
    const underscore = '_';

    let camel = '';
    const strLen = str.length;
    // let orig = str.slice();

    for (let i = 0; i < strLen; i++) {
        let char = str.charAt(i);
        if (char === dash || char === underscore) {
            if ((i + 1) !== strLen) {//if this is the last character - just ommit it
                i++;
                camel += str.charAt(i).toLocaleUpperCase();
            }
        } else {
            camel += char;
        }
    }
    return camel;
}


console.log(toCamelCase("the-stealth-warrior"));// returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior"));// returns "TheStealthWarrior"

