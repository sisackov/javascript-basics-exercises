/**
 * @param {string} operation 
 * @param {number} value1
 * @param {number} value2
 * @returns {number} result of the operation on the values
 */
function basicOp(operation, value1, value2) {
    let result;
    switch (operation) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            result = value1 / value2;
            break;
    }
    return result;
}

console.log(basicOp('+', 4, 7));  // Output: 11
console.log(basicOp('-', 15, 18));// Output: -3
console.log(basicOp('*', 5, 5));  // Output: 25
console.log(basicOp('/', 49, 7)); // Output: 7