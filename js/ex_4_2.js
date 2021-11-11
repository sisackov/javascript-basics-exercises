/**
 * 
 * @param {array} signature will always contain 3 numbers
 * @param {number} n index of last element
 * @returns the first n elements of the tribonacci sequence - signature 
 * included of the so seeded sequence.
 * TODO - make this reccursive
 */
function tribonaci(signature, n) {
    if (n < 4) {
        return signature.slice(0, n);
    }

    let sequence = signature.slice();
    for (let i = 3; i < n; i++) {
        sequence.push(sumArray(sequence.slice(i - 3, i)));
    }

    return sequence;
}

/**
 * @param {array} arr array of size 3
 * @returns the sum of the items in the array
 */
const sumArray = (arr) => (arr[0] + arr[1] + arr[2])


console.log(tribonaci([0, 0, 1], 10));//[0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
console.log(tribonaci([1, 1, 1], 10));//[1, 1 ,1, 3, 5, 9, 17, 31, 57, 105]