/**
 * 
 * @param {number} n 
 * @returns {number}
 */
const recursiveFibonacci = n => {
    if(n < 2){
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n -2);
}

console.log(recursiveFibonacci(2)); // Output: 1
console.log(recursiveFibonacci(5)); // // Output: 5