
/**
 * Reccursive method to return the nth fibonacci number
 * @param {number} n the number of the element in the sequence 
 * @returns the element
 */
function fibonacci(n) {
    if (n > 1) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    return n;
}

console.log(fibonacci(8));//21
console.log(fibonacci(3));//2
console.log(fibonacci(4));//3