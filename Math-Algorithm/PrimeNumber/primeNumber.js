/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */
const isPrime = n => {
    if(n < 2){
        return false;
    }

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
// Big-O = O(n)

console.log(isPrime(1)); // Output: false
console.log(isPrime(2)); // Output: true
console.log(isPrime(4)); // Output: false