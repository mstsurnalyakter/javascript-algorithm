/**
 * 
 * @param {number} n 
 * @returns {number[]}
 */
const fibonacci = n => {
    const fib = [0, 1];
    for(let i = 2; i<n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
  return fib;
}

// Big-O = O(n)

console.log(fibonacci(2)); // Output: [0, 1]
console.log(fibonacci(4)); // Output: [ 0, 1, 1, 2 ]
console.log(fibonacci(6)); // Output: [ 0, 1, 1, 2, 3, 5 ]