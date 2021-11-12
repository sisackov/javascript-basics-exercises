/**
 * 
 * @param {string} str 
 * @returns {string} str with all but the last four characters converted into '#
 */
function maskify(str) {
    let masked = '';
    const tag = '#';
    const strLen = str.length - 4;
    for (let i = 0; i < strLen; i++) {
        masked += tag;
    }
    return masked + str.substring(strLen);
}

console.log(maskify("Skippy"));//##ippy
console.log(maskify("Nananananananananananananananana Batman!"));//####################################man!
console.log(maskify("4556364607935616"));//############5616
console.log(maskify("64607935616"));//#######5616
console.log(maskify("1"));//1
console.log(maskify(""));//''
