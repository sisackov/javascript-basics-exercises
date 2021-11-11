/**
 * @param {array} arr - array of minimum 4 positive integers
 * 
 * @returns the sum of the 2 lowest numbers in the array
 */
function sumOfLowest(arr) {
    let lowest = arr.slice(0, 2);//array that holds the 2 current lowest numbers
    for (let i = 2; i < arr.length; i++) {
        // if the current number is lower that one of the numbers is lowest - replace it
        if (arr[i] < lowest[0]) {
            lowest[0] = arr[i];
        } else if (arr[i] < lowest[1]) {
            lowest[1] = arr[i];
        }
    }
    return lowest[0] + lowest[1];
}

console.log(sumOfLowest([19, 5, 42, 2, 77]));//7
console.log(sumOfLowest([10, 343445353, 3453445, 3453545353453]));//3453455