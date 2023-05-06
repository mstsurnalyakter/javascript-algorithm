/**
 *  Calculate fibonacci number at specific position using Dynamic Programming approach.
 * 
 * @param {number} n 
 * @returns {number} 
 */
 const fibonacci = n => {
    let curr = 1;
    let prev = 0;
  
    if (n === 1) {
      return 1;
    }
  
    let count = n - 1;
  
    while (count) {
      curr += prev;
      prev = curr - prev;
  
      count -= 1;
    }
  
    return curr;
  }
  
  console.log(fibonacci(5)); // Output: 5
  console.log(fibonacci(7)); // Output: 13