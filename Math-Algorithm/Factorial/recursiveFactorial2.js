/**
 * 
 * @param {number} n 
 * @returns {number}
 */
const recursiveFactorial = n => {
    return n > 1 ? n * recursiveFactorial(n - 1) : 1;
  }
  
console.log(recursiveFactorial(3)); // Output: 6
console.log(recursiveFactorial(5)); // Output: 120