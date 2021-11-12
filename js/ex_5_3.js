/**
 * Converts dash/underscore delimited words into camel casing. 
 * The first word within the output should be capitalized only 
 * if the original word was capitalized
 * @param {string} str 
 * @param {string}
 */
function toCamelCase(str) {
    const regexp = /^[-_]+$/;//the + allows to match strings with length>1
    let camel = '';
    const strLen = str.length;

    for (let i = 0; i < strLen; i++) {
        let char = str.charAt(i);
        if (char.match(regexp)) {
            if ((i + 1) !== strLen) {//if this is the last character - just ommit it
                i++;
                camel += str.charAt(i).toUpperCase();
            }
        } else {
            camel += char;
        }
    }
    return camel;
}


console.log(toCamelCase("the-stealth-warrior"));//"theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior"));//"TheStealthWarrior"
console.log(toCamelCase("abc"));// abc
console.log(toCamelCase("The_Stealth_Warrio_r"));//"TheStealthWarrioR"
console.log(toCamelCase("The_Stealth_Warrior_"));//"TheStealthWarrior"


/*
TODO - make this work
function toCamelCase(str) {
    return str.split(/^[-_]+$/)
        .map(s => (s.charAt(0).toUpperCase() + s.slice(1)))
        .join('')
} */