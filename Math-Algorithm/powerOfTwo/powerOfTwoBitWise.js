/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */
const powerOfTwoBitWise = n => {
    if(n < 1){
        return false;
    }
    return (n & (n - 1)) === 0;
}

// Big-O = O(n)

console.log(powerOfTwoBitWise(2)); // Output: true
console.log(powerOfTwoBitWise(5)); // Output: false