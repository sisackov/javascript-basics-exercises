/**
 * Repeats the given string src exactly count times.
 * @param {number} count 
 * @param {number} src 
 * @returns {string}
 */
// const repeat_str = (count, src) => new Array(count + 1).join(src);


console.log(repeat_str(6, 'I'));//"IIIIII"
console.log(repeat_str(5, 'Hello'));//"HelloHelloHelloHelloHello"


function repeat_str(count, src) {
    let str = '';
    for (let i = 0; i < count; i++) {
        str += src;
    }
    return str;
}
