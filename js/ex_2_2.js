/**
 * Method to convert binary array to decimal number using the 
 * function: decimal = a[n](2**0) + a[n-1]*(2**(1)) + ... + a[0]*(2**n)
 * where n is the array length
 * @param {array} arr an array of ones and zeroes
 * @returns {number} the equivalent binary value to an integer
 */
function binaryToDecimal(arr) {
    let decimal = 0;
    let n = arr.length - 1;
    for (let i = 0; i <= n; i++) {
        decimal += arr[i] * Math.pow(2, n - i);
    }
    return decimal;
}

console.log(binaryToDecimal([0, 0, 0, 1]));//1
console.log(binaryToDecimal([0, 0, 1, 0]));//2
console.log(binaryToDecimal([0, 1, 0, 1]));//5
console.log(binaryToDecimal([1, 0, 0, 1]));//9
console.log(binaryToDecimal([0, 0, 1, 1]));//3
console.log(binaryToDecimal([0, 1, 1, 0]));//6
console.log(binaryToDecimal([1, 1, 1, 1]));//15
console.log(binaryToDecimal([1, 0, 1, 1]));//11