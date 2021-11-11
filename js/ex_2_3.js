/**
 * @param {number} square perfect square
 * @returns -1 if square isn't perfect. Otherwise the next integral perfect square after the parameter
 */
function findNextSquare(square) {
    let next = -1;

    let sqrt = Math.sqrt(square);
    let trunc = Math.trunc(sqrt);//the integer part of the number

    if ((sqrt - trunc) === 0) {//check that square is indeed perfect
        next = Math.pow(sqrt + 1, 2);
    }

    return next;
}

console.log(findNextSquare(121));// --> returns 144
console.log(findNextSquare(625));// --> returns 676
console.log(findNextSquare(114));// --> returns -1