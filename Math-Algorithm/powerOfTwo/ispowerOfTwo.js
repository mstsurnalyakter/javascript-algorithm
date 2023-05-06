/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */
const isPowerOfTwo = n => {
    if(n < 1){
        return false;
    }

    while(n > 1){
        if(n % 2 !== 0){
            return false;
        }
        n /= 2;
    }
    return true;
} 

// Big-O = O(n)

console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(2)); // Outpur: true
console.log(isPowerOfTwo(5)); // Output: false