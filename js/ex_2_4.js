/**
 * @param {array} arr array that contains at least 3 numbers
 * @returns {number} the unique number in the array
 */
function findUniq(arr) {
    let num1 = arr[0];
    let num2 = arr[1];

    if (num1 === num2) {
        // if the the 2 first are equal than unique is 
        // one of the numbers that's not equal to them
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== num1) {
                return arr[i];
            }
        }
    }

    //if the the 2 first are not equal than one of them is unique
    // by comparing to the third number we'll find which
    return num1 === arr[2] ? num2 : num1;
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));//2
console.log(findUniq([0, 0, 0.55, 0, 0]));//0.55
console.log(findUniq([3, 4, 3, 3, 3, 3]));//4