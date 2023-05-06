/**
 * 
 * @param {Number} n 
 * @returns {Number}
 */
const recursiveFactorial = n => {
    if(n === 0){
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(3)); // Output : 6
console.log(recursiveFactorial(5)); // Output : 120