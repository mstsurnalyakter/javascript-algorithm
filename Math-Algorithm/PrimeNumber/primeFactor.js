/**
 *  Finds prime factors of a number.
 * 
 * @param {number} n - the number that is going to be split into prime factors. 
 * @returns {number[]} - array of prime factors.
 */
const primeFactors = n => { 
    let nn = n;

    const arr = [];
    for (let i = 2; i <= Math.sqrt(nn); i += 1) {
      while (nn % i === 0) {
        nn /= i;
        arr.push(i);
      }
    }
    if (nn !== 1) {
      arr.push(nn);
    }
  
    return arr;
  }
   
   console.log(primeFactors(9)); // Output: [ 3, 3 ]
   console.log(primeFactors(100)); // Output: [ 2, 2, 5, 5 ]
